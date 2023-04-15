import { ADDED, DELETE, LOADED, UPDATE } from "./actionType";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};

export const updated = (updatedData) => {
  return {
    type: UPDATE,
    payload: updatedData,
  };
};

export const deleted = (bookId) => {
  return {
    type: DELETE,
    payload: bookId,
  };
};
