import { loaded } from "../actions";
const URL = "http://localhost:9000/books";
const fetchBooks = async (dispatch, getState) => {
  const response = await fetch(URL);
  const result = await response.json();
  dispatch(loaded(result));
};

export default fetchBooks;
