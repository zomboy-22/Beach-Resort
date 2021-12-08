import classes from "./Room.module.css";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { name, slug, price, images } = room;

  return (
    <article className={classes.room}>
      <div className={classes["img-container"]}>
        <img src={images[0] || defaultImg} alt="single room" />
        <div className={classes["price-top"]}>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link
          to={`/rooms/${slug}`}
          className={`btn-primary ${classes["room-link"]}`}
        >
          features
        </Link>
      </div>
      <p className={classes["room-info"]}>{name}</p>
    </article>
  );
};

export default Room;
