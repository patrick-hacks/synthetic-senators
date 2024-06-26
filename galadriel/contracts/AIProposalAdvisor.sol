// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./interfaces/IOracle.sol";

contract AIProposalAdvisor {

	address private owner;
	address public oracleAddress;
	string public instruction;
	string public name;
	uint immutable public maxIterations = 5;

	struct Proposal {
		uint256 id;
		string description;
		string summarizedDescription;
		string advice;
		uint iteration;
		bool isVoted;
		bool isResolved;
	}

	Proposal[] public proposals;

	event OracleAddressUpdated(address indexed newOracleAddress);

	constructor(address _oracleAddress, string memory _instruction, string memory _name) {
		owner = msg.sender;
		oracleAddress = _oracleAddress;
		instruction = _instruction;
		name = _name;
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "Caller is not owner");
		_;
	}

	modifier onlyOracle() {
		require(msg.sender == oracleAddress, "Caller is not oracle");
		_;
	}

	function setOracleAddress(address newOracleAddress) public onlyOwner {
		oracleAddress = newOracleAddress;
		emit OracleAddressUpdated(newOracleAddress);
	}

	// Submits an array of proposals to the advisor, then creates an LLM call for each proposal
	function submitProposals(string[] memory proposalDescriptions, uint256[] memory proposalIds) public {
		require(proposalDescriptions.length == proposalIds.length, "Proposal descriptions and IDs must have the same length");
		for (uint i = 0; i < proposalDescriptions.length; i++) {
			proposals.push(Proposal(proposalIds[i], proposalDescriptions[i], "", "", 0, false, false));
			IOracle(oracleAddress).createLlmCall(proposals.length - 1);
		}
	}

	// Called by the oracle when it receives a response. If the response doesn't 
	// have Y or N as the last char, the proposal is re-submitted
	function onOracleLlmResponse(
		uint index,
		string memory response,
		string memory /*errorMessage*/
	) public onlyOracle {
		if (!isLastCharYN(response)) {
			proposals[index].iteration++;
			if (proposals[index].iteration < maxIterations) {
				IOracle(oracleAddress).createLlmCall(proposals[index].id);
				return;
			}
		}
		proposals[index].isResolved = true;
		proposals[index].advice = response;
	}

	function getProposalAdvice(uint256 proposalId) public view returns (string memory) {
		for (uint i = 0; i < proposals.length; i++) {
			if (proposals[i].id == proposalId) {
				require(proposals[i].isResolved, "Proposal is not resolved");
				return proposals[i].advice;
			}
		}
		require (false, "Proposal not found");
		return "Proposal not found";
	}

	function getProposalCount() public view returns (uint256) {
		return proposals.length;
	}

	function setVoted(uint256 proposalId) public {
		for (uint i = 0; i < proposals.length; i++) {
			if (proposals[i].id == proposalId) {
				proposals[i].isVoted = true;
			}
		}
		require (false, "Proposal not found");
	}

	function getMessageHistoryContents(uint256 proposalId) public view returns (string[] memory) {
		string[] memory messages = new string[](1);
		messages[0] = concatenateStrings(instruction, proposals[proposalId].description);
		return messages;
	}

	function getMessageHistoryRoles(uint256 proposalId) public pure returns (string[] memory) {
		proposalId = proposalId;
		string[] memory roles = new string[](1);
		roles[0] = "system";
		return roles;
	}

	function concatenateStrings(string memory _a, string memory _b) internal pure returns (string memory) {
		return string(abi.encodePacked(_a, _b));
	}

	function isLastCharYN(string memory str) internal pure returns (bool) {
		bytes memory bStr = bytes(str);
		bytes1 lastChar = bStr[bStr.length - 1];
		if (lastChar == "Y" || lastChar == "N" || lastChar == "y" || lastChar == "n") {
			return true;
		} else {
			return false;
		}
	}
}