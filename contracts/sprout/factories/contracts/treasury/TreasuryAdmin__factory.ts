/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TreasuryAdmin,
  TreasuryAdminInterface,
} from "../../../contracts/treasury/TreasuryAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_coins",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "coin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "newStatus",
        type: "bool",
      },
    ],
    name: "UpdateCoinWhitelist",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "coinWhitelist",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_coin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "updateCoinWhitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000b5938038062000b598339818101604052810190620000379190620003b0565b620000576200004b620000f660201b60201c565b620000fe60201b60201c565b60005b8151811015620000ee5760018060008484815181106200007f576200007e62000401565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080620000e59062000469565b9150506200005a565b5050620004b6565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200022682620001db565b810181811067ffffffffffffffff82111715620002485762000247620001ec565b5b80604052505050565b60006200025d620001c2565b90506200026b82826200021b565b919050565b600067ffffffffffffffff8211156200028e576200028d620001ec565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002d182620002a4565b9050919050565b620002e381620002c4565b8114620002ef57600080fd5b50565b6000815190506200030381620002d8565b92915050565b6000620003206200031a8462000270565b62000251565b905080838252602082019050602084028301858111156200034657620003456200029f565b5b835b818110156200037357806200035e8882620002f2565b84526020840193505060208101905062000348565b5050509392505050565b600082601f830112620003955762000394620001d6565b5b8151620003a784826020860162000309565b91505092915050565b600060208284031215620003c957620003c8620001cc565b5b600082015167ffffffffffffffff811115620003ea57620003e9620001d1565b5b620003f8848285016200037d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600062000476826200045f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203620004ab57620004aa62000430565b5b600182019050919050565b61069380620004c66000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806351b221261461005c578063715018a61461008c5780638da5cb5b14610096578063c9b15406146100b4578063f2fde38b146100e4575b600080fd5b61007660048036038101906100719190610455565b610100565b604051610083919061049d565b60405180910390f35b610094610120565b005b61009e610134565b6040516100ab91906104c7565b60405180910390f35b6100ce60048036038101906100c9919061050e565b61015d565b6040516100db919061049d565b60405180910390f35b6100fe60048036038101906100f99190610455565b610225565b005b60016020528060005260406000206000915054906101000a900460ff1681565b6101286102a8565b6101326000610326565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006101676102a8565b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508115158373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fba873317b5fd7debb8c73758dd6e51098d86d7b71cb6131e17d76b99c65564ca60405160405180910390a46001905092915050565b61022d6102a8565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361029c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610293906105d1565b60405180910390fd5b6102a581610326565b50565b6102b06103ea565b73ffffffffffffffffffffffffffffffffffffffff166102ce610134565b73ffffffffffffffffffffffffffffffffffffffff1614610324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031b9061063d565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610422826103f7565b9050919050565b61043281610417565b811461043d57600080fd5b50565b60008135905061044f81610429565b92915050565b60006020828403121561046b5761046a6103f2565b5b600061047984828501610440565b91505092915050565b60008115159050919050565b61049781610482565b82525050565b60006020820190506104b2600083018461048e565b92915050565b6104c181610417565b82525050565b60006020820190506104dc60008301846104b8565b92915050565b6104eb81610482565b81146104f657600080fd5b50565b600081359050610508816104e2565b92915050565b60008060408385031215610525576105246103f2565b5b600061053385828601610440565b9250506020610544858286016104f9565b9150509250929050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006105bb60268361054e565b91506105c68261055f565b604082019050919050565b600060208201905081810360008301526105ea816105ae565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061062760208361054e565b9150610632826105f1565b602082019050919050565b600060208201905081810360008301526106568161061a565b905091905056fea2646970667358221220c99a29ebe2beb9bef1f6d47032dd53e2708176e1a4e3ed747d88a741d716bfaa64736f6c63430008110033";

type TreasuryAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasuryAdmin__factory extends ContractFactory {
  constructor(...args: TreasuryAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _coins: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TreasuryAdmin> {
    return super.deploy(_coins, overrides || {}) as Promise<TreasuryAdmin>;
  }
  override getDeployTransaction(
    _coins: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_coins, overrides || {});
  }
  override attach(address: string): TreasuryAdmin {
    return super.attach(address) as TreasuryAdmin;
  }
  override connect(signer: Signer): TreasuryAdmin__factory {
    return super.connect(signer) as TreasuryAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryAdminInterface {
    return new utils.Interface(_abi) as TreasuryAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TreasuryAdmin {
    return new Contract(address, _abi, signerOrProvider) as TreasuryAdmin;
  }
}
