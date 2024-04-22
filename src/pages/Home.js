import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import logements from "../data/logements.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      {logements.map((logement, id) => (
        <Cards key={id} logement={logement} />
      ))}

      <Footer />
    </div>
  );
};

export default Home;
