import { added } from "../actions";
const URL = "http://localhost:9000/books";
const addBook = (book) => {
  return async (dispatch, getState) => {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ ...book }),
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
      },
    });
    const result = await response.json();
    dispatch(added(result));
  };
};
export default addBook;
