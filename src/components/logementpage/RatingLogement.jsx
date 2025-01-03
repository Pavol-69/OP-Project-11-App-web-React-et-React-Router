// Style
import "../../style/generalCSS.scss";
import "../../style/components/logementpage/RatingLogement.scss";

// Data
import fullStart from "../../assets/full-star.svg";
import emptyStart from "../../assets/empty-star.svg";

function RatingLogement({ rating }) {
  const counting = [1, 2, 3, 4, 5];
  return (
    <div className="rating-ctn hor">
      {counting.map((nb, ind) => (
        <div className="elm-ct star-ctn" key={ind}>
          <img
            className="star"
            alt="Etoile Note"
            src={nb <= rating ? fullStart : emptyStart}
          />
        </div>
      ))}
    </div>
  );
}

export default RatingLogement;
