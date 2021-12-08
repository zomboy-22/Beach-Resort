import { Fragment } from "react";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";
import Services from "../components/Services";
import Banner from "../components/UI/Banner";
import Hero from "../components/UI/Hero";

const Home = () => {
  return (
    <Fragment>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </Fragment>
  );
};

export default Home;
