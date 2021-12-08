import { Fragment, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/UI/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { beachActions } from "./components/store/beachSlice";
import items from "./data";

const App = () => {
  const rooms = useSelector((state) => state.dataBeach.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beachActions.formatData(items));
  }, [dispatch]);

  useEffect(() => {
    dispatch(beachActions.featuredData(rooms));
  }, [dispatch, rooms]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  );
};

export default App;
