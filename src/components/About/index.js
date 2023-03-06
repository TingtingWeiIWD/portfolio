import "./style.scss";
import { ResumeButton } from "../../elements/Button";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Blob from "../../elements/Blob";

import resume from "./Resume_TingtingWei.pdf";

export default function About() {
  // const downloadResume = () => {

  // }

  return (
    <div id="about" className="about">
      <h2>
        I enjoy
        <br />
        building<span className="highlightText"> dreams</span> <br />
        with
        <span className="highlightText"> codes</span>.
      </h2>
      <div className="aboutDetail">
        <p>
          I'm a web developer and designer, with 6 years of experience in
          digital marketing.
        </p>
        <p id="aboutBlobParent">
          <Blob />I approach each project with a positive and can-do attitude,
          creating visually stunning websites and finding creative solutions to
          complex challenges.
        </p>
        <p>
          I bring not only technical skills, but also a fun and enthusiastic
          personality to the table.
        </p>
        <p>Let's create something amazing together!</p>
        <div className="aboutCTA">
          <ResumeButton text="My Resume  " href={resume} />
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
        </div>
      </div>
    </div>
  );
}
