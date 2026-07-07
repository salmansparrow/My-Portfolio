import { Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import {
  SiCss,
  SiGitforwindows,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMacos,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiSqlite,
  SiVercel,
} from "react-icons/si";
import { MdSupportAgent, MdVideocam } from "react-icons/md";

function Skills() {
  // const skills = [
  //   { name: "Next.js", level: "100" },
  //   { name: "JavaScript", level: "85%" },
  //   { name: "HTML", level: "100%" },
  //   { name: "CSS (Sass)", level: "100%" },
  //   { name: "Material UI", level: "80%" },
  //   { name: "Redux", level: "70%" },
  //   { name: "MongoDB", level: "50%" },
  //   { name: "SQLite3", level: "60%" },
  //   { name: "GitHub", level: "100%" },
  //   { name: "Vercel", level: "100%" },
  // ];
  const webSkills = [
    { name: "Next.js", level: "100%", icon: <SiNextdotjs /> },
    { name: "JavaScript", level: "80%", icon: <SiJavascript color="yellow" /> },
    { name: "HTML", level: "100%", icon: <SiHtml5 color="orange" /> },
    { name: "CSS", level: "100%", icon: <SiCss color="#ff5733" /> },
    { name: "Sass", level: "100%", icon: <SiSass color="#cc6699" /> },
    { name: "Material UI", level: "80%", icon: <SiMui color="blue" /> },
    { name: "Redux", level: "60%", icon: <SiRedux color="#00a7e5" /> },
    { name: "MongoDB", level: "60%", icon: <SiMongodb color="green" /> },
    { name: "SQLite3", level: "60%", icon: <SiSqlite color="blue" /> },
    { name: "GitHub", level: "100%", icon: <SiGithub /> },
    { name: "Vercel", level: "100%", icon: <SiVercel /> },
  ];

  const itSkills = [
    { name: "Windows", level: "100%", icon: "🖥️" },
    { name: "MacOS", level: "80%", icon: <SiMacos /> },
    { name: "Active Directory", level: "60%", icon: "🗂️" },
    { name: "Networking", level: "65%", icon: "🌐" },
    { name: "Hardware", level: "100%", icon: <MdSupportAgent /> },
    { name: "CCTV Systems", level: "75%", icon: <MdVideocam /> },
    { name: "Tech Support", level: "100%", icon: "🛠️" },
  ];

  const [activeTab, setActiveTab] = useState("web");

  // Auto change tabs //

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveTab((prev) => (prev === "web" ? "it" : "web"));
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, [activeTab]);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>

      {/* Tabs */}
      <div className="skills-tabs">
        <button
          className={`skills-tab ${activeTab === "web" ? "active" : ""}`}
          onClick={() => setActiveTab("web")}
        >
          Web Development
        </button>
        <button
          className={`skills-tab ${activeTab === "it" ? "active" : ""}`}
          onClick={() => setActiveTab("it")}
        >
          IT & Infrastructure
        </button>
      </div>

      {/* Cards Grid */}
      <Container>
        <div className="skills-grid">
          {(activeTab === "web" ? webSkills : itSkills).map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="skill-pct">{skill.level}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
