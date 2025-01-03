// Components
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Bandeau from "../components/Bandeau";
import Collapse from "../components/Collapse";

// Style
import "../style/generalCSS.scss";
import "../style/pages/AboutPage.scss";

// Data
import bandeau from "../assets/bandeau-about.png";
import { about } from "../database/about";

function AboutPage() {
  return (
    <>
      <div className="ver main-ctn main-ctn-about">
        <Header />
        <Bandeau bandeau={bandeau} text={""} opacity={0.3} />
        <div className="about-collapses-ctn ver">
          {about.map((elm, ind) => (
            <Collapse key={ind} title={elm.title} content={elm.content} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
