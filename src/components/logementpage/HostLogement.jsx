// Style
import "../../style/generalCSS.scss";
import "../../style/components/logementpage/HostLogement.scss";

// Autre
import { useState, useEffect } from "react";

function HostLogement({ host }) {
  const [name, setName] = useState("");
  const [famName, setFamName] = useState("");

  useEffect(() => {
    const split = host.name.split(" ");
    setName(split[0]);
    setFamName(split[1]);
  }, [host]);

  return (
    <div className="host-ctn hor">
      <div className="name-ctn elm-ct ver">
        <h5>{name}</h5>
        <h5>{famName}</h5>
      </div>
      <div className="host-img-ctn elm-ct">
        <img alt="Photo profil Host" src={host.picture} />
      </div>
    </div>
  );
}

export default HostLogement;
