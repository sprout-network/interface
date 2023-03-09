/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockCoin,
  MockCoinInterface,
} from "../../../contracts/mock/MockCoin";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f4d4f434b434f494e0000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4d4300000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000324565b508060049081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b611497806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063449a52f81161008c578063a0712d6811610066578063a0712d6814610228578063a457c2d714610244578063a9059cbb14610274578063dd62ed3e146102a4576100cf565b8063449a52f8146101be57806370a08231146101da57806395d89b411461020a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d4565b6040516100e99190610cdb565b60405180910390f35b61010c60048036038101906101079190610d96565b610366565b6040516101199190610df1565b60405180910390f35b61012a610389565b6040516101379190610e1b565b60405180910390f35b61015a60048036038101906101559190610e36565b610393565b6040516101679190610df1565b60405180910390f35b6101786103c2565b6040516101859190610ea5565b60405180910390f35b6101a860048036038101906101a39190610d96565b6103cb565b6040516101b59190610df1565b60405180910390f35b6101d860048036038101906101d39190610d96565b610402565b005b6101f460048036038101906101ef9190610ec0565b610410565b6040516102019190610e1b565b60405180910390f35b610212610458565b60405161021f9190610cdb565b60405180910390f35b610242600480360381019061023d9190610eed565b6104ea565b005b61025e60048036038101906102599190610d96565b6104f7565b60405161026b9190610df1565b60405180910390f35b61028e60048036038101906102899190610d96565b61056e565b60405161029b9190610df1565b60405180910390f35b6102be60048036038101906102b99190610f1a565b610591565b6040516102cb9190610e1b565b60405180910390f35b6060600380546102e390610f89565b80601f016020809104026020016040519081016040528092919081815260200182805461030f90610f89565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b5050505050905090565b600080610371610618565b905061037e818585610620565b600191505092915050565b6000600254905090565b60008061039e610618565b90506103ab8582856107e9565b6103b6858585610875565b60019150509392505050565b60006012905090565b6000806103d6610618565b90506103f78185856103e88589610591565b6103f29190610fe9565b610620565b600191505092915050565b61040c8282610aeb565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461046790610f89565b80601f016020809104026020016040519081016040528092919081815260200182805461049390610f89565b80156104e05780601f106104b5576101008083540402835291602001916104e0565b820191906000526020600020905b8154815290600101906020018083116104c357829003601f168201915b5050505050905090565b6104f43382610aeb565b50565b600080610502610618565b905060006105108286610591565b905083811015610555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054c9061108f565b60405180910390fd5b6105628286868403610620565b60019250505092915050565b600080610579610618565b9050610586818585610875565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068690611121565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f5906111b3565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107dc9190610e1b565b60405180910390a3505050565b60006107f58484610591565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461086f5781811015610861576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108589061121f565b60405180910390fd5b61086e8484848403610620565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108db906112b1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094a90611343565b60405180910390fd5b61095e838383610c41565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109db906113d5565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ad29190610e1b565b60405180910390a3610ae5848484610c46565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5190611441565b60405180910390fd5b610b6660008383610c41565b8060026000828254610b789190610fe9565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c299190610e1b565b60405180910390a3610c3d60008383610c46565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c85578082015181840152602081019050610c6a565b60008484015250505050565b6000601f19601f8301169050919050565b6000610cad82610c4b565b610cb78185610c56565b9350610cc7818560208601610c67565b610cd081610c91565b840191505092915050565b60006020820190508181036000830152610cf58184610ca2565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d2d82610d02565b9050919050565b610d3d81610d22565b8114610d4857600080fd5b50565b600081359050610d5a81610d34565b92915050565b6000819050919050565b610d7381610d60565b8114610d7e57600080fd5b50565b600081359050610d9081610d6a565b92915050565b60008060408385031215610dad57610dac610cfd565b5b6000610dbb85828601610d4b565b9250506020610dcc85828601610d81565b9150509250929050565b60008115159050919050565b610deb81610dd6565b82525050565b6000602082019050610e066000830184610de2565b92915050565b610e1581610d60565b82525050565b6000602082019050610e306000830184610e0c565b92915050565b600080600060608486031215610e4f57610e4e610cfd565b5b6000610e5d86828701610d4b565b9350506020610e6e86828701610d4b565b9250506040610e7f86828701610d81565b9150509250925092565b600060ff82169050919050565b610e9f81610e89565b82525050565b6000602082019050610eba6000830184610e96565b92915050565b600060208284031215610ed657610ed5610cfd565b5b6000610ee484828501610d4b565b91505092915050565b600060208284031215610f0357610f02610cfd565b5b6000610f1184828501610d81565b91505092915050565b60008060408385031215610f3157610f30610cfd565b5b6000610f3f85828601610d4b565b9250506020610f5085828601610d4b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610fa157607f821691505b602082108103610fb457610fb3610f5a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ff482610d60565b9150610fff83610d60565b925082820190508082111561101757611016610fba565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611079602583610c56565b91506110848261101d565b604082019050919050565b600060208201905081810360008301526110a88161106c565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061110b602483610c56565b9150611116826110af565b604082019050919050565b6000602082019050818103600083015261113a816110fe565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061119d602283610c56565b91506111a882611141565b604082019050919050565b600060208201905081810360008301526111cc81611190565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611209601d83610c56565b9150611214826111d3565b602082019050919050565b60006020820190508181036000830152611238816111fc565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061129b602583610c56565b91506112a68261123f565b604082019050919050565b600060208201905081810360008301526112ca8161128e565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061132d602383610c56565b9150611338826112d1565b604082019050919050565b6000602082019050818103600083015261135c81611320565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006113bf602683610c56565b91506113ca82611363565b604082019050919050565b600060208201905081810360008301526113ee816113b2565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061142b601f83610c56565b9150611436826113f5565b602082019050919050565b6000602082019050818103600083015261145a8161141e565b905091905056fea2646970667358221220e2f6d6cc01fc6bb94a4b19397203bf47ddbb9e8a283a94133d2dbb668895e4e564736f6c63430008110033";

type MockCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockCoin__factory extends ContractFactory {
  constructor(...args: MockCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockCoin> {
    return super.deploy(overrides || {}) as Promise<MockCoin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockCoin {
    return super.attach(address) as MockCoin;
  }
  override connect(signer: Signer): MockCoin__factory {
    return super.connect(signer) as MockCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCoinInterface {
    return new utils.Interface(_abi) as MockCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCoin {
    return new Contract(address, _abi, signerOrProvider) as MockCoin;
  }
}