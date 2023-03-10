import { BigNumber, ethers } from "ethers";
import firebase from "firebase";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LENDING_PROTOCOL_ADDRESS, NFT_BASE_URI, THEME } from "@/constants";
import { EthTokenReader } from "@/core/EthTokenReader";
import { generateMetadata } from "@/core/metadata";
import { isNumber, getEthChain, numberWithCommas } from "@/core/utils";
import { provider } from "@/core/wagmi";
import { useWeb3 } from "@/hooks/useWeb3";
import { Loan, Metadata, stateName } from "@/types";

type DebugConsoleProps = {
  item: Metadata | null;
  loan: Loan | null;
  customDate: Date | null;
  setCustomDate: Dispatch<SetStateAction<Date>>;
};

const DebugConsole: FC<DebugConsoleProps> = ({ item, loan, customDate, setCustomDate }) => {
  const { connected, address, prettyAddress, bondManager, tokenManager, send } = useWeb3();
  const [recipient, setRecipient] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [username, setUsername] = useState<string>("durov");
  const [platform, setPlatform] = useState<string>("BintanGO");
  const [metadata, setMetadata] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");
  const [bnbBalance, setBnbBalance] = useState<string>("0");
  const [wbnbBalance, setWbnbBalance] = useState<string>("0");
  const [depositBnbAmt, setDepositBnbAmt] = useState<string>("0");
  const [withdrawWbnbAmt, setWithdrawWbnbAmt] = useState<string>("0");

  const getBnbBalance = async (address: string) => {
    const chain = getEthChain();
    const providerInstance = provider({ chainId: chain.id })
    const balance = await providerInstance.getBalance(address);
    return balance;
  }

  useEffect(() => {
    (async () => {
      if (connected && address && THEME === 'sprout') {
        const bnb = await getBnbBalance(address);
        const tokenReader = new EthTokenReader();
        const wbnb = await tokenReader.balanceWBNB(address);
        setBnbBalance(bnb.toString());
        setWbnbBalance(wbnb.toString());
      }
    })()
  }, [connected, address])

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold">Debug Console</h2>
      <div className="mt-6">
        {item?.token_address && (
          <div className="mt-6">
            <label
              htmlFor="recepient"
              className="block mb-2 text-lg font-medium"
            >Transfer it to</label>
            <div className="flex items-center gap-2">
              <input
                id="recepient"
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder={address}
                className="max-w-[600px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
              />
              <button
                className="p-2.5 bg-gray-700 rounded-lg hover:bg-gray-600"
                onClick={async () => {
                  if (!connected) {
                    alert("Not connected.");
                  } else if (item.token_id === undefined) {
                    alert("No token ID.");
                  } else if (!recipient) {
                    alert("No recepient.");
                  } else if (!item.token_address) {
                    alert("No token address.");
                  } else {
                    bondManager.transfer(item.token_address, recipient);
                  }
                }}
              >Send</button>
            </div>
          </div>
        )}

        <div className="mt-6">
          <h3 className="block mb-2 text-lg font-medium">Database</h3>
          <div className="flex gap-2">
            <button className="p-2.5 bg-gray-700 rounded-lg hover:bg-gray-600" onClick={async () => {
              await firebase.database().ref(`/records`).remove();
              alert("Cleaned the cache `/records` in the database.")
            }}>Clean NFT Metadata Cache</button>
            <button className="p-2.5 bg-gray-700 rounded-lg hover:bg-gray-600" onClick={async () => {
              await firebase.database().ref(`/terms`).remove();
              await firebase.database().ref(`/offers`).remove();
              await firebase.database().ref(`/loans`).remove();
              alert("Cleaned `/terms`, `/offers` and `/loans` in the database.")
            }}>Clean Terms, Offers and Loans</button>
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="recipient"
            className="block mb-2 text-lg font-medium"
          >Send  to</label>
          <div className="flex items-center gap-2">
            <input
              id="recipient"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder={address}
              className="max-w-[600px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
            />
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="10"
              className="max-w-[60px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
            />
            <button
              className="p-2.5 bg-gray-700 rounded-lg hover:bg-gray-600"
              onClick={async () => {
                if (!connected) {
                  alert("Not connected.");
                } else if (amount === undefined || !isNumber(amount)) {
                  alert("No valid amount.");
                } else if (!recipient) {
                  alert("No recepient.");
                } else {
                  const result = await send(recipient, amount);
                  console.log(result);
                }
              }}
            >Send</button>
          </div>
        </div>

        {customDate !== null && (
          <div className="mt-6">
            <label className="block mb-2 text-lg font-medium">Customized Date</label>
            <DatePicker className="p-2.5 rounded-lg text-sm border border-neutral-400 hover:bg-neutral-600 cursor-pointer" selected={customDate} onChange={(date) => {
              if (date !== null) {
                setCustomDate(date);
              }
            }} />
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="block mb-2 text-lg font-medium">Generate Metadata</h3>
        <div className="mb-2 flex items-center gap-2">
          <p>Default User</p>
          <button
            className="px-2.5 py-0.5 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
            onClick={async () => {
              setUsername("durov");
              setPlatform("BintanGO");
              setUserAddress("");
            }}
          >A</button>
          <button
            className="px-2.5 py-0.5 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
            onClick={async () => {
              setUsername("zeldalaw007");
              setPlatform("Lens");
              setUserAddress("0xA6583617baB73f18d1Db30a5Aa4EBe4dA4af581B");
            }}
          >B</button>
          <button
            className="px-2.5 py-0.5 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
            onClick={async () => {
              setUsername("ryanli_me");
              setPlatform("CyberConnect");
              setUserAddress("0x7C04786F04c522ca664Bb8b6804E0d182eec505F");
            }}
          >C</button>
          <button
            className="px-2.5 py-0.5 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
            onClick={async () => {
              setUsername("shiyuSQ");
              setPlatform("CyberConnect");
              setUserAddress("0x5fd9b0B7e15B4d106624ea9CF96602996c9c344D");
            }}
          >D</button>
        </div>
        <div className="mb-2 flex items-end gap-2">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 font-medium text-xs"
            >Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={"durov"}
              className="max-w-[600px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="platform"
              className="block mb-2 font-medium text-xs"
            >Platform</label>
            <input
              id="platform"
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder={"BintanGO"}
              className="max-w-[600px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 font-medium text-xs"
            >Address</label>
            <input
              id="address"
              type="text"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              placeholder={"0x"}
              className="max-w-[600px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
            />
          </div>
          <button
            className="p-2.5 bg-gray-700 rounded-lg hover:bg-gray-600"
            onClick={async () => {
              if (!username) {
                alert("No username.");
              } else if (!platform) {
                alert("No platform.");
              } else {
                const metadata = await generateMetadata(username, platform, userAddress, "", "", 0, 0);
                setMetadata(JSON.stringify(metadata, null, 2));
              }
            }}
          >Generate</button>
        </div>
        <div>
          <code className="text-xs whitespace-pre">{metadata}</code>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="block mb-2 text-lg font-medium">WBNB Operation</h3>
        <div className="flex-row gap-2">
          <div>
            <h4 className="mb-1 font-medium">BNB to WBNB (Balance: {numberWithCommas(ethers.utils.formatEther(bnbBalance))} BNB)</h4>

            <div className="mb-2 flex items-end gap-2">
              <div>
                <input
                  id="username"
                  type="text"
                  value={depositBnbAmt}
                  onChange={(e) => setDepositBnbAmt(e.target.value)}
                  placeholder={"0"}
                  className="max-w-[600px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
                />
              </div>

              <button
                className="p-2.5 bg-gray-700 rounded-lg hover:bg-gray-600"
                onClick={async () => {
                  try {
                    const amount = BigNumber.from(ethers.utils.parseEther(depositBnbAmt));
                    if (amount.lte(BigNumber.from(0)) || amount.gt(bnbBalance)) {
                      throw new Error("Invalid deposit amount.");
                    }

                    await tokenManager.wrapToken(amount.toString());
                    location.reload();
                  } catch (err) {
                    console.error(err);
                    alert(err)
                  }
                }}
              >Deposit</button>
            </div>
          </div>

          <div>
            <h4 className="mb-1 font-medium">WBNB to BNB (Balance: {numberWithCommas(ethers.utils.formatEther(wbnbBalance))} WBNB)</h4>

            <div className="mb-2 flex items-end gap-2">
              <div>
                <input
                  id="username"
                  type="text"
                  value={withdrawWbnbAmt}
                  onChange={(e) => setWithdrawWbnbAmt(e.target.value)}
                  placeholder={"0"}
                  className="max-w-[600px] bg-neutral-700 border border-neutral-400 text-info-white text-sm rounded-lg focus:ring-blue-500 focus:border-accent block w-full p-2.5"
                />
              </div>

              <button
                className="p-2.5 bg-gray-700 rounded-lg hover:bg-gray-600"
                onClick={async () => {
                  try {
                    const amount = BigNumber.from(ethers.utils.parseEther(withdrawWbnbAmt));
                    if (amount.lte(BigNumber.from(0)) || amount.gt(wbnbBalance)) {
                      throw new Error("Invalid deposit amount.");
                    }

                    await tokenManager.withdrawToken(amount.toString());
                    location.reload();
                  } catch (err) {
                    console.error(err);
                    alert(err)
                  }
                }}
              >Withdraw</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugConsole;