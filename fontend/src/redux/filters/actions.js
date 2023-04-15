import { FORM, SEARCHTERM, STATUSCHANGED } from "./actionType";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const searchTerm = (searchTerm) => {
  return {
    type: SEARCHTERM,
    payload: searchTerm,
  };
};
export const form = (status, bookId, book) => {
  return {
    type: FORM,
    payload: {
      status,
      bookId,
      book,
    },
  };
};
