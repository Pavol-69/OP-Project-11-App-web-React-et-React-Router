import "../../style/generalCSS.scss";
import "../../style/components/header/Header.scss";
import logo from "../../assets/logo-red.svg";
import HeaderButton from "./HeaderButton";

function Header({ home, about }) {
  return (
    <header>
      <img alt="Logo Header" src={logo} />
      <div className="hd-btn-ctn">
        <HeaderButton name="Accueil" path="/" underline={home} />
        <HeaderButton name="A Propos" path="/a-propos" underline={about} />
      </div>
    </header>
  );
}

export default Header;
