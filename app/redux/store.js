import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./stateManager/article/articleSlice"
export default configureStore({
    reducer: {
      books: booksReducer,
    },
  });