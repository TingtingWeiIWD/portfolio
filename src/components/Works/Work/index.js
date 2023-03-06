import "./style.scss";
import { Button2 } from "../../../elements/Button";

export default function Work({
  projectName,
  description,
  tags,
  id,
  repoLink,
  liveLink,
  image,
}) {
  return (
    <div id="works" className="work">
      <div className={"card " + id}>
        <span className="bgDecoration sm"></span>
        <span className="bgDecoration lg">
          {" "}
          <img src={image} alt={projectName} />
        </span>

        <h3>{projectName}</h3>
        <div className="tagsDiv">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p>{description}</p>
        <div className="dblButtonContainer">
          <Button2 text="View Code" href={repoLink} />
          <Button2 text="View Live" href={liveLink} />
        </div>
      </div>
    </div>
  );
}
