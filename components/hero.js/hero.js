import Image from "next/image";
import Typewriter from "typewriter-effect";
import image from "/public/images/myimage.png";
import Link from "next/link";
import LinkedinIcon from "./LinkedinIcons";
import GithubIcon from "./GithubIcon";

function HeroSection() {
  return (
    <section className="hero-section ">
      <div className="text-container">
        <h1>
          <span style={{ color: "white", fontWeight: "bolder" }}>Hello, </span>{" "}
          <span style={{ color: "#e31b6d", fontWeight: "bolder" }}>
            World,{" "}
          </span>{" "}
          <br />{" "}
          <span style={{ color: "white", fontWeight: "bolder" }}>I'm </span>{" "}
          <span style={{ color: "#e31b6d", fontWeight: "bolder" }}>
            Salman,{" "}
          </span>{" "}
        </h1>
        <h6 className="typing-text">
          <Typewriter
            options={{
              strings: ["Web Developer", "Footballer", "Addict Video Games"],
              autoStart: true,
              loop: true,
            }}
          />
        </h6>
        <Link href="#contact">
          <button className="contact-button">Contact Me</button>
        </Link>
        <div className="social-icons">
          <Link
            href="https://www.linkedin.com/in/salman-khan7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://github.com/salmansparrow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
      {/* 
      <div className="image-container">
        <Image
          src={image}
          alt="Salman Khan"
          layout="fill"
          objectFit="cover"
          className="round-image"
        />
      </div> */}
    </section>
  );
}

export default HeroSection;
