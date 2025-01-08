import React from "react";
import Navigation from "./NavigationBar";
import Typewriter from "typewriter-effect";
import { FaReact } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

import { styles } from "./styles";

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <div className="home-section">
        <div className="home-heading-section">
          <h1 id="primary-heading">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["Portfolio of Ethan Williams"],
                pauseFor: 4000,
              }}
            />
          </h1>
        </div>

        <div className="terminal-screen" style={styles.terminalScreen}>
          <div
            className="terminal-selections"
            style={styles.terminalSelections}
          >
            <span className="hidden-text" style={styles.hiddenText}>
              PROBLEMS OUTPUT DEBUG CONSOLE{" "}
              <span style={styles.activeTab}>TERMINAL</span> PORTS
            </span>
            <span className="terminal-option" style={styles.terminalOption}>
              <AiOutlinePlus style={styles.icon} />
              <FaRegTrashAlt style={styles.icon} />
              <span style={styles.moreOptions}>...</span>
            </span>
          </div>
          <br />
          <div className="terminal-text" style={styles.terminalText}>
            <div>
              [{" "}
              <span className="terminal-info" style={styles.info}>
                Info
              </span>{" "}
              ] : Welcome to my portfolio, which consists of projects I have
              completed or I'm working on. Check out my contact information
              section to access my LinkedIn, etc.
            </div>
            <br />
            <div>
              [{" "}
              <span className="terminal-info" style={styles.info}>
                Info
              </span>{" "}
              ] : Feel free to scroll through the project images with the
              buttons on it.
            </div>
            <br />
            <div>
              [{" "}
              <span className="terminal-info" style={styles.info}>
                Info
              </span>{" "}
              ] : My Portfolio was made with React{" "}
              <FaReact style={styles.reactIcon} />.
              <button style={styles.button}>
                <a
                  href="https://github.com/ethxn2021/portfolio-webiste"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.link}
                >
                  GitHub Link
                </a>
              </button>
            </div>
            <br />
            <div style={styles.terminalPrompt}>
              C:\Users\Ethan Williams{">"}{" "}
              <span className="vertical-line-animation" style={styles.cursor}>
                ▯
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
