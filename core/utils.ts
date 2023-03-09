import { ethers } from "ethers";
import { bsc, bscTestnet, hardhat } from "wagmi/chains";

import { EthLoanReader } from "./EthLoanReader";
import { ILoanReader } from "./ILoanReader";
import { APP_CHAIN, THEME } from "@/constants";
import { platformConfig } from "@/pages/treasury/mint";
import { BondState, Loan, Metadata, NftItemRecord, NftItemTrait, NftState, platformType } from "@/types";
import { IBondReader } from "./IBondReader";
import { EthBondReader } from "./EthBondReader";
import { IPoolReader } from "./IPoolReader";
import { EthPoolReader } from "./EthPoolReader";

export const stateColor = (state: NftState | BondState) => {
  switch (state) {
    case NftState.ACTIVE:
    case BondState.ACTIVATED:
      return "active";
    case NftState.LISTED:
    case BondState.INACTIVATED:
      return "listed";
    case NftState.NOT_LISTED:
    case BondState.EXPIRED:
      return "not-listed";
    default:
      return "not-listed"
  }
};

export const classNames = (...classes: any[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const isNumber = (x: string) => {
  return x !== "" && !isNaN(+x);
};

export function parseAttributes(traits: NftItemTrait[]) {
  return traits.map((trait) => {
    switch (trait.trait_type) {
      case "Followers":
        return `${trait.trait_type} ${trait.value}`;
      case "Tweets":
        return `${trait.trait_type} ${trait.value}`;
      case "Last Update":
        return `Last tweeted at ${trait.value}`;
    }
    return `${trait.trait_type} ${trait.value}`;
  });
}

export function platformTypeHandler(platform: string) {
  switch (platform) {
    case platformType.TWITTER:
      return platformConfig.TWITTER;
    case platformType.TIKTOK:
      return platformConfig.TIKTOK;
    case platformType.YOUTUBE:
      return platformConfig.YOUTUBE;
    case platformType.INSTAGRAM:
      return platformConfig.INSTAGRAM;
    case platformType.TELEGRAM:
      return platformConfig.TELEGRAM;
    case platformType.BINTANGO:
      return platformConfig.BINTANGO;
    case platformType.CYBERCONNECT:
      return platformConfig.CYBERCONNECT;
    case platformType.LENS:
      return platformConfig.LENS;
    default:
      return platformConfig.UNKNOWN;
  }
}

export function timeConverHandler(time: number) {
  const result = time / (60 * 60 * 24 * 30)
  if (result >= 1) {
    return `${result} ${result > 1 ? "Months" : "Month"}`
  } else if (time === 10) {
    return `${time} Seconds`
  } else {
    return `${time / 60} Minutes`
  }
}

export function truncatedText(text: string, truncatedNum: number) {
  if (text.split(" ").length > truncatedNum) {
    return text.split(" ").slice(0, truncatedNum).join(" ") + "...";
  } else {
    return text;
  }
}

export function numberWithCommas(x: number | string) {
  return Number(x).toLocaleString("en");
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export function shortStr(address: string) {
  return address.slice(0, 5) + "..." + address.slice(-5);
}

export function calcInterest(principal: number, repayment: number, duration: number) {
  const _interest = (repayment - principal) / principal / duration * 365 * 100
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(_interest);
}

export function calcRepayment(principal: number, duration: number, interest: number) {
  return interest / 100 / 365 * duration * principal + principal;
}

export function parseAddress(address: string) {
  return address;
};

export function getTokenId(metadata: Metadata): string {
  return metadata.token_id?.toString() ?? "";
}

export function getTokenIdFromRecord(record: NftItemRecord): string {
  return record.token_id.toString() ?? "";
}

export async function getBond(tokenId: string): Promise<Metadata> {
  const bondReader: IBondReader = new EthBondReader();
  const bond = await bondReader.getBond(tokenId);
  const activatedTime = await bondReader.getBondActivatedTime(tokenId);
  bond.activated_time = activatedTime;
  if (activatedTime > 0 && (activatedTime + bond.duration > Date.now())) {
    bond.activated = BondState.ACTIVATED;
  } else if (activatedTime > 0 && activatedTime + bond.duration < Date.now()) {
    bond.activated = BondState.EXPIRED;
  } else {
    bond.activated = BondState.INACTIVATED;
  }
  const poolReader: IPoolReader = new EthPoolReader();  // TODO: implement TonPoolReader
  bond.poolCreated = await poolReader.poolCreated(getTokenId(bond));
  const balance = await poolReader.getBalance(getTokenId(bond));
  bond.balance = ethers.utils.formatEther(balance);
  return bond;
}

export async function getBondRecords(): Promise<NftItemRecord[]> {
  const bondReader: IBondReader = new EthBondReader();
  return bondReader.getBondRecords();
}

export async function getActiveLoanKeys(): Promise<string[]> {
  const loanReader: ILoanReader = new EthLoanReader();
  const loans = await loanReader.getLoans()
  const activeTokenAddresses = Array.from(loans.keys());
  return activeTokenAddresses;
}

export async function getLoan(item: Metadata): Promise<Loan | null> {
  const loanReader = new EthLoanReader();
  return loanReader.getLoanByBond({
    loanId: '',
    tokenId: getTokenId(item),
  });
}

export function getEthChain() {
  if (APP_CHAIN === "bsc")
    return bsc;
  else if (APP_CHAIN === "bsc-testnet")
    return bscTestnet;

  return hardhat;
}

export function safeUserImage(image: string) {
  if (image === "") {
    return "/sprout/sprout_unknown_user.png"
  } else {
    return image
  }
}

export function formatTonOrETH(value: string) {
  return ethers.utils.formatEther(value)
}
