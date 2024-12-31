// CSS
import "../../style/generalCSS.scss";
import "../../style/components/homepage/LogementCard.scss";

// Autre
import { Link } from "react-router-dom";

function LogementCard({ id, name, img }) {
  return (
    <Link className="log-card elm-ct" to={`/logement/${id}`}>
      <img alt="Image Logement" src={img} />
      <div className="voile"></div>
      <h2>{name}</h2>
    </Link>
  );
}

export default LogementCard;
