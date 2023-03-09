/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICyberEngine,
  ICyberEngineInterface,
} from "../../../../contracts/cyberconnect/interfaces/ICyberEngine";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "preAllowed",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "newAllowed",
        type: "bool",
      },
    ],
    name: "AllowEssenceMw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "preAllowed",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "newAllowed",
        type: "bool",
      },
    ],
    name: "AllowProfileMw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "preAllowed",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "newAllowed",
        type: "bool",
      },
    ],
    name: "AllowSubscribeMw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "namespace",
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
    ],
    name: "CreateNamespace",
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
        name: "rolesAuthority",
        type: "address",
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
        name: "namespace",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "SetProfileMw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowEssenceMw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowProfileMw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "allowSubscribeMw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "profileProxy",
                type: "address",
              },
              {
                internalType: "address",
                name: "profileFactory",
                type: "address",
              },
              {
                internalType: "address",
                name: "subscribeFactory",
                type: "address",
              },
              {
                internalType: "address",
                name: "essenceFactory",
                type: "address",
              },
            ],
            internalType: "struct DataTypes.ComputedAddresses",
            name: "addrs",
            type: "tuple",
          },
        ],
        internalType: "struct DataTypes.CreateNamespaceParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createNamespace",
    outputs: [
      {
        internalType: "address",
        name: "profileProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "subBeacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "essBeacon",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "namespace",
        type: "address",
      },
    ],
    name: "getNameByNamespace",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "namespace",
        type: "address",
      },
    ],
    name: "getProfileMwByNamespace",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract RolesAuthority",
        name: "_rolesAuthority",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mw",
        type: "address",
      },
    ],
    name: "isEssenceMwAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mw",
        type: "address",
      },
    ],
    name: "isProfileMwAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mw",
        type: "address",
      },
    ],
    name: "isSubscribeMwAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "namespace",
        type: "address",
      },
      {
        internalType: "address",
        name: "mw",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "setProfileMw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "namespace",
        type: "address",
      },
    ],
    name: "upgradeEssenceNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "namespace",
        type: "address",
      },
    ],
    name: "upgradeProfileNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "namespace",
        type: "address",
      },
    ],
    name: "upgradeSubscribeNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICyberEngine__factory {
  static readonly abi = _abi;
  static createInterface(): ICyberEngineInterface {
    return new utils.Interface(_abi) as ICyberEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICyberEngine {
    return new Contract(address, _abi, signerOrProvider) as ICyberEngine;
  }
}
