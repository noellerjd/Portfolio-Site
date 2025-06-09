import Link from "next/link";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="header">
      <Link
        href="/"
        className="logo"
        // onMouseEnter={() => console.log("Logo hovered")}
      >
        <div>
          <span className="logo-arrow">{`>`}</span>Code
          <span className="logo-white">Noeller</span>
        </div>
      </Link>
      <div className="header-links">
        <Link href="/about">About Me</Link>
      </div>
    </div>
  );
}
