import { ADD_LIST, CHECKED_CHAR, UNCHECKED_CHAR } from "../actions/charActions";

interface GlobalState {
  characters: any[];
}

const initialState: GlobalState = {
  characters: [],
};

export const charReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        characters: [...action.payload],
      };

    case CHECKED_CHAR:
      return {
        ...state,
        characters: state.characters.map((char) => {
          if (char.id == action.payload) {
            return { ...char, checked: true };
          }
          return char;
        }),
      };
    case UNCHECKED_CHAR:
      return {
        ...state,
        characters: state.characters.map((char) => {
          if (char.id == action.payload) {
            return { ...char, checked: false };
          }
          return char;
        }),
      };
    default:
      return state;
  }
};
