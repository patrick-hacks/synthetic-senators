/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ChatGptInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addMessage"
      | "chatRuns"
      | "getMessageHistoryContents"
      | "getMessageHistoryRoles"
      | "knowledgeBase"
      | "onOracleKnowledgeBaseQueryResponse"
      | "onOracleLlmResponse"
      | "oracleAddress"
      | "setOracleAddress"
      | "startChat"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ChatCreated" | "OracleAddressUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addMessage",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "chatRuns",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHistoryContents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHistoryRoles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "knowledgeBase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onOracleKnowledgeBaseQueryResponse",
    values: [BigNumberish, string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "onOracleLlmResponse",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "startChat", values: [string]): string;

  decodeFunctionResult(functionFragment: "addMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chatRuns", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHistoryContents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHistoryRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "knowledgeBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onOracleKnowledgeBaseQueryResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onOracleLlmResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startChat", data: BytesLike): Result;
}

export namespace ChatCreatedEvent {
  export type InputTuple = [owner: AddressLike, chatId: BigNumberish];
  export type OutputTuple = [owner: string, chatId: bigint];
  export interface OutputObject {
    owner: string;
    chatId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OracleAddressUpdatedEvent {
  export type InputTuple = [newOracleAddress: AddressLike];
  export type OutputTuple = [newOracleAddress: string];
  export interface OutputObject {
    newOracleAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ChatGpt extends BaseContract {
  connect(runner?: ContractRunner | null): ChatGpt;
  waitForDeployment(): Promise<this>;

  interface: ChatGptInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addMessage: TypedContractMethod<
    [message: string, runId: BigNumberish],
    [void],
    "nonpayable"
  >;

  chatRuns: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { owner: string; messagesCount: bigint }],
    "view"
  >;

  getMessageHistoryContents: TypedContractMethod<
    [chatId: BigNumberish],
    [string[]],
    "view"
  >;

  getMessageHistoryRoles: TypedContractMethod<
    [chatId: BigNumberish],
    [string[]],
    "view"
  >;

  knowledgeBase: TypedContractMethod<[], [string], "view">;

  onOracleKnowledgeBaseQueryResponse: TypedContractMethod<
    [runId: BigNumberish, documents: string[], arg2: string],
    [void],
    "nonpayable"
  >;

  onOracleLlmResponse: TypedContractMethod<
    [runId: BigNumberish, response: string, arg2: string],
    [void],
    "nonpayable"
  >;

  oracleAddress: TypedContractMethod<[], [string], "view">;

  setOracleAddress: TypedContractMethod<
    [newOracleAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  startChat: TypedContractMethod<[message: string], [bigint], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addMessage"
  ): TypedContractMethod<
    [message: string, runId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "chatRuns"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { owner: string; messagesCount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMessageHistoryContents"
  ): TypedContractMethod<[chatId: BigNumberish], [string[]], "view">;
  getFunction(
    nameOrSignature: "getMessageHistoryRoles"
  ): TypedContractMethod<[chatId: BigNumberish], [string[]], "view">;
  getFunction(
    nameOrSignature: "knowledgeBase"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onOracleKnowledgeBaseQueryResponse"
  ): TypedContractMethod<
    [runId: BigNumberish, documents: string[], arg2: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onOracleLlmResponse"
  ): TypedContractMethod<
    [runId: BigNumberish, response: string, arg2: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "oracleAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setOracleAddress"
  ): TypedContractMethod<[newOracleAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startChat"
  ): TypedContractMethod<[message: string], [bigint], "nonpayable">;

  getEvent(
    key: "ChatCreated"
  ): TypedContractEvent<
    ChatCreatedEvent.InputTuple,
    ChatCreatedEvent.OutputTuple,
    ChatCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OracleAddressUpdated"
  ): TypedContractEvent<
    OracleAddressUpdatedEvent.InputTuple,
    OracleAddressUpdatedEvent.OutputTuple,
    OracleAddressUpdatedEvent.OutputObject
  >;

  filters: {
    "ChatCreated(address,uint256)": TypedContractEvent<
      ChatCreatedEvent.InputTuple,
      ChatCreatedEvent.OutputTuple,
      ChatCreatedEvent.OutputObject
    >;
    ChatCreated: TypedContractEvent<
      ChatCreatedEvent.InputTuple,
      ChatCreatedEvent.OutputTuple,
      ChatCreatedEvent.OutputObject
    >;

    "OracleAddressUpdated(address)": TypedContractEvent<
      OracleAddressUpdatedEvent.InputTuple,
      OracleAddressUpdatedEvent.OutputTuple,
      OracleAddressUpdatedEvent.OutputObject
    >;
    OracleAddressUpdated: TypedContractEvent<
      OracleAddressUpdatedEvent.InputTuple,
      OracleAddressUpdatedEvent.OutputTuple,
      OracleAddressUpdatedEvent.OutputObject
    >;
  };
}