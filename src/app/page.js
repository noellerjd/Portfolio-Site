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
      <div className="home-page">
        <section id="main-container">
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
              <div>
                <p className="dev-description">
                  I&apos;m a college student studying at Colorado Technical
                  University with experience in full-stack development and
                  software development. I have a passion for continuous learning
                  and I love the problem solving and creative process of
                  building applications.
                </p>
              </div>
              <div className="link-container">
                <div className="dev-links">
                  <div>
                    <Link
                      target="_blank"
                      href="https://github.com/noellerjd"
                      className="social-link"
                    >
                      <span>Github</span>
                      <FaGithub className="social-icon" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/justin-noeller/"
                      className="social-link"
                    >
                      <span>LinkedIn</span>
                      <FaLinkedin className="social-icon" />
                    </Link>
                  </div>
                  <div>
                    <button onClick={handleEmailClick} className="social-link">
                      <span>{emailCopied ? "Copied" : "Email"}</span>
                      <FaEnvelope className="social-icon" />
                    </button>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="/assets/resume.pdf"
                      className="social-link"
                    >
                      <span>Resume</span>
                      <FaDownload className="social-icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="subject-container">
          <div className="subject-box">
            <h1 className="subject-title">About Me</h1>
            <hr />
            <p>
              My journey as a Software Engineer began way back when I was in 4th
              grade I and picked up my mom&apos;s C++ for Dummies book. From
              there I began to love the problem solving and design aspect of
              Computer Science even though all I was making was simple text
              adventures for my friends to play. Since then, I have earned my
              certification through a Full-Stack Development bootcamp through
              Denver University and I am working towards my BS in Computer
              Science through Colorado Technical University.
            </p>
            <p>
              Currently, I am trying to earn my first role as a Software
              Developer. In my free time, I have been working on different
              projects I can use in my spare time, such as a Discord bot coded
              through Python and hosted through docker for my personal Discord
              server, a todo app coded in Python to help me keep track of
              important dates {"("}that I still use everyday{")"}, and various
              front-end and back-end projects to help me keep growing and
              testing my knowledge. I have also been working on a Minecraft
              Plugin using Java and have a few plans for some other interesting
              ways to expand my knowledge and build cool things while
              programming!
            </p>
            <p>
              When I&apos;m not on my computer, I am typically either playing
              D&D, out walking my corgi Einstein, playing video games with
              friends, or rock climbing with my wife Bri. During my free time I
              also love to explore philosopy, I was lucky to be able to take{" "}
              {"("}and re-take multiple times{")"} a philosopy class for my
              elective in high school. Ever since then, exploring other peoples
              ideas and understanding the world from a variety of perspectives
              has been a fun way to grow my own emotional intelligence and help
              satiate my need to continuously learn. My favorite thing about
              philosopy is that even when re-reading an essay or book, I always
              pick up something new!
            </p>
          </div>
          <div className="subject-box">
            <div>
              <h1 className="subject-title">Education</h1>
              <hr />
              <h1 className="edu-title">
                Colorado Technical University • BS in Computer Science
              </h1>
              <h2 className="edu-subtitle">July 2024 - July 2027</h2>
              <ul className="edu-description">
                <li>GPA: 4.0</li>
                <li>President&apos;s list 2024-2025</li>
                <li>
                  Relavent Coursework {"("}completed so far{")"}: Problem
                  Solving in Computer Science, Fundamentals of Networking,
                  Principles of Programming Languages, Python Programming, Java
                  Programming.
                </li>
              </ul>
              <h1 className="edu-title">
                Denver University • Full-Stack Development Bootcamp
                Certification
              </h1>
              <h2 className="edu-subtitle">April 2022 - Oct 2022</h2>
              <ul className="edu-description">
                <li>
                  HTML, CSS, JavaScript, jQuery, Bootstrap, Express.js, Node.js,
                  MongoDB, MySQL, and Git.
                </li>
              </ul>
              <h1 className="edu-title">
                Claris • Claris FileMaker Pro Associate Certification
              </h1>
              <h2 className="edu-subtitle">Jan 2025</h2>
              <ul className="edu-description">
                <li>
                  Working with cross-platform relational databases within
                  FileMaker utilizing tables, fields, and relationships along
                  side layout design and data management.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="subject-title" id="experience">
                Experience
              </h1>
              <hr />
              <h1 className="edu-title">
                Colorado Poolscapes • WordPress Developer
              </h1>
              <h2 className="edu-subtitle">May 2025 - Present</h2>
              <ul className="edu-description">
                <li>
                  Worked on updates to the{" "}
                  <Link href="https://coloradopoolscapes.com/" target="_blank">
                    <span className="edu-link">
                      Colorado Poolscapes website
                    </span>
                  </Link>{" "}
                  creating and implementing our{" "}
                  <Link
                    href="https://coloradopoolscapes.com/service-repair-maintenance/maintenance/"
                    target="_blank"
                  >
                    <span className="edu-link">maintenance page</span>
                  </Link>{" "}
                  and sticky tab, matching styling consistencies.
                </li>
                <li>
                  Created and implemented on the{" "}
                  <Link
                    href="https://coloradopoolscapes.com/service-repair-maintenance/maintenance/"
                    target="_blank"
                  >
                    <span className="edu-link">maintenance page</span>
                  </Link>{" "}
                  through formstack.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills-container">
          <div className="skills-box">
            <h1 className="subject-title">Skills</h1>
            <hr />
            <div className="skills-detail">
              <div>
                <h1 className="skills-title">Programming Languages</h1>
                <span>JavaScript | Python | Java</span>
              </div>
              <div>
                <h1 className="skills-title">Frontend Development</h1>
                <span>React | HTML/CSS | Tailwind | Next.js</span>
              </div>
              <div>
                <h1 className="skills-title">Backend Development</h1>
                <span>Node.js | Express.js </span>
              </div>
              <div>
                <h1 className="skills-title">Databases</h1>
                <span>MongoDB | MySQL | SQLite</span>
              </div>
              <div>
                <h1 className="skills-title">Data Visualization</h1>
                <span>chart.js</span>
              </div>
              <div>
                <h1 className="skills-title">Cloud</h1>
                <span>Docker</span>
              </div>
              <div>
                <h1 className="skills-title">Other</h1>
                <span>
                  Git | RESTful APIs | WordPress | Claris FileMaker | Formstack
                  | Customer Service | Project Coordination
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
