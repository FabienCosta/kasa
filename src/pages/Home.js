import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import imgBanner from "../assets/Banner-img.png";
import logements from "../data/logements.json";

const Home = () => {
  return (
    <div>
      <Banner img={imgBanner} title={"Chez vous, partout et ailleurs"} />
      <div className="card-box">
        {logements.map((logement, id) => (
          <div className="card" key={id}>
            <Link
              to={{
                pathname: `/lodging/${logement.id}`,
                state: { logement: logement },
              }}
            >
              <Cards cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
