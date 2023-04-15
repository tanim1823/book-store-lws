import { deleted } from "../actions";

const URL = "http://localhost:9000/books";
const deleteBook = (bookId) => {
  return async (dispatch) => {
    const response = await fetch(`${URL}/${bookId}`, {
      method: "DELETE",
    });
    dispatch(deleted(bookId));
  };
};
export default deleteBook;
