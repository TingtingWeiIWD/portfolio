import "./style.scss";
import { ResumeButton } from "../../elements/Button";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Blob from "../../elements/Blob";

import resume from "./TingtingWei_Resume.pdf";

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
          I'm a web developer and designer, with digital marketing background.
        </p>
        <p id="aboutBlobParent">
          <Blob />
          In April of this year, I will complete my two-year web development
          program at Fanshawe and seek a front-end development job.
        </p>
        <p>
          I approach each project with a positive and can-do attitude, creating
          visually stunning websites and finding creative solutions to complex
          challenges.
        </p>
        {/* <p>
          I bring not only technical skills, but also a fun and enthusiastic
          personality to the table.
        </p> */}
        <p>
          I am eager to immerse myself in the field of web development, as it
          provided me with unparalleled satisfaction during my studies and
          convinced me that this is a career worth pursuing further.{" "}
        </p>
        <p>
          I look forward to using my code to achieve more visions and dreams!
        </p>
        {/*  Let's
          create something amazing together! */}

        {/* <p>
          I'm a web developer and designer, with experience in digital
          marketing.
        </p>
        <p id="aboutBlobParent">
          <Blob />
          During my studies, my dedication to tackling technical challenges and
          outstanding abilities in UI design left a deep impression on my
          classmates and professors.
        </p>
        <p>
          In addition to school projects, during the Lunar New Year period this
          year, I created a small React app for my friends, providing them with
          information related to a home party. Currently, I am undertaking the
          project of creating an official website for an LGBT choir, and I am
          excited for its launch.
        </p>
        <p>
          I am eager to immerse myself in the field of front-end development, as
          it provided me with unparalleled satisfaction during my studies and
          convinced me that this is a career worth pursuing further. I look
          forward to using my code to achieve more vision and dreams.
        </p> */}
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
