import React from "react";
import SingleInscription from "./SingleInscription.js";
import Stork from "../../three-fiber/CanvasSources";
import cloud1 from "../../img/cloud1.png";
import cloud2 from "../../img/cloud2.png";
import cloud3 from "../../img/cloudT.png";
import cloud4 from "../../img/cloud4.png";
import cloudB1 from "../../img/clouds/cloud1.png";
import cloudB2 from "../../img/clouds/cloud2.png";
import cloudB3 from "../../img/clouds/cloud3.png";
import cloudB4 from "../../img/clouds/cloud4.png";
import cloudB5 from "../../img/clouds/cloud5.png";

const Sources = ({ inscriptionsList }) => {
  return (
    <div className="sources">
      <div className="sources__stork-animation-container">
        <Stork />
        <img src={cloud1} alt="cloud" className="sources__banner-cloud" />
        <img src={cloud2} alt="cloud" className="sources__banner-cloud" />
        <img src={cloud3} alt="cloud" className="sources__banner-cloud" />
        <img src={cloud4} alt="cloud" className="sources__banner-cloud" />

        <div className="sources__bottom-clouds-container ">
          <img src={cloudB1} alt="cloud" className="sources__bottom-cloud" />
          <img src={cloudB2} alt="cloud" className="sources__bottom-cloud" />
          <img src={cloudB3} alt="cloud" className="sources__bottom-cloud" />
          <img src={cloudB4} alt="cloud" className="sources__bottom-cloud" />
          <img src={cloudB5} alt="cloud" className="sources__bottom-cloud" />
        </div>
      </div>
      <div className="sources__list">
        <div className="sources__list-transiton"></div>
        <ul className="sources__list-container">
          {inscriptionsList.map((ins) => (
            <SingleInscription
              key={ins.number}
              number={ins.number}
              title={ins.title}
              inscriptionContent={ins.inscriptionContent}
              books={ins.books}
              music={ins.music}
              helpfulLinks={ins.helpfulLinks}
              date={ins.date}
              inscriptionsNumber={ins.number}
              link={`/article/${ins.title}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sources;
