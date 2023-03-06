import "./style.scss";
import { FiMenu } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
import Blob from "../../elements/Blob";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="header">
      <FiMenu className="menuIcon" onClick={() => setShowNav(!showNav)} />
      {showNav && (
        <div className="mobileMenu">
          <ul>
            <li>
              <a href="#about" onClick={() => setShowNav(!showNav)}>
                {" "}
                <CgSmileMouthOpen />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setShowNav(!showNav)}>
                <HiOutlineLightBulb />
                Skills
              </a>
            </li>
            <li>
              <a href="#works" onClick={() => setShowNav(!showNav)}>
                <FaLaptopCode />
                Works
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowNav(!showNav)}>
                <AiOutlineMessage />
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
      <ul className="pcMenu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li id="headerBlobParent">
          <a href="#contact">Contact</a>
          <Blob />
        </li>
      </ul>
    </div>
  );
}
