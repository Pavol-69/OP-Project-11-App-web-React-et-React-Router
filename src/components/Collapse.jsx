// Style
import "../style/generalCSS.scss";
import "../style/components/Collapse.scss";

// Data
import arrowCol from "../assets/arrow-collapse.svg";

// Autre
import { useState } from "react";

function Collapse({ title, content }) {
  const [deploy, setDeploy] = useState(false);

  function collapse() {
    setDeploy(deploy ? false : true);
  }

  return (
    <div className="collapse-ctn">
      <div
        className={`content-collapse${
          deploy ? " content-collapse-deploy" : ""
        }`}
      >
        {Array.isArray(content) ? (
          <ul>
            {content.map((equip, ind) => (
              <li key={ind}>{equip}</li>
            ))}
          </ul>
        ) : (
          <span>{content}</span>
        )}
      </div>
      <div className="title-collapse-ctn hor">
        <span className="title-collapse">{title}</span>
        <div
          className="arrow-collapse-ctn elm-ct"
          style={{ transform: `rotate(${deploy ? "180deg" : "0deg"})` }}
          onClick={() => collapse()}
        >
          <img alt="Flèche menu déroulant" src={arrowCol} />
        </div>
      </div>
    </div>
  );
}

export default Collapse;
