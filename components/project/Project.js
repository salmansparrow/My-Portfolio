import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import projects from "./ProjectData";
import Link from "next/link";

function Project() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const elementsToObserve = [
      ...document.querySelectorAll(".project-item"),
      document.querySelector(".project-title"),
      document.querySelector(".cv-download-container"),
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

  const handleTouch = (id) => {
    if (activeProject === id) {
      // If the same project is touched again, open the link (allow default behavior)
      setActiveProject(null);
      return;
    }
    setActiveProject(id);
  };

  return (
    <>
      <section className="project" id="project">
        <h2 className="project-title">Projects</h2>
        <Container className="project-container mt-5">
          <Row>
            {projects.map((project) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                key={project.id}
                className="project-item"
                onTouchStart={() => handleTouch(project.id)}
              >
                <div className="project-image-container">
                  <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    layout="responsive"
                  />

                  <div
                    className={`overlay ${
                      activeProject === project.id ? "show" : ""
                    }`}
                  >
                    {" "}
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      View Site
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <h3 className="project-name">{project.projectname}</h3>
              </Col>
            ))}
          </Row>
          <div className="cv-download-container">
            <Link
              href="https://drive.google.com/file/d/112jHfcmn_MbX16Aku2VOBMoASxSdgXek/view" // Replace with your CV path
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice
              className="cv-download-btn"
            >
              Download CV
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Project;
