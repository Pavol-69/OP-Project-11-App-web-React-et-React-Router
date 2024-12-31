// CSS
import "../../style/generalCSS.scss";
import "../../style/components/header/HeaderButton.scss";

// Autre
import { Link } from "react-router-dom";

function HeaderButton({ name, path }) {
  return (
    <Link className="link" to={path}>
      {name}
    </Link>
  );
}

export default HeaderButton;
