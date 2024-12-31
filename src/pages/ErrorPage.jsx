// Components
import Header from "../components/header/Header";
import Footer from "../components/Footer";

// Style
import "../style/generalCSS.scss";
import "../style/pages/ErrorPage.scss";

// Autre
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="main-ctn elm-ct ver">
        <Header />
        <span className="error error-nb">404</span>
        <span className="error error-msg">
          {"Oups ! La page que vous demandez n'existe pas."}
        </span>
        <Link className="hp-link" to="/">
          {"Retourner sur la page d'accueil"}
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
