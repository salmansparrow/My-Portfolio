import Link from "next/link";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import Xicon from "./XIcon";

function MainFooter() {
  return (
    <>
      <footer className="footer ">
        <div className="footer-title">
          <h2>Salman</h2>
        </div>
        <div className="footer-icons">
          <Link href="/">
            <FacebookIcon />
          </Link>
          <Link href="/">
            <InstagramIcon />
          </Link>
          <Link href="/">
            <Xicon />
          </Link>
        </div>
        <div className="footer-bottom">
          <p>© 2024 copyright all right reserved</p>
        </div>
      </footer>
    </>
  );
}

export default MainFooter;
