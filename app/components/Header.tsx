import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center", // Center the nav content
        alignItems: "center",
        padding: "1rem",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping for small screens
          justifyContent: "center", // Center links
          gap: "1rem", // Space between links
          padding: "0.5rem",
        }}
      >
        <Link href="/" legacyBehavior>
          <a
            style={{
              textDecoration: "none",
              fontFamily: "Batman Forever, sans-serif",
              fontSize: "1.5rem", // Adjust font size for mobile
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
              fontSize: "1.5rem", // Adjust font size for mobile
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
              fontSize: "1.5rem", // Adjust font size for mobile
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
              fontSize: "1.5rem", // Adjust font size for mobile
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
