import "./App.css";
import { useEffect } from "react";
import Home from "./Components/Home";
import Portfolios from "./Components/Portfolios";
import ContactPage from "./Components/ContactPage";
import AnimationBubbles from "./Components/AnimationBubbles";
import SkillSection from "./Components/SkillSection";

import MafiaGameImg1 from "./Assets/mafiaGameImg1.png";
import MafiaGameImg2 from "./Assets/mafiaGameImg2.png";
import MafiaGameImg3 from "./Assets/mafiaGameImg3.png";
import MafiaGameImg4 from "./Assets/mafiaGameImg4.png";

import escapeTheGhosts1 from "./Assets/escapeTheGhosts1.png";
import escapeTheGhosts2 from "./Assets/escapeTheGhosts2.png";
import escapeTheGhosts3 from "./Assets/escapeTheGhosts3.png";
import escapeTheGhosts4 from "./Assets/escapeTheGhosts4.png";

import finalYearProj1 from "./Assets/finalYearProj1.png";
import finalYearProj2 from "./Assets/finalYearProj2.png";
import finalYearProj3 from "./Assets/finalYearProj3.png";
import finalYearProj4 from "./Assets/finalYearProj4.png";

import plantPot1 from "./Assets/plantPot1.jpg";
import plantPot3 from "./Assets/plantPot3.png";

import allthatcafeImg1 from "./Assets/allthatcafeImg1.png";
import allthatcafeImg2 from "./Assets/allthatcafeImg2.png";
import allthatcafeImg3 from "./Assets/allthatcafeImg3.png";
import allthatcafeImg4 from "./Assets/allthatcafeImg4.png";

import workInProgress from "./Assets/workInProgress.png";

import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

function App() {
  // Cursor follow animation
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    const colors = [
      "#0cc2c4",
      "#00bfd5",
      "#00bbe7",
      "#00b6f7",
      "#00afff",
      "#26a5ff",
      "#6d99ff",
      "#9c8aff",
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY + window.scrollY; // Adjust for scroll position

      animateCircles();
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / 8;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.7;
        y += (nextCircle.y - y) * 0.7;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <AnimationBubbles />
      <Home />
      <h1>- Personal Skills -</h1>
      <AnimationBubbles />
      <SkillSection
        skillsetTitle="Languages"
        skills={[
          <FaPython className="skillset-icon" />,
          "Python",
          <TbBrandJavascript className="skillset-icon" />,
          "Javascript",
          <FaHtml5 className="skillset-icon" />,
          "HTML",
          <FaCss3Alt className="skillset-icon" />,
          "CSS",
          <FaJava className="skillset-icon" />,
          "Java",
          <SiCsharp className="skillset-icon" />,
          "C#",
          <SiCplusplus className="skillset-icon" />,
          "C++",
          <SiTypescript className="skillset-icon" />,
          "Typescript",
        ]}
      />
      <SkillSection
        skillsetTitle="Tools"
        skills={[
          <FaAngular className="skillset-icon" />,
          "Angular",
          <FaReact className="skillset-icon" />,
          "React",
          <FaNodeJs className="skillset-icon" />,
          "Node.js",
          <FaFigma className="skillset-icon" />,
          "Figma",
          <TbSql className="skillset-icon" />,
          "SQL",
          <DiMongodb className="skillset-icon" />,
          "MongoDB",
        ]}
      />
      <AnimationBubbles />
      <h1>- Projects -</h1>
      <div className="portfolio-container">
        <div>
          <Portfolios
            projectName="Mafia Game"
            gameStack="React Native, Node.js, Visual Studio Code, Figma"
            githubLink={null}
            projectInformation="The Mafia Game is a game where a group of friends get together and immerse themselves in a social deduction experience, taking on the roles of mafia and civilians in a battle of wits and deception."
            deploymentLink="https://themafiagame.netlify.app/"
            imgPlaceHolder={[
              MafiaGameImg1,
              MafiaGameImg2,
              MafiaGameImg3,
              MafiaGameImg4,
            ]}
          />
        </div>
        <div>
          <Portfolios
            projectName="Escape The Ghosts"
            gameStack="Unity Game Engine, C#, Visual Studio, Figma"
            githubLink="https://github.com/ethxn2021/Escape-The-Ghosts"
            projectInformation="Escape The Ghosts is a game where the player has to escape the maze full of ghosts by collecting gems scattered across the map. The player has a gun and 4 health points with power-ups ready to be picked up."
            deploymentLink={null}
            imgPlaceHolder={[
              escapeTheGhosts1,
              escapeTheGhosts2,
              escapeTheGhosts3,
              escapeTheGhosts4,
            ]}
            flip={true}
          />
        </div>
        {/* <div>
          <Portfolios
            projectName="Test"
            gameStack="Test"
            githubLink=""
            projectInformation="Test"
            deploymentLink={null}
            imgPlaceHolder={[escapeTheGhosts1, escapeTheGhosts2, escapeTheGhosts3, escapeTheGhosts4]}
            imgWidth="400px"
            imgHeight="350px"
            flip={true}
          />
        </div> */}
        <div>
          <Portfolios
            projectName="Reddit Client - Codecademy"
            gameStack="React, JavaScript, Redux"
            githubLink={
              "https://github.com/ethxn2021/reddit-client-codeacademy"
            }
            projectInformation="Reddit is a social platform where users share and discuss various types of content. This project uses the Reddit API to fetch and display posts, comments, and subreddit information in a user-friendly interface."
            deploymentLink={null}
            imgPlaceHolder={[
              allthatcafeImg2,
              allthatcafeImg1,
              allthatcafeImg3,
              allthatcafeImg4,
            ]}
            flip={true}
          />
        </div>
        <div>
          <Portfolios
            projectName="All That Falafel Website"
            gameStack="React, Visual Studio Code, Figma"
            githubLink={null}
            projectInformation="Website for All That Falafel store based in London (Multiple Locations). All That Cafe falafel serves the best vegan wraps and meals. This website is currently in progress and will be made public soon"
            deploymentLink={null}
            imgPlaceHolder={[workInProgress]}
            flip={true}
          />
        </div>
        <div>
          <Portfolios
            projectName="GarageGlide - Final Year Group Project"
            gameStack="React Native, SQL , Visual Studio Code, TypeScript"
            githubLink="https://github.com/ethxn2021/COMP600-GarageGlide-GroupProject"
            projectInformation="The Garage Glide project presents a web-based platform for facilitating  and managing car maintenance and repair services. The primary objective is to provide a seamless and efficient experience for both car owners and the auto repair shop staff."
            deploymentLink={null}
            imgPlaceHolder={
              [
                // finalYearProj1,
                // finalYearProj2,
                // finalYearProj3,
                // finalYearProj4,
              ]
            }
          />
        </div>
        <div>
          <Portfolios
            projectName="Smart Plant Pot"
            gameStack="Arduino, C++"
            githubLink="https://github.com/ethxn2021/Smart-Fan"
            projectInformation="The Smart Plant Pot is designed for users to monitor the plant's levels through an application. The Blynk application and LED display indicate when the plant needs watering. Users can monitor soil moisture levels, temperature, and humidity. Additionally, users can monitor multiple different plants as they wish."
            deploymentLink={null}
            imgPlaceHolder={[plantPot1, plantPot3]}
            flip={true}
          />
        </div>
      </div>
      <ContactPage />
    </div>
  );
}

export default App;
