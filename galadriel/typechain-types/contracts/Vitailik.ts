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

export declare namespace IOracle {
  export type GroqResponseStruct = {
    id: string;
    content: string;
    created: BigNumberish;
    model: string;
    systemFingerprint: string;
    object: string;
    completionTokens: BigNumberish;
    promptTokens: BigNumberish;
    totalTokens: BigNumberish;
  };

  export type GroqResponseStructOutput = [
    id: string,
    content: string,
    created: bigint,
    model: string,
    systemFingerprint: string,
    object: string,
    completionTokens: bigint,
    promptTokens: bigint,
    totalTokens: bigint
  ] & {
    id: string;
    content: string;
    created: bigint;
    model: string;
    systemFingerprint: string;
    object: string;
    completionTokens: bigint;
    promptTokens: bigint;
    totalTokens: bigint;
  };
}

export interface VitailikInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addSelection"
      | "findHPInstances"
      | "findImageLine"
      | "games"
      | "getImages"
      | "getMessageHistoryContents"
      | "getMessageHistoryRoles"
      | "getSystemPrompt"
      | "onOracleFunctionResponse"
      | "onOracleGroqLlmResponse"
      | "oracleAddress"
      | "prompt"
      | "setOracleAddress"
      | "startGame"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "GameCreated" | "OracleAddressUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addSelection",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "findHPInstances",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "findImageLine",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "games", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getImages",
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
    functionFragment: "getSystemPrompt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onOracleFunctionResponse",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onOracleGroqLlmResponse",
    values: [BigNumberish, IOracle.GroqResponseStruct, string]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "prompt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setOracleAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "startGame", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addSelection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "findHPInstances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "findImageLine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "games", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getImages", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHistoryContents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHistoryRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSystemPrompt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onOracleFunctionResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onOracleGroqLlmResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prompt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOracleAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startGame", data: BytesLike): Result;
}

export namespace GameCreatedEvent {
  export type InputTuple = [owner: AddressLike, gameId: BigNumberish];
  export type OutputTuple = [owner: string, gameId: bigint];
  export interface OutputObject {
    owner: string;
    gameId: bigint;
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

export interface Vitailik extends BaseContract {
  connect(runner?: ContractRunner | null): Vitailik;
  waitForDeployment(): Promise<this>;

  interface: VitailikInterface;

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

  addSelection: TypedContractMethod<
    [selection: BigNumberish, gameId: BigNumberish],
    [void],
    "nonpayable"
  >;

  findHPInstances: TypedContractMethod<
    [input: string],
    [[string, string]],
    "view"
  >;

  findImageLine: TypedContractMethod<[input: string], [string], "view">;

  games: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, boolean] & {
        player: string;
        messagesCount: bigint;
        imagesCount: bigint;
        isFinished: boolean;
      }
    ],
    "view"
  >;

  getImages: TypedContractMethod<[chatId: BigNumberish], [string[]], "view">;

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

  getSystemPrompt: TypedContractMethod<[], [string], "view">;

  onOracleFunctionResponse: TypedContractMethod<
    [runId: BigNumberish, response: string, errorMessage: string],
    [void],
    "nonpayable"
  >;

  onOracleGroqLlmResponse: TypedContractMethod<
    [runId: BigNumberish, response: IOracle.GroqResponseStruct, arg2: string],
    [void],
    "nonpayable"
  >;

  oracleAddress: TypedContractMethod<[], [string], "view">;

  prompt: TypedContractMethod<[], [string], "view">;

  setOracleAddress: TypedContractMethod<
    [newOracleAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  startGame: TypedContractMethod<[], [bigint], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addSelection"
  ): TypedContractMethod<
    [selection: BigNumberish, gameId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "findHPInstances"
  ): TypedContractMethod<[input: string], [[string, string]], "view">;
  getFunction(
    nameOrSignature: "findImageLine"
  ): TypedContractMethod<[input: string], [string], "view">;
  getFunction(
    nameOrSignature: "games"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, boolean] & {
        player: string;
        messagesCount: bigint;
        imagesCount: bigint;
        isFinished: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getImages"
  ): TypedContractMethod<[chatId: BigNumberish], [string[]], "view">;
  getFunction(
    nameOrSignature: "getMessageHistoryContents"
  ): TypedContractMethod<[chatId: BigNumberish], [string[]], "view">;
  getFunction(
    nameOrSignature: "getMessageHistoryRoles"
  ): TypedContractMethod<[chatId: BigNumberish], [string[]], "view">;
  getFunction(
    nameOrSignature: "getSystemPrompt"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onOracleFunctionResponse"
  ): TypedContractMethod<
    [runId: BigNumberish, response: string, errorMessage: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onOracleGroqLlmResponse"
  ): TypedContractMethod<
    [runId: BigNumberish, response: IOracle.GroqResponseStruct, arg2: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "oracleAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "prompt"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setOracleAddress"
  ): TypedContractMethod<[newOracleAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startGame"
  ): TypedContractMethod<[], [bigint], "nonpayable">;

  getEvent(
    key: "GameCreated"
  ): TypedContractEvent<
    GameCreatedEvent.InputTuple,
    GameCreatedEvent.OutputTuple,
    GameCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OracleAddressUpdated"
  ): TypedContractEvent<
    OracleAddressUpdatedEvent.InputTuple,
    OracleAddressUpdatedEvent.OutputTuple,
    OracleAddressUpdatedEvent.OutputObject
  >;

  filters: {
    "GameCreated(address,uint256)": TypedContractEvent<
      GameCreatedEvent.InputTuple,
      GameCreatedEvent.OutputTuple,
      GameCreatedEvent.OutputObject
    >;
    GameCreated: TypedContractEvent<
      GameCreatedEvent.InputTuple,
      GameCreatedEvent.OutputTuple,
      GameCreatedEvent.OutputObject
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
