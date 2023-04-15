import { updated } from "../actions";

const URL = "http://localhost:9000/books";
const updateBook = (updatedData) => {
  return async (dispatch) => {
    const response = await fetch(`${URL}/${updatedData.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-type": "application/json",
        charset: "UTF-8",
      },
    });
    const result = await response.json();
    dispatch(updated(result));
  };
};

export default updateBook;
