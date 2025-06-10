"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import "../../styles/about.css";
import Image from "next/image";
// import github from "../../../public/assets/icons/github.png";

export default function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <div className="about-center-wrapper">
      <Navbar />
      {/* <h1 className="about-heading">
        Justin<span> Noeller</span>
      </h1> */}
      <div className="about-container">
        <div className="about-description">
          <div className="about-intro">
            <p>
              Hi! I&apos;m Justin Noeller, a software developer with a passion
              for building intuitive, user-focused applications.
            </p>
            <p>
              I bring a unique blend of development expertise and
              problem-solving with a background in both technical and
              client-facing roles.
            </p>
            <p>
              I&apos;ve contributed to internal tool development and improved
              customer experiences through WordPress design and FileMaker-based
              apps.
            </p>
          </div>

          <div className="toolkit">
            <p>My technical toolkit includes:</p>

            <p
              onClick={() => toggleSection("languages")}
              className="skill-toggle"
            >
              <b>
                <span>{openSection === "languages" ? "▼" : "▶"}</span> Languages
                & Frameworks
              </b>
            </p>
            {openSection === "languages" && (
              <p className="skill-list">
                JavaScript, Python, HTML, CSS, React, Next.js, Java, NoSQL
              </p>
            )}

            <p onClick={() => toggleSection("tools")} className="skill-toggle">
              <b>
                <span>{openSection === "tools" ? "▼" : "▶"}</span> Tools &
                Platforms
              </b>
            </p>
            {openSection === "tools" && (
              <p className="skill-list">
                Git, FileMaker, WordPress, VS Code, IntelliJ, Linux, Windows
              </p>
            )}
          </div>
          <div className="about-intro">
            <p style={{ marginTop: "30px" }}>
              I&apos;ve built projects ranging from social media backends to
              task management desktop apps—each designed to solve real-world
              problems and build on my own understanding.
            </p>
            <p>
              I also hold a Full-Stack Developer Certification from Denver
              University and am pursuing a BS in Computer Science at Colorado
              Technical University.
            </p>
            <p>Let&apos;s connect!</p>
          </div>
          <div className="about-socials">
            <a
              href="https://www.linkedin.com/in/justin-noeller/"
              target="_blank"
            >
              <Image
                src="/assets/icons/linkedinlogo.png"
                alt="LinkedIn logo"
                width={50}
                height={50}
              />
            </a>
            <a href="https://github.com/noellerjd" target="_blank">
              <Image
                src="/assets/icons/githublogo.png"
                alt="GitHub logo"
                width={50}
                height={50}
              />
            </a>
            {/* <a href="mailto:noellerjd@gmail.com" target="_blank">
              <Image
                src="/assets/icons/emaillogo.png"
                alt="Mail Logo"
                width={50}
                height={50}
              />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
