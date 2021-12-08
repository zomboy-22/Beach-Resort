import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Room from "./Room";
import { beachActions } from "./store/beachSlice";
import Loading from "./UI/Loading";
import Title from "./UI/Title";

import classes from "./FeaturedRoom.module.css";

const FeaturedRooms = () => {
  const filteredRooms = useSelector((state) => state.dataBeach.featuredRooms);
  const isLoading = useSelector((state) => state.dataBeach.isLoading);

  const insertFeaturedRooms = filteredRooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  const checkingLoading = isLoading ? <Loading /> : insertFeaturedRooms;

  return (
    <section className={classes["featured-rooms"]}>
      <Title title="featured rooms" />
      <div className={classes["featured-rooms-center"]}>{checkingLoading}</div>
    </section>
  );
};

export default FeaturedRooms;
