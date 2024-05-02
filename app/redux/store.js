import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./stateManager/article/signInSlice";
import booksReducer from "./stateManager/article/articleSlice";
import authReducer from "./stateManager/article/signOutSlice";
export default configureStore({
    reducer: {
      books: booksReducer,
      user:useReducer,
      auth:authReducer
    },
  });