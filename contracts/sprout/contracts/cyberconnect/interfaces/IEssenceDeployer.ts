/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IEssenceDeployerInterface extends utils.Interface {
  functions: {
    "deployEssence(bytes32,address)": FunctionFragment;
    "essParams()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "deployEssence" | "essParams"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployEssence",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "essParams", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "deployEssence",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "essParams", data: BytesLike): Result;

  events: {};
}

export interface IEssenceDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEssenceDeployerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deployEssence(
      salt: PromiseOrValue<BytesLike>,
      profileProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    essParams(
      overrides?: CallOverrides
    ): Promise<[string] & { profileProxy: string }>;
  };

  deployEssence(
    salt: PromiseOrValue<BytesLike>,
    profileProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  essParams(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    deployEssence(
      salt: PromiseOrValue<BytesLike>,
      profileProxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    essParams(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deployEssence(
      salt: PromiseOrValue<BytesLike>,
      profileProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    essParams(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deployEssence(
      salt: PromiseOrValue<BytesLike>,
      profileProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    essParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
