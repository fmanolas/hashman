import Head from "next/head";
import Header from "../app/components/Header"; // Adjust the path to your Header component

const Socials = () => {
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
        <title>Socials - Hashman</title>
        <meta
          name="description"
          content="Connect with Hashman on social media."
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
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "gold" }}>
          Connect with HASHMAN
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Follow us on social media to stay updated with the latest news,
          events, and announcements.
        </p>

        {/* Social Media Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://x.com/HashmanOfficial"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
              border: "2px solid gold",
              padding: "1rem 2rem",
              borderRadius: "5px",
              transition: "0.3s ease",
            }}
          >
            X
          </a>

          <a
            href="https://discord.gg/U5S4XV4jcv"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
              border: "2px solid gold",
              padding: "1rem 2rem",
              borderRadius: "5px",
              transition: "0.3s ease",
            }}
          >
            Discord
          </a>

          <a
            href="https://t.me/HashManPortal"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
              border: "2px solid gold",
              padding: "1rem 2rem",
              borderRadius: "5px",
              transition: "0.3s ease",
            }}
          >
            Telegram
          </a>
          <a
            href="https://dexscreener.com/hedera/0x8cc4fef9689994dbb3b577ed14ce81d296607bba"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
              border: "2px solid gold",
              padding: "1rem 2rem",
              borderRadius: "5px",
              transition: "0.3s ease",
            }}
          >
            DEX
          </a>
          <a
            href="https://www.dextools.io/app/en/token/hashman?t=1735039191555"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "gold",
              fontSize: "1.5rem",
              border: "2px solid gold",
              padding: "1rem 2rem",
              borderRadius: "5px",
              transition: "0.3s ease",
            }}
          >
            DEX
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
