import { Link } from "react-router-dom";
import logements from "../data/logements.json";

const Cards = () => {
  return (
    <div className="cards-container">
      {logements.map((logement, id) => (
        <div className="card" key={id}>
          <Link
            to={{
              pathname: `/lodging/${logement.id}`,
              state: { logement: logement },
            }}
          >
            <img src={logement.cover} alt="" className="card-img" />
            <p className="card-text">{logement.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
