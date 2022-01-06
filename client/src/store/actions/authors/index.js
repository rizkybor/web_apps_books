import {
  GET_DATA_AUTHORS,
  GET_DATA_AUTHORS_LOADING,
  GET_DATA_AUTHORS_ERRORMESSAGE,
} from "./types";

export const setLoading = (state) => (dispatch) => {
  dispatch({ type: GET_DATA_AUTHORS_LOADING, payload: state });
};

export const setErrorMessage = () => (dispatch) => {
  let data = true;
  dispatch({ type: GET_DATA_AUTHORS_ERRORMESSAGE, payload: data });
};

export const getAuthor = (id) => (dispatch) => {
  fetch(`https://books-app-5121.herokuapp.com/${id}`)
    .then((response) => response.json())
    .then((json) => {
      let result = {
        ...json,
      };

      dispatch({ type: GET_DATA_AUTHORS, payload: result });
    });
};
