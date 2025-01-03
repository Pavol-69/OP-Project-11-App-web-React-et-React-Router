// Components
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Bandeau from "../components/Bandeau";
import LogementContainer from "../components/homepage/LogementContainer";

// Data
import bandeau from "../assets/bandeau-homepage.png";

// Style
import "../style/generalCSS.scss";
import "../style/pages/HomePage.scss";

function HomePage() {
  return (
    <>
      <div className="elm-ct ver main-ctn main-ctn-hp">
        <Header />
        <div className="HP-content elm-ct ver">
          <Bandeau
            text={"Chez vous, partout et ailleurs"}
            bandeau={bandeau}
            opacity={0.6}
          />
          <LogementContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
