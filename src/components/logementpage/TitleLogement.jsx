import "../../style/generalCSS.scss";
import "../../style/components/logementpage/TitleLogement.scss";

function TitleLogement({ title, location }) {
  // Met la localisation au bon format, avec une virgule au lien d'un tiret
  function formatLocation(name) {
    let split = name.split(" - ");
    return `${split[0]}, ${split[1]}`;
  }

  return (
    <div className="title-ctn ver">
      <h3 className="title-log">{title}</h3>
      <h4 className="loc-log">{formatLocation(location)}</h4>
    </div>
  );
}

export default TitleLogement;
