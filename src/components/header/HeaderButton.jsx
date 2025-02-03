import "../../style/generalCSS.scss";
import "../../style/components/header/HeaderButton.scss";
import { Link } from "react-router-dom";

function HeaderButton({ name, path, underline }) {
  return (
    <Link className={`link${underline ? " underline" : ""}`} to={path}>
      {name}
    </Link>
  );
}

export default HeaderButton;
