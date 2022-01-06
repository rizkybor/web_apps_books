import { combineReducers } from "redux";
import booksReducer from "./books/index";
import authorsReducer from "./authors/index";

export default combineReducers({
  books: booksReducer,
  authors: authorsReducer,
});
