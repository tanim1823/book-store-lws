import { FORM, SEARCHTERM, STATUSCHANGED } from "./actionType";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case SEARCHTERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case FORM:
      const { status, bookId, book } = action.payload;
      if (status === "created") {
        return {
          ...state,
          form: {
            ...state.form,
            status,
            id: "",
            updatedData: {},
          },
        };
      }
      return {
        ...state,
        form: {
          ...state.form,
          status,
          id: bookId,
          updatedData: book,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
