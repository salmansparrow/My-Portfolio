// import Image from "next/image";
// import { Col, Container, Row } from "reactstrap";
// import image from "/public/images/myimage.png";

// function About() {
//   return (
//     <>
//       <section className="about" id="about">
//         <h2 className="about-title"> About</h2>

//         <div>
//           <Container>
//             <Row>
//               <Col lg={5} md={6}>
//                 <div className="about-image">
//                   <Image src={image} height={500} />
//                 </div>
//               </Col>
//               <Col lg={7} md={6}>
//                 <div className="about-text">
//                   <h2>Hello</h2>
//                   <p>
//                     As a dedicated web developer with a rich background in IT
//                     administration, I bring a unique blend of technical
//                     expertise and a passion for crafting exceptional digital
//                     experiences. My journey in web development has ignited a
//                     deep enthusiasm for coding and tackling complex challenges.
//                     I thrive on embracing new technologies and am highly
//                     adaptable to evolving projects and environments. I am eager
//                     to leverage my skills and experience to contribute to
//                     dynamic and innovative web development projects.
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </section>
//     </>
//   );
// }

// export default About;

import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import image from "/public/images/myimage.png";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About</h2>
      <Container>
        <Row className="align-items-start g-4">
          {/* LEFT — Profile Card */}
          <Col lg={4} md={5}>
            <div className="about-profile-card">
              <div className="about-avatar">
                <Image
                  src={image}
                  alt="Salman"
                  width={140}
                  height={160}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="about-name">Salman</h3>
              <p className="about-role">Full Stack Web Developer</p>
              <div className="about-badges">
                <span>Next.js</span>
                <span>React</span>
                <span>Node.js</span>
                <span>IT Officer</span>
              </div>
              <div className="about-socials">
                <a
                  href="https://github.com/salmansparrow"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/salman-khan7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Col>

          {/* RIGHT — Info */}
          <Col lg={8} md={7}>
            <div className="about-right">
              {/* Stats */}
              <div className="about-stats">
                <div className="about-stat">
                  <span className="stat-num">3+</span>
                  <span className="stat-label">Years Exp.</span>
                </div>
                <div className="about-stat">
                  <span className="stat-num">7+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="about-stat">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Passion</span>
                </div>
              </div>

              {/* Bio */}
              <div className="about-bio">
                <p>
                  Who Am I? <br />
                  I'm Salman Khan — an IT Professional and Front-End Web
                  Developer based in Karachi, Pakistan. I don't just fix systems
                  or build websites — I do both, and I do them well. <br />
                  With 3+ years in IT infrastructure and hands-on experience as
                  a Front-End Developer, I bring a rare combination of skills to
                  the table. Whether it's keeping a company's network running at
                  full speed or shipping a production-ready web application — I
                  get it done.
                </p>
              </div>

              {/* Info Grid */}
              <div className="about-info-grid">
                <div className="about-info-item">
                  <span className="info-label">📍 Location</span>
                  <span className="info-val">Pakistan</span>
                </div>
                <div className="about-info-item">
                  <span className="info-label">💼 Status</span>
                  <span className="info-val">Available for work</span>
                </div>
                <div className="about-info-item">
                  <span className="info-label">🎓 Degree</span>
                  <span className="info-val">BS Computer Science</span>
                </div>
                <div className="about-info-item">
                  <span className="info-label">📧 Email</span>
                  <span className="info-val">truesalman7@gmail.com</span>
                </div>
              </div>

              {/* CV Button */}
              <a
                href="https://drive.google.com/uc?export=download&id=1t2eCpmrhfMNYT-GMr8NI3tbWMVLPsk8-"
                download
                className="about-cv-btn"
              >
                ⬇ Download CV
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
