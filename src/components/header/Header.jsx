// CSS
import "../../style/generalCSS.scss";
import "../../style/components/Header.scss";

// Data
import logo from "../../assets/logo-red.svg";

// Components
import HeaderButton from "./HeaderButton";

function Header() {
  return (
    <header>
      <img src={logo} />
      <div className="hd-btn-ctn">
        <HeaderButton name="Accueil" path="/" />
        <HeaderButton name="A Propos" path="/a-propos" />
      </div>
    </header>
  );
}

export default Header;
