import { ADDED, DELETE, LOADED, UPDATE } from "./actionType";
import initialState from "./initialState";

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return [...state, ...action.payload];

    case ADDED:
      return [...state, action.payload];

    case UPDATE:
      const updatedData = action.payload;

      const updatedState = state.map((book) => {
        if (book.id === updatedData.id) {
          return updatedData;
        }
        return book;
      });
      return updatedState;

    case DELETE:
      const filteredState = state.filter((book) => book.id !== action.payload);
      return filteredState;

    default:
      return state;
  }
};

export default bookReducer;
