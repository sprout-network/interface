/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProfileNFTDescriptor,
  IProfileNFTDescriptorInterface,
} from "../../../../contracts/cyberconnect/interfaces/IProfileNFTDescriptor";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "template",
        type: "string",
      },
    ],
    name: "setAnimationTemplate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "handle",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "subscribers",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.ConstructTokenURIParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "tokenURI",
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
] as const;

export class IProfileNFTDescriptor__factory {
  static readonly abi = _abi;
  static createInterface(): IProfileNFTDescriptorInterface {
    return new utils.Interface(_abi) as IProfileNFTDescriptorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProfileNFTDescriptor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IProfileNFTDescriptor;
  }
}