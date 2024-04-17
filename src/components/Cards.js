import logement from "../data/logements.json";
console.log(logement);

const Cards = () => {
  return (
    <div className="cards-container">
      {logement.map((logement) => (
        <div className="card">
          <img
            src={logement.cover}
            alt=""
            key={logement.id}
            className="card-img"
          />
          {/* <p className="card-text">{logement.title}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Cards;
