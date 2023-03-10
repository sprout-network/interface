/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMB,
  IMBInterface,
} from "../../../../contracts/cyberconnect/interfaces/IMB";

const _abi = [
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
        name: "boxAddr",
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
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "boxId",
        type: "uint256",
      },
    ],
    name: "OpenBox",
    type: "event",
  },
  {
    inputs: [],
    name: "getBoxAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMB__factory {
  static readonly abi = _abi;
  static createInterface(): IMBInterface {
    return new utils.Interface(_abi) as IMBInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMB {
    return new Contract(address, _abi, signerOrProvider) as IMB;
  }
}
