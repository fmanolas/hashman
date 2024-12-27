import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-evenly", // Space links evenly across the bar
        alignItems: "center",
        padding: "1rem 2rem",
        position: "fixed", // Makes the header stick to the top
        top: 0,
        width: "100%",
        zIndex: 1000, // Ensure it stays above other elements
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)", // Add subtle shadow for style
      }}
    >
      <Link href="/" legacyBehavior>
        <a
          style={{
            textDecoration: "none",
            fontFamily: "'Batman Forever', Arial, sans-serif", // Added fallback fonts
            fontSize: "1.5rem",
            color: "gold", // Gold text color
            transition: "color 0.3s", // Smooth hover effect
          }}
        >
          Home
        </a>
      </Link>

      <Link href="/whitepaper" legacyBehavior>
        <a
          style={{
            textDecoration: "none",
            fontFamily: "'Batman Forever', Arial, sans-serif", // Added fallback fonts
            fontSize: "1.5rem",
            color: "gold",
            transition: "color 0.3s",
          }}
        >
          Whitepaper
        </a>
      </Link>

      <Link href="/socials" legacyBehavior>
        <a
          style={{
            textDecoration: "none",
            fontFamily: "'Batman Forever', Arial, sans-serif", // Added fallback fonts
            fontSize: "1.5rem",
            color: "gold",
            transition: "color 0.3s",
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
            fontSize: "1.5rem",
            color: "gold", // Gold text color
          }}
        >
          How to Buy
        </a>
      </Link>
    </header>
  );
};

export default Header;
