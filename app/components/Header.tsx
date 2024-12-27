import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between", // Add space between links
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        flexWrap: "wrap", // Allow wrapping for small screens
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem", // Space between links
          flexWrap: "wrap", // Make links wrap on smaller screens
        }}
      >
        <Link href="/" legacyBehavior>
          <a
            style={{
              textDecoration: "none",
              fontFamily: "Batman Forever, sans-serif",
              fontSize: "1rem",
              color: "gold",
            }}
          >
            Home
          </a>
        </Link>
        <Link href="/whitepaper" legacyBehavior>
          <a
            style={{
              textDecoration: "none",
              fontFamily: "Batman Forever, sans-serif",
              fontSize: "1rem",
              color: "gold",
            }}
          >
            Whitepaper
          </a>
        </Link>
        <Link href="/socials" legacyBehavior>
          <a
            style={{
              textDecoration: "none",
              fontFamily: "Batman Forever, sans-serif",
              fontSize: "1rem",
              color: "gold",
            }}
          >
            Socials
          </a>
        </Link>
        <Link href="/how-to-buy" legacyBehavior>
          <a
            style={{
              textDecoration: "none",
              fontFamily: "Batman Forever, sans-serif",
              fontSize: "1rem",
              color: "gold",
            }}
          >
            How to Buy
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
