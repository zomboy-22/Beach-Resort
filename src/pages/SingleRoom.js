import { useSelector } from "react-redux";
import { useParams } from "react-router";

import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/UI/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/UI/styled-hero";
import { Fragment } from "react";
import classes from "./SingleRoom.module.css";

const SingleRoom = () => {
  const rooms = useSelector((state) => state.dataBeach.rooms);
  const params = useParams();

  const findSingleRoom = rooms.find((room) => room.slug === params.slug);
  if (!findSingleRoom) {
    return (
      <div className="error">
        <h3>no such room could found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    price,
    description,
    capacity,
    size,
    extras,
    breakfast,
    pets,
    images,
  } = findSingleRoom;

  // de-structing images
  const [mainImg, ...defaultImg] = images;

  // display rest images
  const restOfImages = defaultImg.map((image, index) => {
    return <img key={index} src={image} alt={name} />;
  });

  // display extras
  const setExtras = extras.map((extra, index) => {
    return <li key={index}>- {extra}</li>;
  });

  // capacity
  const capacityCheck = capacity > 1 ? "people" : "person";

  // pets
  const petsCheck = pets ? "pets allowed" : "no pets allowed";

  // breckfast
  const breakfastCheck = breakfast && "free breakfast included";

  return (
    <Fragment>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className={classes["single-room"]}>
        <div className={classes["single-room-images"]}>{restOfImages}</div>
        <div className={classes["single-room-info"]}>
          <article className={classes.desc}>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className={classes.info}>
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity : {capacity} {capacityCheck}
            </h6>
            <h6>{petsCheck}</h6>
            <h6>{breakfastCheck}</h6>
          </article>
        </div>
      </section>
      <section className={classes["room-extras"]}>
        <h6>extras</h6>
        <ul className={classes.extras}>{setExtras}</ul>
      </section>
    </Fragment>
  );
};

export default SingleRoom;
