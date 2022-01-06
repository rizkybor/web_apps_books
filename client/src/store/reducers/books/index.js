import {
  GET_DATA_BOOKS,
  GET_DATA_BOOKS_LOADING,
  GET_DATA_BOOKS_ERRORMESSAGE,
} from "../../actions/books/types";

const initState = {
  loading: false,
  books: [],
  errorMessage: "",
};

export default function book(state = initState, action) {
  switch (action.type) {
    case GET_DATA_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_DATA_BOOKS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_DATA_BOOKS_ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
