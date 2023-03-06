import "./style.scss";
import codingGirl from "./codingGirl.png";
import { Button } from "../../elements/Button";
import Blob from "../../elements/Blob";

export default function Hero() {
  return (
    <div className="hero" id="heroBlobParent">
      <div className="imgContainer">
        <img src={codingGirl} alt="A girl working in front of a laptop" />
      </div>

      <div className="heroText">
        <h1>Hi, I'm Tingting,</h1>
        <p>
          a
          <span className="wdSpan highlightText">
            {" "}
            Web Developer & Designer
          </span>
        </p>
        <p>
          and a Former <span className="highlightText">Digital Marketer</span>
        </p>
        <Button text="Contact Me" href="#contact" />
      </div>
      {/* <Blob /> */}
    </div>
  );
}
