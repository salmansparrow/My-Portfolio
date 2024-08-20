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
                    Hard working Web Developer student from Aptech. I'm also a
                    former It Administrator and a future full stack developer.
                    I’ve found my passion in web development. I love spending
                    time coding and encountering new challenges. I’m highly
                    adaptable to new challenges and projects.
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
