// Components
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import BandeauHP from "../components/homepage/BandeauHP";
import LogementContainer from "../components/homepage/LogementContainer";

// Style
import "../style/pages/HomePage.scss";

function HomePage() {
  return (
    <>
      <div className="elm-ct ver main-ctn">
        <Header />
        <div className="HP-content elm-ct ver">
          <BandeauHP />
          <LogementContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
