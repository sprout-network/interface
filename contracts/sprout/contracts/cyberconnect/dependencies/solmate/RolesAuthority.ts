/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface RolesAuthorityInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "canCall(address,address,bytes4)": FunctionFragment;
    "doesRoleHaveCapability(uint8,address,bytes4)": FunctionFragment;
    "doesUserHaveRole(address,uint8)": FunctionFragment;
    "getRolesWithCapability(address,bytes4)": FunctionFragment;
    "getUserRoles(address)": FunctionFragment;
    "isCapabilityPublic(address,bytes4)": FunctionFragment;
    "owner()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setPublicCapability(address,bytes4,bool)": FunctionFragment;
    "setRoleCapability(uint8,address,bytes4,bool)": FunctionFragment;
    "setUserRole(address,uint8,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authority"
      | "canCall"
      | "doesRoleHaveCapability"
      | "doesUserHaveRole"
      | "getRolesWithCapability"
      | "getUserRoles"
      | "isCapabilityPublic"
      | "owner"
      | "setAuthority"
      | "setOwner"
      | "setPublicCapability"
      | "setRoleCapability"
      | "setUserRole"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "doesRoleHaveCapability",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "doesUserHaveRole",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRolesWithCapability",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserRoles",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isCapabilityPublic",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPublicCapability",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleCapability",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserRole",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doesRoleHaveCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doesUserHaveRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRolesWithCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCapabilityPublic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPublicCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoleCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUserRole",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
    "PublicCapabilityUpdated(address,bytes4,bool)": EventFragment;
    "RoleCapabilityUpdated(uint8,address,bytes4,bool)": EventFragment;
    "UserRoleUpdated(address,uint8,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PublicCapabilityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleCapabilityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserRoleUpdated"): EventFragment;
}

export interface AuthorityUpdatedEventObject {
  user: string;
  newAuthority: string;
}
export type AuthorityUpdatedEvent = TypedEvent<
  [string, string],
  AuthorityUpdatedEventObject
>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface PublicCapabilityUpdatedEventObject {
  target: string;
  functionSig: string;
  enabled: boolean;
}
export type PublicCapabilityUpdatedEvent = TypedEvent<
  [string, string, boolean],
  PublicCapabilityUpdatedEventObject
>;

export type PublicCapabilityUpdatedEventFilter =
  TypedEventFilter<PublicCapabilityUpdatedEvent>;

export interface RoleCapabilityUpdatedEventObject {
  role: number;
  target: string;
  functionSig: string;
  enabled: boolean;
}
export type RoleCapabilityUpdatedEvent = TypedEvent<
  [number, string, string, boolean],
  RoleCapabilityUpdatedEventObject
>;

export type RoleCapabilityUpdatedEventFilter =
  TypedEventFilter<RoleCapabilityUpdatedEvent>;

export interface UserRoleUpdatedEventObject {
  user: string;
  role: number;
  enabled: boolean;
}
export type UserRoleUpdatedEvent = TypedEvent<
  [string, number, boolean],
  UserRoleUpdatedEventObject
>;

export type UserRoleUpdatedEventFilter = TypedEventFilter<UserRoleUpdatedEvent>;

export interface RolesAuthority extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RolesAuthorityInterface;

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
    authority(overrides?: CallOverrides): Promise<[string]>;

    canCall(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    doesRoleHaveCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    doesUserHaveRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getRolesWithCapability(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUserRoles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isCapabilityPublic(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPublicCapability(
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRoleCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUserRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  canCall(
    user: PromiseOrValue<string>,
    target: PromiseOrValue<string>,
    functionSig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  doesRoleHaveCapability(
    role: PromiseOrValue<BigNumberish>,
    target: PromiseOrValue<string>,
    functionSig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  doesUserHaveRole(
    user: PromiseOrValue<string>,
    role: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getRolesWithCapability(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getUserRoles(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  isCapabilityPublic(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    newAuthority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPublicCapability(
    target: PromiseOrValue<string>,
    functionSig: PromiseOrValue<BytesLike>,
    enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRoleCapability(
    role: PromiseOrValue<BigNumberish>,
    target: PromiseOrValue<string>,
    functionSig: PromiseOrValue<BytesLike>,
    enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUserRole(
    user: PromiseOrValue<string>,
    role: PromiseOrValue<BigNumberish>,
    enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    canCall(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    doesRoleHaveCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    doesUserHaveRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getRolesWithCapability(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getUserRoles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    isCapabilityPublic(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPublicCapability(
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoleCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address,address)"(
      user?: PromiseOrValue<string> | null,
      newAuthority?: PromiseOrValue<string> | null
    ): AuthorityUpdatedEventFilter;
    AuthorityUpdated(
      user?: PromiseOrValue<string> | null,
      newAuthority?: PromiseOrValue<string> | null
    ): AuthorityUpdatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnerUpdated(address,address)"(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;

    "PublicCapabilityUpdated(address,bytes4,bool)"(
      target?: PromiseOrValue<string> | null,
      functionSig?: PromiseOrValue<BytesLike> | null,
      enabled?: null
    ): PublicCapabilityUpdatedEventFilter;
    PublicCapabilityUpdated(
      target?: PromiseOrValue<string> | null,
      functionSig?: PromiseOrValue<BytesLike> | null,
      enabled?: null
    ): PublicCapabilityUpdatedEventFilter;

    "RoleCapabilityUpdated(uint8,address,bytes4,bool)"(
      role?: PromiseOrValue<BigNumberish> | null,
      target?: PromiseOrValue<string> | null,
      functionSig?: PromiseOrValue<BytesLike> | null,
      enabled?: null
    ): RoleCapabilityUpdatedEventFilter;
    RoleCapabilityUpdated(
      role?: PromiseOrValue<BigNumberish> | null,
      target?: PromiseOrValue<string> | null,
      functionSig?: PromiseOrValue<BytesLike> | null,
      enabled?: null
    ): RoleCapabilityUpdatedEventFilter;

    "UserRoleUpdated(address,uint8,bool)"(
      user?: PromiseOrValue<string> | null,
      role?: PromiseOrValue<BigNumberish> | null,
      enabled?: null
    ): UserRoleUpdatedEventFilter;
    UserRoleUpdated(
      user?: PromiseOrValue<string> | null,
      role?: PromiseOrValue<BigNumberish> | null,
      enabled?: null
    ): UserRoleUpdatedEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    canCall(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doesRoleHaveCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    doesUserHaveRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRolesWithCapability(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRoles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCapabilityPublic(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPublicCapability(
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRoleCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUserRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canCall(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doesRoleHaveCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doesUserHaveRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRolesWithCapability(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserRoles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCapabilityPublic(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPublicCapability(
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRoleCapability(
      role: PromiseOrValue<BigNumberish>,
      target: PromiseOrValue<string>,
      functionSig: PromiseOrValue<BytesLike>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUserRole(
      user: PromiseOrValue<string>,
      role: PromiseOrValue<BigNumberish>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
