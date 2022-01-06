import {
  GET_DATA_AUTHORS,
  GET_DATA_AUTHORS_LOADING,
  GET_DATA_AUTHORS_ERRORMESSAGE,
} from "../../actions/authors/types";

const initState = {
  loading: false,
  authors: [],
  errorMessage: "",
};

export default function author(state = initState, action) {
  switch (action.type) {
    case GET_DATA_AUTHORS:
      return {
        ...state,
        authors: action.payload,
      };
    case GET_DATA_AUTHORS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_DATA_AUTHORS_ERRORMESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
