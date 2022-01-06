import {
  GET_DATA_BOOKS,
  GET_DATA_BOOKS_LOADING,
  GET_DATA_BOOKS_ERRORMESSAGE,
} from "./types";

export const setLoading = (data) => (dispatch) => {
  dispatch({ type: GET_DATA_BOOKS_LOADING, payload: data });
};

export const setErrorMessage = () => (dispatch) => {
  let data = true;
  dispatch({ type: GET_DATA_BOOKS_ERRORMESSAGE, payload: data });
};

export const getBooks = () => (dispatch) => {
  fetch(`https://books-app-5121.herokuapp.com/`)
    .then((response) => response.json())
    .then((json) => {
      let result = json.map((el) => {
        return el;
      });

      dispatch({ type: GET_DATA_BOOKS, payload: result });
    });
};
