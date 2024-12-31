// CSS
import "../../style/generalCSS.scss";
import "../../style/components/header/Header.scss";

// Data
import logo from "../../assets/logo-red.svg";

// Components
import HeaderButton from "./HeaderButton";

function Header() {
  return (
    <header>
      <img alt="Logo Header" src={logo} />
      <div className="hd-btn-ctn">
        <HeaderButton name="Accueil" path="/" />
        <HeaderButton name="A Propos" path="/a-propos" />
      </div>
    </header>
  );
}

export default Header;
