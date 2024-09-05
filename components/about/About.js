import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import image from "/public/images/myimage.png";

function About() {
  return (
    <>
      <section className="about" id="about">
        <h2 className="about-title"> About</h2>

        <div>
          <Container>
            <Row>
              <Col lg={5} md={6}>
                <div className="about-image">
                  <Image src={image} height={500} />
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div className="about-text">
                  <h2>Hello</h2>
                  <p>
                    As a dedicated web developer with a rich background in IT
                    administration, I bring a unique blend of technical
                    expertise and a passion for crafting exceptional digital
                    experiences. My journey in web development has ignited a
                    deep enthusiasm for coding and tackling complex challenges.
                    I thrive on embracing new technologies and am highly
                    adaptable to evolving projects and environments. I am eager
                    to leverage my skills and experience to contribute to
                    dynamic and innovative web development projects.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default About;
