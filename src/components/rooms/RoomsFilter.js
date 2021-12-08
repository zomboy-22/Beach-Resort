import { useDispatch, useSelector } from "react-redux";
import { beachActions } from "../store/beachSlice";
import Title from "../UI/Title";

import classes from "./RoomsFilter.module.css";

const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = () => {
  const dispatch = useDispatch();
  const {
    rooms,
    capacity,
    type,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useSelector((state) => state.dataBeach);

  // get unigue types
  let types = getUniqueValues(rooms, "type");
  // add "all" value
  types = ["all", ...types];

  // insert all options
  const options = types.map((type, index) => {
    return (
      <option key={index} type={type}>
        {type}
      </option>
    );
  });

  // get unique capacities
  let capacities = getUniqueValues(rooms, "capacity");

  // insert all people
  const people = capacities.map((person, index) => {
    return (
      <option key={index} value={person}>
        {person}
      </option>
    );
  });

  // type handler
  const changeSelectboxHandler = (event) => {
    let value = event.target.value;
    dispatch(beachActions.changeTypeHandler(value));
  };

  // capacity handler
  const changeCapacityHandler = (event) => {
    let value = event.target.value;
    dispatch(beachActions.changePeopleHandler({ value, rooms }));
  };

  // price handler
  const changePriceInputHandler = (event) => {
    let value = event.target.value;
    dispatch(beachActions.changePriceHandler({ value, rooms }));
  };

  // min size handler
  const changeMinNumberInputHandler = (event) => {
    let value = event.target.value;
    dispatch(beachActions.changeMinNumberHandler({ value, rooms }));
  };

  // min size handler
  const changeMaxNumberInputHandler = (event) => {
    let value = event.target.value;
    dispatch(beachActions.changeMaxNumberHandler({ value, rooms }));
  };

  // breakfast handler
  const changebreakfastInputHandler = () => {
    dispatch(beachActions.changeBreakfastHandler(rooms));
  };

  // pets handler
  const changepetsInputHandler = () => {
    dispatch(beachActions.changePetsHandler(rooms));
  };

  return (
    <section className={classes["filter-container"]}>
      <Title title="search rooms by..." />
      <form className={classes["filter-form"]}>
        {/* select type */}
        <div className={classes["form-group"]}>
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className={classes["form-control"]}
            onChange={changeSelectboxHandler}
          >
            {options}
          </select>
        </div>
        {/* end of select type */}
        {/* guests */}
        <div className={classes["form-group"]}>
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className={classes["form-control"]}
            onChange={changeCapacityHandler}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className={classes["form-group"]}>
          <label htmlFor="price">room price ${price}</label>
          <input
            name="price"
            type="range"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className={classes["form-control"]}
            onChange={changePriceInputHandler}
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className={classes["form-group"]}>
          <label htmlFor="size">room size</label>
          <div className={classes["size-inputs"]}>
            <input
              name="min-size"
              type="number"
              id="size"
              value={minSize}
              min={minSize}
              maxSize={maxSize}
              className={classes["size-input"]}
              onChange={changeMinNumberInputHandler}
            />
            <input
              name="max-size"
              type="number"
              id="size"
              value={maxSize}
              min={minSize}
              maxSize={maxSize}
              className={classes["size-input"]}
              onChange={changeMaxNumberInputHandler}
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        {/* breakfast */}
        <div className={classes["form-group"]}>
          <div className={classes["single-extra"]}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={changebreakfastInputHandler}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          {/* end of breakfast */}
          {/* pets */}
          <div className={classes["single-extra"]}>
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={changepetsInputHandler}
            />
            <label htmlFor="pets">pets</label>
          </div>
          {/* end of pets */}
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
