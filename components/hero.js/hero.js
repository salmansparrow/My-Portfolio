import Image from "next/image";
import Typewriter from "typewriter-effect";
import image from "/public/images/myimage.png";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="hero-section">
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
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="white"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-31 -31 372.00 372.00"
              stroke="white"
              stroke-width="9.61"
              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.62"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_801_">
                  {" "}
                  <path
                    id="XMLID_802_"
                    d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                  ></path>{" "}
                  <path
                    id="XMLID_803_"
                    d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                  ></path>{" "}
                  <path
                    id="XMLID_804_"
                    d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </Link>
          <Link
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="#000000"
              width="24px"
              height="24px"
              viewBox="-3.2 -3.2 38.40 38.40"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.768"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0">
                <rect
                  x="-3.2"
                  y="-3.2"
                  width="38.40"
                  height="38.40"
                  rx="19.2"
                  fill="white"
                  strokewidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M24.92 12.183c0-1.586-.604-2.864-1.585-3.83.172-.547.398-1.763-.229-3.321 0 0-1.114-.348-3.628 1.315a12.695 12.695 0 0 0-3.081-.366c-1.154 0-2.322.143-3.409.44-2.596-1.747-3.74-1.391-3.74-1.391-.748 1.847-.287 3.215-.145 3.554-.883.936-1.414 2.133-1.414 3.594 0 1.111.128 2.099.44 2.964l.325.732c.879 1.614 2.606 2.655 5.677 2.983-.434.289-.885.779-1.062 1.612-.594.28-2.475.966-3.603-.944 0 0-.633-1.148-1.842-1.235 0 0-1.174-.017-.08.722 0 0 .782.367 1.326 1.738 0 0 .705 2.342 4.114 1.593v2.417s-.076.857-.867 1.143c0 0-.469.312.034.497 0 0 2.205.174 2.205-1.604v-2.643s-.09-1.047.429-1.404v4.332s-.032 1.031-.576 1.421c0 0-.362.646.433.468 0 0 1.517-.211 1.584-1.967l.035-4.383h.363l.033 4.383c.076 1.748 1.59 1.967 1.59 1.967.793.179.429-.468.429-.468-.54-.389-.579-1.421-.579-1.421v-4.297c.52.402.436 1.369.436 1.369v2.643c0 1.777 2.2 1.604 2.2 1.604.505-.186.036-.498.036-.498-.793-.286-.867-1.143-.867-1.143v-3.461c0-1.346-.574-2.056-1.137-2.435 3.277-.318 4.845-1.368 5.572-2.99-.015.027.26-.726.26-.726.25-.859.325-1.855.325-2.963h-.002z"></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>

      <div className="image-container">
        <Image
          src={image}
          alt="Salman Khan"
          layout="fill"
          objectFit="cover"
          className="round-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
