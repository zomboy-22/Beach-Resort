import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  isLoading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false,
};

const beachSlice = createSlice({
  name: "beach",
  initialState,
  reducers: {
    gatData() {},
    formatData(state, action) {
      let rooms = action.payload;
      let tempItems = rooms.map((room) => {
        let id = room.sys.id;
        let images = room.fields.images.map((image) => image.fields.file.url);
        let roomItems = { ...room.fields, id, images };
        return roomItems;
      });
      state.rooms = tempItems;
      state.sortedRooms = tempItems;
      state.isLoading = false;
    },
    featuredData(state, action) {
      let rooms = action.payload;
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));

      state.price = maxPrice;
      state.maxPrice = maxPrice;
      state.maxSize = maxSize;

      let featuredArray = rooms.filter((room) => room.featured === true);
      state.featuredRooms = featuredArray;
      state.isLoading = false;
    },
    changeTypeHandler(state, action) {
      const value = action.payload;
      state.type = value;
      let { rooms, type } = state;

      let tempRooms = [];

      if (type !== "all") {
        tempRooms = state.rooms.filter((item) => item.type === type);
      } else {
        tempRooms = rooms;
      }

      state.sortedRooms = tempRooms;
    },
    changePeopleHandler(state, action) {
      const value = +action.payload.value;
      const rooms = action.payload.rooms;

      state.capacity = value;
      let tempRooms = [...rooms];
      if (state.capacity !== 1) {
        tempRooms = tempRooms.filter((room) => room.capacity === value);
      }

      state.sortedRooms = tempRooms;
    },
    changePriceHandler(state, action) {
      const value = +action.payload.value;
      const rooms = action.payload.rooms;

      state.price = value;
      let tempRooms = [...rooms];

      tempRooms = tempRooms.filter((room) => room.price <= state.price);

      state.sortedRooms = tempRooms;
    },
    changeMinNumberHandler(state, action) {
      state.minSize = action.payload.value;

      let tempRooms = [...action.payload.rooms];

      tempRooms = tempRooms.filter((room) => room.size >= state.minSize);

      state.sortedRooms = tempRooms;
    },
    changeMaxNumberHandler(state, action) {
      state.maxSize = action.payload.value;

      let tempRooms = [...action.payload.rooms];

      tempRooms = tempRooms.filter((room) => room.size <= state.maxSize);

      state.sortedRooms = tempRooms;
    },
    changeBreakfastHandler(state, action) {
      state.breakfast = !state.breakfast;
      let tempRooms = [...action.payload];

      if (state.breakfast) {
        tempRooms = tempRooms.filter((room) => room.breakfast === true);
      }

      state.sortedRooms = tempRooms;
    },
    changePetsHandler(state, action) {
      state.pets = !state.pets;
      let tempRooms = [...action.payload];

      if (state.pets) {
        tempRooms = tempRooms.filter((room) => room.pets === true);
      }

      state.sortedRooms = tempRooms;
    },
  },
});

export const beachActions = beachSlice.actions;

export default beachSlice.reducer;
