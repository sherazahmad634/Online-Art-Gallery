import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./stateManager/article/signInSlice";
import booksReducer from "./stateManager/article/articleSlice";
export default configureStore({
    reducer: {
      books: booksReducer,
      user:useReducer
    },
  });