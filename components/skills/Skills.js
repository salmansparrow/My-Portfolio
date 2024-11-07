import { Col, Container, Row } from "reactstrap";
import React, { useEffect } from "react";

function Skills() {
  const skills = [
    { name: "Next.js", level: "100" },
    { name: "JavaScript", level: "85%" },
    { name: "HTML", level: "100%" },
    { name: "CSS (Sass)", level: "100%" },
    { name: "Material UI", level: "80%" },
    { name: "Redux", level: "70%" },
    { name: "MongoDB", level: "50%" },
    { name: "SQLite3", level: "60%" },
    { name: "GitHub", level: "100%" },
    { name: "Vercel", level: "100%" },
  ];
  useEffect(() => {
    const elementsToObserve = [
      ...document.querySelectorAll(".skill-bar"),
      document.querySelector(".skills-title"),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const firstColumnSkills = skills.slice(0, 5);
  const secondColumnSkills = skills.slice(5);

  return (
    <>
      <section className="skills" id="skills">
        <h2 className="skills-title">Skills</h2>
        <Container className="skills-progress">
          <Row>
            <Col lg={6} sm={12}>
              {firstColumnSkills.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <span>{skill.name}</span>
                  <div className="bar">
                    <div
                      className="progress"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </Col>
            <Col lg={6} sm={12}>
              {secondColumnSkills.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <span>{skill.name}</span>
                  <div className="bar">
                    <div
                      className="progress"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Skills;
