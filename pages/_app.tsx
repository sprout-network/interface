import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { WagmiConfig } from "wagmi";
import firebaseHelper from "../firebaseHelper";
import "@/styles/globals.css";
import wagmiClient, { chains } from "@/core/wagmi";
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  }
});
import { Web3Provider } from "@/components/Web3Context";
import { WALLET_CONNECT_PROJECT_ID } from "@/constants";

firebaseHelper.initFirebase();

const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          <Web3Provider>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </Web3Provider>
        </WagmiConfig>
      ) : null}

      <Web3Modal
        projectId={WALLET_CONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  );
}
