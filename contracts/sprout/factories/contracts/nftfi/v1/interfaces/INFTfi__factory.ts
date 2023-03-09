/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INFTfi,
  INFTfiInterface,
} from "../../../../../contracts/nftfi/v1/interfaces/INFTfi";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "AdminFeeUpdated",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanPrincipalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftCollateralId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanMaturityDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanLiquidationDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftCollateralContract",
        type: "address",
      },
    ],
    name: "LoanLiquidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanPrincipalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftCollateralId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountPaidToLender",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "adminFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftCollateralContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "loanERC20Denomination",
        type: "address",
      },
    ],
    name: "LoanRepaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanPrincipalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maximumRepaymentAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftCollateralId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanStartTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loanInterestRateForDurationInBasisPoints",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftCollateralContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "loanERC20Denomination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "interestIsProRated",
        type: "bool",
      },
    ],
    name: "LoanStarted",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_loanPrincipalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maximumRepaymentAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nftCollateralId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_loanDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_loanInterestRateForDurationInBasisPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_adminFeeInBasisPoints",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "_borrowerAndLenderNonces",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "_nftCollateralContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_loanERC20Denomination",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_borrowerSignature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_lenderSignature",
        type: "bytes",
      },
    ],
    name: "beginLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "cancelLoanCommitmentBeforeLoanHasBegun",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "erc20CurrencyIsWhitelisted",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainID",
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
        internalType: "uint256",
        name: "_loanId",
        type: "uint256",
      },
    ],
    name: "getPayoffAmount",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "getWhetherNonceHasBeenUsedForUser",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "isOwner",
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
        internalType: "uint256",
        name: "_nftCollateralId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_borrowerNonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_nftCollateralContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_borrowerSignature",
        type: "bytes",
      },
    ],
    name: "isValidBorrowerSignature",
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
        internalType: "uint256",
        name: "_loanPrincipalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maximumRepaymentAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nftCollateralId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_loanDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_loanInterestRateForDurationInBasisPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_adminFeeInBasisPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lenderNonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_nftCollateralContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_loanERC20Denomination",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_interestIsProRated",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_lenderSignature",
        type: "bytes",
      },
    ],
    name: "isValidLenderSignature",
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
        internalType: "uint256",
        name: "_loanId",
        type: "uint256",
      },
    ],
    name: "liquidateOverdueLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_loanId",
        type: "uint256",
      },
    ],
    name: "loanIdToLoan",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "loanId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "loanPrincipalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maximumRepaymentAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nftCollateralId",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "loanStartTime",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "loanDuration",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "loanInterestRateForDurationInBasisPoints",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "loanAdminFeeInBasisPoints",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "nftCollateralContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "loanERC20Denomination",
            type: "address",
          },
          {
            internalType: "address",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "bool",
            name: "interestIsProRated",
            type: "bool",
          },
        ],
        internalType: "struct INFTfi.Loan",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_loanId",
        type: "uint256",
      },
    ],
    name: "loanRepaidOrLiquidated",
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
    inputs: [
      {
        internalType: "address",
        name: "nft",
        type: "address",
      },
    ],
    name: "nftContractIsWhitelisted",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_loanId",
        type: "uint256",
      },
    ],
    name: "payBackLoan",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newAdminFeeInBasisPoints",
        type: "uint256",
      },
    ],
    name: "updateAdminFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaximumLoanDuration",
        type: "uint256",
      },
    ],
    name: "updateMaximumLoanDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMaximumNumberOfActiveLoans",
        type: "uint256",
      },
    ],
    name: "updateMaximumNumberOfActiveLoans",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20Currency",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_setAsWhitelisted",
        type: "bool",
      },
    ],
    name: "whitelistERC20Currency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_setAsWhitelisted",
        type: "bool",
      },
    ],
    name: "whitelistNFTContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class INFTfi__factory {
  static readonly abi = _abi;
  static createInterface(): INFTfiInterface {
    return new utils.Interface(_abi) as INFTfiInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): INFTfi {
    return new Contract(address, _abi, signerOrProvider) as INFTfi;
  }
}
