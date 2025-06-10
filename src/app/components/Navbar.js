"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/navbar.css";

export default function Navbar() {
  // const [logoHovered, setLogoHovered] = useState(false);
  // const [aboutHovered, setAboutHovered] = useState(false);

  return (
    <div className="header">
      <Link
        href="/"
        className="logo"
        // onMouseEnter={() => setLogoHovered(true)}
        // onMouseLeave={() => setLogoHovered(false)}
      >
        <div>
          {/* <span className="logo-arrow">{logoHovered ? "▼" : ">"}</span> */}
          <span className="arrow">{"▶"}</span>
          <span>Code</span>
          <span className="logo-white">Noeller</span>
        </div>
      </Link>
      <div className="header-links">
        <Link
          href="/about"
          className="about"
          // onMouseEnter={() => setAboutHovered(true)}
          // onMouseLeave={() => setAboutHovered(false)}
        >
          <span>
            <span className="arrow">{`▶`}</span>About
          </span>{" "}
          Me
        </Link>
      </div>
    </div>
  );
}
