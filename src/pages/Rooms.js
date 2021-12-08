import Hero from "../components/UI/Hero";
import Banner from "../components/UI/Banner";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import RoomsContainer from "../components/rooms/RoomsContainer";

const Rooms = () => {
  return (
    <Fragment>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </Fragment>
  );
};

export default Rooms;
