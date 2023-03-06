import "./style.scss";
import { FiArrowUpRight } from "react-icons/fi";

function Button({ text, href }) {
  return (
    <a href={href} className="borderBtn">
      <span>
        {text} <FiArrowUpRight />
      </span>
    </a>
  );
}
function ResumeButton({ text, href }) {
  return (
    <a href={href} className="borderBtn resume" download>
      <span>
        {text} <FiArrowUpRight />
      </span>
    </a>
  );
}
function Button2({ text, href }) {
  return (
    <a href={href} target="_blank" className="fillBtn">
      <span>
        {text} <FiArrowUpRight />
      </span>
    </a>
  );
}
export { Button, Button2, ResumeButton };
