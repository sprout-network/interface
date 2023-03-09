/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ICyberBoxEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "ClaimBox(address,uint256)": EventFragment;
    "Initialize(address,address,string,string)": EventFragment;
    "SetSigner(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimBox"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetSigner"): EventFragment;
}

export interface ClaimBoxEventObject {
  to: string;
  boxId: BigNumber;
}
export type ClaimBoxEvent = TypedEvent<
  [string, BigNumber],
  ClaimBoxEventObject
>;

export type ClaimBoxEventFilter = TypedEventFilter<ClaimBoxEvent>;

export interface InitializeEventObject {
  owner: string;
  signer: string;
  name: string;
  symbol: string;
}
export type InitializeEvent = TypedEvent<
  [string, string, string, string],
  InitializeEventObject
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export interface SetSignerEventObject {
  preSigner: string;
  newSigner: string;
}
export type SetSignerEvent = TypedEvent<[string, string], SetSignerEventObject>;

export type SetSignerEventFilter = TypedEventFilter<SetSignerEvent>;

export interface ICyberBoxEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICyberBoxEventsInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "ClaimBox(address,uint256)"(
      to?: PromiseOrValue<string> | null,
      boxId?: PromiseOrValue<BigNumberish> | null
    ): ClaimBoxEventFilter;
    ClaimBox(
      to?: PromiseOrValue<string> | null,
      boxId?: PromiseOrValue<BigNumberish> | null
    ): ClaimBoxEventFilter;

    "Initialize(address,address,string,string)"(
      owner?: PromiseOrValue<string> | null,
      signer?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null
    ): InitializeEventFilter;
    Initialize(
      owner?: PromiseOrValue<string> | null,
      signer?: PromiseOrValue<string> | null,
      name?: null,
      symbol?: null
    ): InitializeEventFilter;

    "SetSigner(address,address)"(
      preSigner?: PromiseOrValue<string> | null,
      newSigner?: PromiseOrValue<string> | null
    ): SetSignerEventFilter;
    SetSigner(
      preSigner?: PromiseOrValue<string> | null,
      newSigner?: PromiseOrValue<string> | null
    ): SetSignerEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
