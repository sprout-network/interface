/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISubscribeNFTEvents,
  ISubscribeNFTEventsInterface,
} from "../../../../contracts/cyberconnect/interfaces/ISubscribeNFTEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "Initialize",
    type: "event",
  },
] as const;

export class ISubscribeNFTEvents__factory {
  static readonly abi = _abi;
  static createInterface(): ISubscribeNFTEventsInterface {
    return new utils.Interface(_abi) as ISubscribeNFTEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISubscribeNFTEvents {
    return new Contract(address, _abi, signerOrProvider) as ISubscribeNFTEvents;
  }
}
