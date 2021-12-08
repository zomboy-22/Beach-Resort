import { useSelector } from "react-redux";
import Room from "../Room";
import Loading from "../UI/Loading";

import classes from "./RoomList.module.css";

const RoomList = () => {
  const sortedRooms = useSelector((state) => state.dataBeach.sortedRooms);
  const loading = useSelector((state) => state.dataBeach.isLoading);

  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  const insertRooms = sortedRooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className={classes.roomslist}>
      <div className={classes["roomslist-center"]}>{insertRooms}</div>
    </section>
  );
};

export default RoomList;
