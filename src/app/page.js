"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";
import "../styles/home.css";
import Picture from "../../public/assets/images/pfp.png";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("noellerjd@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1000);
    } catch (err) {
      console.error("Falied to copy email: ", err);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="main-container">
        <div className="dev-box">
          <div className="dev-image">
            <Image id="profile-picture" src={Picture} alt="profile picture" />
          </div>
          <div className="dev-info">
            <div className="title-container">
              <h1 className="title-intro">Hello, I&apos;m</h1>
              <span className="title-name">Justin Noeller</span>
              <h2 className="subtitle">Software Developer</h2>
            </div>
            <div className="dev-description">
              <p>
                I&apos;m a college student studying at Colorado Technical
                University with experience in full stack development and
                software development. I have a passion for continuous learning
                and love the creative process of building applications.
              </p>
            </div>
            <div className="link-container">
              <ul className="dev-links">
                <li>
                  <Link
                    target="_blank"
                    href="https://github.com/noellerjd"
                    className="social-link"
                  >
                    <FaGithub className="social-icon" />
                    <span>Github</span>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/justin-noeller/"
                    className="social-link"
                  >
                    <FaLinkedin className="social-icon" />
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <button onClick={handleEmailClick} className="social-link">
                    <FaEnvelope className="social-icon" />
                    <span>{emailCopied ? "Copied" : "Email"}</span>
                  </button>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="/assets/images/resume.pdf"
                    className="social-link"
                  >
                    <FaDownload className="social-icon" />
                    <span>Resume</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
