import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import imgBanner from "../assets/Banner-img.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner img={imgBanner} title={"Chez vous, partout et ailleurs"} />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
