import Head from "next/head";
import Header from "../app/components/Header"; // Adjust the path to your Header component

const HowToBuy = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "black", // Black and gold gradient
        minHeight: "100vh", // Ensures full viewport height
        display: "flex", // Flexbox for content alignment
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Head>
        <title>How to Buy - Hashman</title>
        <meta
          name="description"
          content="Step-by-step guide to buy $HBAR and Hashman tokens."
        />
        <style>
          {`
            html, body {
              margin: 0;
              padding: 0;
              height: 100%; /* Stretch html and body */
            }
            #__next {
              height: 100%; /* Stretch Next.js container */
            }
          `}
        </style>
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div
        style={{
          marginTop: "6rem", // To avoid overlapping with the header
          textAlign: "center",
          padding: "2rem",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "gold" }}>
          How to Buy
        </h1>

        <div
          style={{
            textAlign: "left",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          {/* Step 1: Download HashPack */}
          <h2
            style={{ color: "gold", fontSize: "1.8rem", marginBottom: "1rem" }}
          >
            Step 1: Download HashPack
          </h2>
          <p>
            HashPack is a secure and user-friendly wallet for managing $HBAR and
            Hashman tokens. Follow these steps to download it:
          </p>
          <ul>
            <li>
              Visit the{" "}
              <a
                href="https://www.hashpack.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "gold" }}
              >
                official HashPack website
              </a>
              .
            </li>
            <li>
              Choose the appropriate version for your device (Mobile or Browser
              Extension).
            </li>
            <li>
              Install the app and create your Hedera wallet by following the
              on-screen instructions.
            </li>
          </ul>

          {/* Step 2: Swap Tokens on HashPack */}
          <h2
            style={{
              color: "gold",
              fontSize: "1.8rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Step 2: Swap Tokens on HashPack
          </h2>
          <p>
            Once you’ve set up your wallet, you can swap tokens directly on
            HashPack. Here’s how:
          </p>
          <ul>
            <li>Open the HashPack app and connect your wallet.</li>
            <li>Navigate to the &quot;Swap&quot; section.</li>
            <li>
              Select $HBAR as the token to swap and search for Hashman tokens
              using the token ID below.
            </li>
            <li>Enter the amount and confirm the transaction.</li>
          </ul>

          {/* Step 3: Where to Buy $HBAR */}
          <h2
            style={{
              color: "gold",
              fontSize: "1.8rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Step 3: Buy $HBAR
          </h2>
          <p>
            You can buy $HBAR, the native cryptocurrency for Hedera, from these
            exchanges:
          </p>
          <ul>
            <li>
              <a
                href="https://www.binance.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "gold" }}
              >
                Binance
              </a>
            </li>
            <li>
              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "gold" }}
              >
                Coinbase
              </a>
            </li>
            <li>
              <a
                href="https://www.kucoin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "gold" }}
              >
                KuCoin
              </a>
            </li>
          </ul>
          <p>
            Once you’ve purchased $HBAR, transfer it to your HashPack wallet to
            swap for Hashman tokens.
          </p>

          {/* Hashman's Token ID */}
          <h2
            style={{
              color: "gold",
              fontSize: "1.8rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Hashman&apos;s Token ID
          </h2>
          <p>
            Use the following token ID to find and purchase Hashman tokens in
            your wallet:
          </p>
          <div
            style={{
              backgroundColor: "rgba(255, 215, 0, 0.1)",
              border: "1px solid gold",
              padding: "1rem",
              borderRadius: "5px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            0.0.7947081
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
