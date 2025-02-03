import "../../style/components/logementpage/Carrousel.scss";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import { useState, useEffect } from "react";

function Carrousel({ pic }) {
  // Indice de chaque case du Carrousel
  // 3 au total :
  // - Une au milieu, visible
  // - Une autre de chaque côté correspondant au +1 et -1
  // => On va les faire tourner en changeant juste l'indice de chacune pour créer un effet Carrousel infini
  const [indCar, setIndCar] = useState([]);

  // Position des 3 cases du Carrousel
  const [pos, setPos] = useState([]);

  // Un autre pour le position du milieu indiquée
  const [ind, setInd] = useState(0);

  // Opacité + transition des 3 cases
  // => Il y en a une qu'on veut cacher, celle qui passe de l'autre côté du Carrousel
  const [opa, setOpa] = useState([]);
  const [trans, setTrans] = useState([]);
  const [isRunning, setIsRunning] = useState(false); // Indique si l'animation du Carrousel tourne ou pas

  // Valeur temps transition, en seconde
  const transVal = 1;

  useEffect(() => {
    setIndCar([pic.length - 1, 0, 1]);
    setPos([-100, 0, 100]);
    setOpa([1, 1, 1]);
    setTrans([transVal, transVal, transVal]);
  }, [pic]);

  function moveCarrousel(dir) {
    if (isRunning) {
      return;
    }

    // On indique que l'animation tourne pour ne pas relancer la fonction le temps qu'elle se termine
    setIsRunning(true);

    let posTemp = pos;
    let indTemp = indCar;
    let opaTemp = opa;
    let transTemp = trans;

    for (let i = 0; i < 3; i++) {
      // Màj de chacune des positions et de l'indice des photos à afficher selon la direction (+1 ou -1)
      posTemp[i] += dir * 100;
    }

    for (let i = 0; i < 3; i++) {
      // Quand la position est à +/- 200%
      // Remise en place de l'autre côté du Carrousel de l'image arrivée au bout
      // Pareil pour l'indice
      if (Math.abs(posTemp[i]) == 200) {
        //Recherche de l'indice avec la position 0, celui qui est affiché
        for (let j = 0; j < 3; j++) {
          if (posTemp[j] == 0) {
            indTemp[i] = indTemp[j] - posTemp[i] / 200;
          }
        }
        posTemp[i] = -posTemp[i] / 2;

        // On adapte l'indice photo si on sort des clous
        if (indTemp[i] < 0) {
          indTemp[i] = pic.length - 1;
        } else if (indTemp[i] == pic.length) {
          indTemp[i] = 0;
        }

        // Position à +/-200 = qui passe de l'autre côté du Carrousel, donc à cacher, avec une transition de 0
        // => Sinon on le voit passer devant
        opaTemp[i] = 0;
        transTemp[i] = 0;
      } else {
        opaTemp[i] = 1;
        transTemp[i] = transVal;
      }

      // Si la position est à 0, c'est l'indice à indiquer
      if (posTemp[i] == 0) {
        setInd(indTemp[i]);
      }
    }

    setPos([...posTemp]);
    setIndCar([...indTemp]);
    setOpa([...opaTemp]);
    setTrans([...transTemp]);

    for (let i = 0; i < 3; i++) {
      opaTemp[i] = 1;
      transTemp[i] = trans;
    }

    setTimeout(() => {
      setOpa([...opaTemp]);
      setTrans([...transTemp]);
      setIsRunning(false);
    }, transVal * 1000);
  }

  return (
    <div className="carrousel elm-ct">
      <div
        className="pic-ctn elm-ct"
        style={{
          left: `${pos[1]}%`,
          opacity: `${opa[1]}`,
          transition: `${trans[1]}s`,
        }}
      >
        <img className="picture" alt="Image logement" src={pic[indCar[1]]} />
      </div>
      {pic.length > 1 ? (
        <>
          <div
            className="pic-ctn elm-ct"
            style={{
              left: `${pos[0]}%`,
              opacity: `${opa[0]}`,
              transition: `${trans[0]}s`,
            }}
          >
            <img
              className="picture"
              alt="Image logement"
              src={pic[indCar[0]]}
            />
          </div>
          <div
            className="pic-ctn elm-ct"
            style={{
              left: `${pos[2]}%`,
              opacity: `${opa[2]}`,
              transition: `${trans[2]}s`,
            }}
          >
            <img
              className="picture"
              alt="Image logement"
              src={pic[indCar[2]]}
            />
          </div>
          <img
            className="arrow arrow-left"
            alt="Flèche gauche"
            src={leftArrow}
            onClick={() => moveCarrousel(1)}
          />
          <img
            className="arrow arrow-right"
            alt="Flèche droite"
            src={rightArrow}
            onClick={() => moveCarrousel(-1)}
          />
          <span>{`${ind + 1}/${pic.length}`}</span>
        </>
      ) : null}
    </div>
  );
}

export default Carrousel;
