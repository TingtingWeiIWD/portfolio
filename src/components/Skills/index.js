import "./style.scss";
import { FaBootstrap, FaGitAlt, FaBitbucket, FaDocker } from "react-icons/fa";
import { AiFillHtml5, AiOutlineShoppingCart } from "react-icons/ai";
import { DiCss3, DiSass, DiDrupal, DiWordpress } from "react-icons/di";
import {
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiPhp,
  SiNodedotjs,
  SiD3Dotjs,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiReact,
  SiAngular,
} from "react-icons/si";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";
import { GiShare } from "react-icons/gi";
import Blob from "../../elements/Blob";
import Divider from "../../elements/Divider";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <Divider text="My Skills" />
      <div className="skillCategory">
        <span className="skillCatrgoryText">HTML / CSS</span>
        <div className="skillIcons">
          <div>
            <AiFillHtml5 className="front" />
            <span className="back">HTML</span>
          </div>
          <div>
            <DiCss3 className="front" />
            <span className="back">CSS3</span>
          </div>
          <div>
            <DiSass className="front" />
            <span className="back">Sass</span>
          </div>
          <div>
            <FaBootstrap className="front" />
            <span className="back">Bootstrap</span>
          </div>
        </div>
      </div>
      <div className="skillCategory">
        <span className="skillCatrgoryText" id="skillBlobParent1">
          {/* <Blob /> */}
          JavaScript
        </span>
        <div className="skillIcons">
          <div>
            <SiJavascript className="front" />
            <span className="back">JavaScript</span>
          </div>
          <div>
            <SiReact className="front" />
            <span className="back">React</span>
          </div>
          <div>
            <SiAngular className="front" />
            <span className="back">Angular</span>
          </div>
          <div>
            <SiD3Dotjs className="front" />
            <span className="back">D3.js</span>
          </div>
        </div>
      </div>
      <div className="skillCategory">
        <span className="skillCatrgoryText">CMS</span>
        <div className="skillIcons">
          <div>
            <DiWordpress className="front" />
            <span className="back">WordPress</span>
          </div>
          {/* <div>
            <DiDrupal className="front" />
            <span className="back">Drupal</span>
          </div> */}
        </div>
      </div>
      <div className="skillCategory">
        <span className="skillCatrgoryText">BackEnd</span>
        <div className="skillIcons">
          <div>
            <SiMysql className="front" />
            <span className="back">MySQL</span>
          </div>
          <div>
            <SiFirebase className="front" />
            <span className="back">Firebase</span>
          </div>
          <div>
            <SiPhp className="front" />
            <span className="back">PHP</span>
          </div>
          <div>
            <SiNodedotjs className="front" />
            <span className="back">Node.js</span>
          </div>
        </div>
      </div>
      <div className="skillCategory">
        <span className="skillCatrgoryText">Tools</span>
        <div className="skillIcons">
          <div>
            <FaGitAlt className="front" />
            <span className="back">Git</span>
          </div>
          <div>
            <FaBitbucket className="front" />
            <span className="back">Bitbucket</span>
          </div>
          <div>
            <FaDocker className="front" />
            <span className="back">Docker</span>
          </div>
        </div>
      </div>
      <div className="skillCategory" id="skillBlobParent2">
        <span className="skillCatrgoryText">Web Design</span>
        <div className="skillIcons">
          <div>
            <SiFigma className="front" />
            <span className="back">Figma</span>
          </div>
          <div>
            <SiAdobexd className="front" />
            <span className="back">Adobe XD</span>
          </div>
          <div>
            <SiAdobephotoshop className="front" />
            <span className="back">Adobe Photoshop</span>
          </div>
          <div>
            <SiAdobeillustrator className="front" />
            <span className="back">Adobe Illustrator</span>
          </div>
        </div>
        {/* <Blob /> */}
      </div>
      <div className="skillCategory">
        <span className="skillCatrgoryText">Digital Marketing</span>
        <div className="skillIcons">
          {/* <div>
            <MdOutlineScreenSearchDesktop className="front" />
            <span className="back">SEO</span>
          </div> */}
          <div>
            <AiOutlineShoppingCart className="front" />
            <span className="back">eCommerce</span>
          </div>
          <div>
            <GiShare className="front" />
            <span className="back">Social Media</span>
          </div>
          <div>
            <TbHeartHandshake className="front" />
            <span className="back">Client Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
