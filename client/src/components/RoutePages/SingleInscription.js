import React from "react";
import { NavLink } from "react-router-dom";

const SingleInscription = ({
  number,
  title,
  inscriptionContent,
  date,
  inscriptionsNumber,
  link,
}) => {
  const lastPageList = { marginBottom: "100px" };
  const lidEnd = inscriptionContent.indexOf("*lid*", 0);
  const lid = inscriptionContent.slice(0, lidEnd);

  return (
    <li
      className="inscription"
      style={inscriptionsNumber < 4 ? lastPageList : {}}
    >
      <div className="inscription-container">
        <div className="inscription-skw-element"></div>
        <h2 className="inscription-number">{number}</h2>
        <h3 className="inscription-title">{title}</h3>

        <p className="inscription-content">
          {lidEnd === -1 ? inscriptionContent : lid}
        </p>
        <button className="inscription-read-more-button">
          <NavLink className="inscription-read-more-link" to={link}>
            Czytaj dalej
          </NavLink>
        </button>
        <p className="inscription-date">
          {date.length < 11 ? date : date.slice(0, 10)}
        </p>
      </div>
    </li>
  );
};
export default SingleInscription;
