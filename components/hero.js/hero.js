import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import image from "/public/images/portfolio.jpg";
import LinkedinIcon from "./LinkedinIcons";
import GithubIcon from "./GithubIcon";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      {/* Background Circles */}
      <div className="hero-bg-circle"></div>
      <div className="hero-bg-circle2"></div>

      {/* Left Side */}
      <div className="hero-left">
        <div className="hero-tag">
          <span className="hero-tag-dot"></span>
          Available for work
        </div>

        <h1 className="hero-heading">
          Hello, <span className="pink">World,</span>
          <br />
          I'm <span className="pink">Salman</span>
        </h1>

        <div className="hero-typing">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "IT Officer",
                "Footballer",
                "Addict Video Games",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>

        <p className="hero-desc">
          A dedicated web developer with a rich background in IT administration
          — passionate about crafting exceptional digital experiences.
        </p>

        <div className="hero-actions">
          <Link href="#contact">
            <button className="btn-primary">Contact Me</button>
          </Link>
          <Link href="#projects">
            <button className="btn-outline">View Projects</button>
          </Link>
        </div>

        <div className="hero-socials">
          <Link
            href="https://www.linkedin.com/in/salman-khan7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://github.com/salmansparrow"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
          >
            <GithubIcon />
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">3+</span>
            <span className="hero-stat-label">Years IT Exp.</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">1+</span>
            <span className="hero-stat-label">Year Web Dev</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">7+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
        </div>
      </div>

      {/* Right Side - Avatar */}
      <div className="hero-right">
        <div className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-dot"></div>
          </div>
          <Image src={image} alt="Salman" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
