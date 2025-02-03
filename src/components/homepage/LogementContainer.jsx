import "../../style/generalCSS.scss";
import "../../style/components/homepage/LogementContainer.scss";
import LogementCard from "./LogementCard";
import { logements } from "../../database/logements";

function LogementContainer() {
  return (
    <section className="log-ctn elm-ct">
      {logements.map((log, ind) => (
        <LogementCard
          key={ind}
          id={log.id}
          name={log.title}
          img={log.pictures[0]}
        />
      ))}
    </section>
  );
}

export default LogementContainer;
