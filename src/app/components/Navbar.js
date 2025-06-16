"use client";

import Link from "next/link";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="header">
      <Link href="/" className="logo">
        <div>
          <span className="arrow">{"▶"}</span>
          <span>Code</span>
          <span className="logo-white">Noeller</span>
        </div>
      </Link>
      <div className="header-links">
        {/* <Link href="/about" className="about">
          <span>
            <span>
              <span className="arrow">{`▶`}</span>About
            </span>
          </span>
          Me
        </Link> */}
        <Link href="/projects" className="projects">
          <span>
            <span>
              <span className="arrow">{`▶`}</span>Project
            </span>
          </span>
          Showcase
        </Link>
      </div>
    </div>
  );
}
