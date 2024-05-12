// import { Link } from "react-router-dom";
// import logements from "../data/logements.json";

const Cards = ({ cover, title }) => {
  return (
    <div>
      {/* {logements.map((logement, id) => (
        <div className="card" key={id}>
          <Link
            to={{
              pathname: `/lodging/${logement.id}`,
              state: { logement: logement },
            }}
          ></Link>
        </div>
      ))} */}
      <img src={cover} alt="" className="card-img" />
      <p className="card-text">{title}</p>
    </div>
  );
};

export default Cards;
