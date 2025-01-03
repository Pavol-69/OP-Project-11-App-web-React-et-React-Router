// Components
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/logementpage/Carrousel";
import TitleLogement from "../components/logementpage/TitleLogement";
import TagsLogement from "../components/logementpage/TagsLogement";
import HostLogement from "../components/logementpage/HostLogement";
import RatingLogement from "../components/logementpage/RatingLogement";
import Collapse from "../components/Collapse";

// Style
import "../style/generalCSS.scss";
import "../style/pages/LogementPage.scss";

// Autres
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

// Data
import { logements } from "../database/logements";

function LogementPage() {
  const [log, setLog] = useState({ id: "tempo" }); // attribution d'un id temporaire afin de laisser le temps au useEffect de faire son oeuvre et de ne pas renvoyer vers la page d'erreur trop vite (useEffect = async function)
  const id = useParams().log_id;

  useEffect(() => {
    // Récupération du logement correspondant à l'id dans l'URL
    const result = logements.filter((logement) => logement.id == id);
    if (result.length > 0) {
      setLog(result[0]);
    } else {
      setLog({});
    }
  }, [id]);

  // Si l'id ne correspond à rien, on renvoie vers la page erreur 404
  return log.id == "tempo" ? (
    <></>
  ) : !log.id ? (
    <Navigate to="/erreur" replace />
  ) : (
    <>
      <div className="main-ctn main-ctn-log ver">
        <Header />
        <div className="log-content ver">
          <Carrousel pic={log.pictures} />
          <div className="details-ctn hor">
            <div className="title-tag-ctn ver">
              <TitleLogement title={log.title} location={log.location} />
              <TagsLogement tags={log.tags} />
            </div>
            <div className="owner-rate-ctn ver">
              <HostLogement host={log.host} />
              <RatingLogement rating={log.rating} />
            </div>
          </div>
          <div className="collapses-ctn">
            <Collapse title={"Description"} content={log.description} />
            <Collapse title={"Equipement"} content={log.equipments} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LogementPage;
