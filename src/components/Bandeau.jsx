import "../style/generalCSS.scss";
import "../style/components/Bandeau.scss";

function Bandeau({ bandeau, text, opacity }) {
  return (
    <section className={`bandeau elm-ct${text != "" ? " bandeau-ombre" : ""}`}>
      <img alt="Image Bandeau" src={bandeau} />
      <div className="voile" style={{ opacity: opacity }}></div>
      {text != "" ? <h1>{text}</h1> : null}
    </section>
  );
}

export default Bandeau;
