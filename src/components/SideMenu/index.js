import "./style.scss";
import { RiArrowDropUpLine } from "react-icons/ri";
import { CgSmileMouthOpen } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

export default function SideMenu() {
  return (
    <div className="sideMenu">
      <ul>
        <li>
          <a href="#">
            {" "}
            <RiArrowDropUpLine />
            <span>Top</span>
          </a>
        </li>
        <li>
          <a href="#about">
            {" "}
            <CgSmileMouthOpen />
            <span>About Tingting</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <HiOutlineLightBulb />
            <span>My Skills</span>
          </a>
        </li>
        <li>
          <a href="#works">
            <FaLaptopCode />
            <span>My Works</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <AiOutlineMessage />
            <span>Contact Me</span>
          </a>
        </li>

        {/* <li className="social">
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
        </li> */}
      </ul>
    </div>
  );
}
