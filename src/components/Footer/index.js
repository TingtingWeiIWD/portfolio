import "./style.scss";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Divider from "../../elements/Divider";
export default function Footer() {
  return (
    <div className="footer">
      <div className="line"></div>

      <div className="footerContent">
        <div className="copyright"> &copy; Tingting Wei 2023 Made With ❤</div>

        <div className="contacts">
          <a
            href="https://www.linkedin.com/in/tingtingbella/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/TingtingWeiIWD"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://instagram.com/tingtingbelle_414?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
}
