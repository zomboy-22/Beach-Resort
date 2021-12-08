import { useSelector } from "react-redux";
import Loading from "../UI/Loading";
import RoomList from "./RoomList";
import RoomsFilter from "./RoomsFilter";

const RoomsContainer = () => {
  const loading = useSelector((state) => state.dataBeach.isLoading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomsFilter />
      <RoomList />
    </div>
  );
};

export default RoomsContainer;
