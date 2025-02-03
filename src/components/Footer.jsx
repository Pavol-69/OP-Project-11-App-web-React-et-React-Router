import "../style/components/footer.scss";
import "../style/generalCSS.scss";
import logo from "../assets/logo-white.svg";

function Footer() {
  return (
    <footer alt="Logo Footer" className="elm-ct">
      <img src={logo} />
      <span className="elm-ct">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
