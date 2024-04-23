import { Link } from "react-router-dom";
import logement from "../data/logements.json";

const Cards = () => {
  return (
    <div className="cards-container">
      {logement.map((logement, id) => (
        <div className="card" key={id}>
          <Link to={`/lodging/${logement.id}`} key={id} logement={logement}>
            <img src={logement.cover} alt="" className="card-img" />
            {/* <p className="card-text">{logement.title}</p> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
