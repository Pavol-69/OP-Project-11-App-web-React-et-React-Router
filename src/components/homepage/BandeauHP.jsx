// CSS
import "../../style/generalCSS.scss";
import "../../style/components/homepage/BandeauHP.scss";

// Data
import bandeau from "../../assets/bandeau-homepage.png";

function BandeauHP() {
  return (
    <section className="bandeau-HP elm-ct">
      <img alt="Bandeau HomePage" src={bandeau} />
      <div className="voile"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default BandeauHP;
