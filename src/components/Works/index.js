import "./style.scss";
import Work from "./Work";
import portfolio from "./Work/portfolio";
import Blob from "../../elements/Blob";
import Divider from "../../elements/Divider";

export default function Works() {
  return (
    <div className="works" id="worksBlobParent1">
      {/* <Blob /> */}
      <div className="worksContainer" id="worksBlobParent2">
        <Divider text="My Works" />

        {portfolio.map((work, index) => (
          <Work
            key={index}
            id={work.id}
            projectName={work.projectName}
            description={work.description}
            tags={work.tags}
            repoLink={work.repoLink}
            liveLink={work.liveLink}
            image={work.image}
          />
        ))}
        {/* <Blob /> */}
      </div>
    </div>
  );
}
