import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/logementpage/Carrousel";
import TitleLogement from "../components/logementpage/TitleLogement";
import TagsLogement from "../components/logementpage/TagsLogement";
import HostLogement from "../components/logementpage/HostLogement";
import RatingLogement from "../components/logementpage/RatingLogement";
import Collapse from "../components/Collapse";
import "../style/generalCSS.scss";
import "../style/pages/LogementPage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { logements } from "../database/logements";

function LogementPage() {
  const [log, setLog] = useState({ id: "tempo" });
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

  // Si info pas encore chargées, on n'affiche rien
  return log.id == "tempo" ? (
    <></>
  ) : // Si l'id ne correspond à rien, on renvoie vers la page erreur 404
  !log.id ? (
    <Navigate to="/erreur" replace />
  ) : (
    <>
      <div className="main-ctn main-ctn-log ver">
        <Header home={false} about={false} />
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
