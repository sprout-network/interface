import { BigNumber, ethers } from "ethers";
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNetwork, useSigner } from "wagmi";

import { LENDING_PROTOCOL_ADDRESS, THEME, TREASURY_ADDRESS } from "@/constants";
import { DummyBondManager } from "@/core/DummyBondManager";
import { DummyLoanManager } from "@/core/DummyLoanManager";
import { DummyLoanReader } from "@/core/DummyLoanReader";
import { EthBondManager } from "@/core/EthBondManager";
import { EthLoanManager } from "@/core/EthLoanManager";
import { EthLoanReader } from "@/core/EthLoanReader";
import { IBondManager } from "@/core/IBondManager";
import { ILoanManager } from "@/core/ILoanManager";
import { ILoanReader } from "@/core/ILoanReader";
import { EthTokenReader } from "@/core/EthTokenReader";
import { EthTokenManager } from "@/core/EthTokenManager";
import { DummyTokenManager } from "@/core/DummyTokenManager";
import { ITokenManager } from "@/core/ITokenManager";
import { DummyPoolManager } from "@/core/DummyPoolManager";
import { IPoolManager } from "@/core/IPoolManager";
import { EthPoolManager } from "@/core/EthPoolManager";

const DUMMY_BOND_MANAGER = new DummyBondManager();
const DUMMY_LOAN_READER = new DummyLoanReader();
const DUMMY_LOAN_MANAGER = new DummyLoanManager();
const DUMMY_TOKEN_MANAGER = new DummyTokenManager();
const DUMMY_POOL_MANAGER = new DummyPoolManager();

type Web3ContextProps = {
  chain: string | undefined;
  address: string;
  prettyAddress: string;
  connected: boolean;
  bondManager: IBondManager;
  loanReader: ILoanReader;
  loanManager: ILoanManager;
  tokenManager: ITokenManager;
  poolManager: IPoolManager;
  send(reipient: string, amount: string): Promise<any>;
  update(): void;
  checkAllowanceLending(amount: string): boolean;
  checkAllowanceTreasury(amount: string): boolean;
  checkBalance(amount: string): boolean;
};

export const Web3Context = createContext<Web3ContextProps>({
  chain: undefined,
  address: "",
  prettyAddress: "",
  connected: false,
  bondManager: DUMMY_BOND_MANAGER,
  loanReader: DUMMY_LOAN_READER,
  loanManager: DUMMY_LOAN_MANAGER,
  tokenManager: DUMMY_TOKEN_MANAGER,
  poolManager: DUMMY_POOL_MANAGER,
  send: async (reipient: string, amount: string) => { },
  checkAllowanceLending: (amount: string) => false,
  checkAllowanceTreasury: (amount: string) => false,
  checkBalance: (amount: string) => false,
  update: () => { },
});

type Web3ProviderProps = {
  children: ReactNode[] | ReactNode | string;
};

const EthProvider: FC<Web3ProviderProps> = ({ children }) => {
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  const [address, setAddress] = useState<string>("");
  const [connected, setConnected] = useState<boolean>(false);
  const [allowanceLending, setAllowanceLending] = useState<string>("0");  // WBNB allowance of Lending Protocol
  const [allowanceTreasury, setAllowanceTreasury] = useState<string>("0");  // WBNB allowance of Treasury
  const [balance, setBalance] = useState<string>("0");  // WBNB balance
  const [counter, setCounter] = useState<number>(0);
  const [bondManager, setBondManager] =
    useState<IBondManager>(DUMMY_BOND_MANAGER);
  const [loanReader] = useState<ILoanReader>(new EthLoanReader());
  const [loanManager, setLoanManager] =
    useState<ILoanManager>(DUMMY_LOAN_MANAGER);
  const [tokenReader] = useState<EthTokenReader>(new EthTokenReader());
  const [tokenManager, setTokenManager] = useState<ITokenManager>(DUMMY_TOKEN_MANAGER);
  const [poolManager, setPoolManager] = useState<IPoolManager>(DUMMY_POOL_MANAGER);

  const send = useCallback(
    async (recipient: string, amount: string) => {
      if (signer) {
        const tx = await signer?.sendTransaction({
          to: recipient,
          value: ethers.utils.parseEther(amount),
        });
        await tx.wait();
        return tx;
      }
    },
    [signer]
  );

  const checkAllowanceLending = useCallback(
    (amount: string) => {
      try {
        return BigNumber.from(allowanceLending) >= BigNumber.from(amount)
      } catch (e) {
        console.error(e);
      }
      return false;
    },
    [allowanceLending],
  );

  const checkAllowanceTreasury = useCallback(
    (amount: string) => {
      try {
        return BigNumber.from(allowanceTreasury) >= BigNumber.from(amount)
      } catch (e) {
        console.error(e);
      }
      return false;
    },
    [allowanceTreasury],
  );

  const checkBalance = useCallback(
    (amount: string) => {
      try {
        return BigNumber.from(balance).gte(amount)
      } catch (e) {
        console.error(e);
      }
      return false;
    },
    [balance],
  )

  const update = () => setCounter(prev => prev + 1);

  useEffect(() => {
    (async () => {
      if (chain && signer) {
        // Update whenever counter is changed
        const _address = await signer.getAddress();
        const _allowanceLending = await tokenReader.allowanceWBNB(_address, LENDING_PROTOCOL_ADDRESS);
        setAllowanceLending(_allowanceLending.toString());
        const _allowanceTreasury = await tokenReader.allowanceWBNB(_address, TREASURY_ADDRESS);
        setAllowanceTreasury(_allowanceTreasury.toString());
        const _balance = await tokenReader.balanceWBNB(_address);
        setBalance(_balance.toString());
        // Update at the beginning
        if (counter === 0) {
          setBondManager(new EthBondManager(signer));
          setLoanManager(new EthLoanManager(signer));
          setTokenManager(new EthTokenManager(signer));
          setPoolManager(new EthPoolManager(signer));
          setAddress((await signer.getAddress()) || "");
          setConnected(true);
        }
      } else {
        setConnected(false);
      }
    })();
  }, [chain, signer, counter]);

  return (
    <Web3Context.Provider
      value={{
        chain: chain?.network,
        address,
        prettyAddress: address,
        connected,
        bondManager,
        loanReader,
        loanManager,
        tokenManager,
        poolManager,
        send,
        update,
        checkAllowanceLending,
        checkAllowanceTreasury,
        checkBalance,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const Web3Provider: FC<Web3ProviderProps> = EthProvider;
