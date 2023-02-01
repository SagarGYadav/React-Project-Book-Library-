import { configureStore } from "@reduxjs/toolkit";

import addBookReducer from "./features/addBookSlice";

const store = configureStore({
  reducer: { addBook: addBookReducer },
});

export default store;
