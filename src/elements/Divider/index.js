import "./style.scss";

export default function Divider({ text }) {
  return (
    <div className="divider">
      <div className="text">
        {text} <div className="line"></div>
      </div>
    </div>
  );
}
