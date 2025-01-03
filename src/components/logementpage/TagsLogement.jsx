// Style
import "../../style/generalCSS.scss";
import "../../style/components/logementpage/TagsLogement.scss";

function TagsLogement({ tags }) {
  return (
    <div className="tags-ctn hor">
      {tags.map((tag, ind) => (
        <div className="elm-ct tag" key={ind}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default TagsLogement;
