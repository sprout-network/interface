/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICyberGrandEvents,
  ICyberGrandEventsInterface,
} from "../../../../contracts/cyberconnect/interfaces/ICyberGrandEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ClaimGrand",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
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
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "Initialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "preSigner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newSigner",
        type: "address",
      },
    ],
    name: "SetSigner",
    type: "event",
  },
] as const;

export class ICyberGrandEvents__factory {
  static readonly abi = _abi;
  static createInterface(): ICyberGrandEventsInterface {
    return new utils.Interface(_abi) as ICyberGrandEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICyberGrandEvents {
    return new Contract(address, _abi, signerOrProvider) as ICyberGrandEvents;
  }
}
