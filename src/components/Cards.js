import { Link } from "react-router-dom";
// import logement from "../data/logements.json";
// console.log(logement);

const Cards = () => {
  return (
    <Link to="/Lodging">
      <div className="cards-container">
        {logement.map((logement, id) => (
          <div className="card" key={id}>
            <img src={logement.cover} alt="" className="card-img" />
            <p className="card-text">{logement.title}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Cards;
