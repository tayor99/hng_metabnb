import Discover from "../../components/Discover/Discover";
import FavouriteHouses from "../../components/Favouritehouses/FavouriteHouses";
import Hero from "../../components/Hero/Hero";
import Sponsor from "../../components/Sponsors/Sponsor";

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsor />
      <FavouriteHouses />
      <Discover />
    </>
  );
};

export default Home;
