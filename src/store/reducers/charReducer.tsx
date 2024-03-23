import { ADD_LIST } from "../actions/charActions";

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
    default:
      return state;
  }
};
