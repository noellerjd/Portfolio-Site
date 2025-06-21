"use client";

import Link from "next/link";
import "../../styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <div className="header-container">
      <div className="header">
        <Link href="/" className="logo">
          <div>
            <span className="arrow">{"▶"}</span>
            <span>Code</span>
            <span className="logo-white">Noeller</span>
          </div>
        </Link>
        <div className="header-links">
          <Link href="/projects" className="projects">
            <span>
              <span>
                <span className="arrow">{`▶`}</span>Project
              </span>
            </span>
            Showcase
          </Link>
        </div>
        <div className="mobile">
          <button
            onClick={() => setNavOpened(!navOpened)}
            className="mobile-toggle"
          >
            ☰
          </button>
        </div>
      </div>
      {navOpened && (
        <div className="mobile-links">
          <Link href="/" className="mobile-item">
            <span>
              <span>
                <span className="arrow">{`▶`}</span>Home
              </span>
            </span>
          </Link>
          <div className="divider"></div>
          <Link href="/projects" className="mobile-item projects">
            <span>
              <span>
                <span className="arrow">{`▶`}</span>Project
              </span>
            </span>
            Showcase
          </Link>
        </div>
      )}
    </div>
  );
}
