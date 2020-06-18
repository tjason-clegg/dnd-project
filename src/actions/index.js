import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CLASSES = "UPDATE_CLASSES";
export const SET_ERROR = "SET_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axios
      .get("https://www.dnd5eapi.co/api/classes/")
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_CLASSES, payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_ERROR,
          payload: "Could not fetch data from the api",
        });
      });
  }, 2000);
};
