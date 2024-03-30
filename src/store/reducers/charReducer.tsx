import {
  ADD_LIST,
  CHECKED_CHAR,
  FETCH_STATES,
  NEXT,
  PAGES,
  PREV,
  SET_FETCH_STATES,
  UNCHECKED_CHAR,
} from "../actions/charActions";

export interface GlobalState {
  charactersList: any[];
  checkedCharactersList: any[];
  prev: string;
  next: string;
  pages: number;
  fetchState: string;
}

const initialState: GlobalState = {
  charactersList: [],
  checkedCharactersList: [],
  prev: "",
  next: "",
  pages: 0,
  fetchState: FETCH_STATES.notFetched,
};

export const charReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        charactersList: [...action.payload],
      };
    case SET_FETCH_STATES:
      return {
        ...state,
        fetchState: action.payload,
      };
    case PAGES:
      return {
        ...state,
        pages: action.payload,
      };
    case PREV:
      return {
        ...state,
        prev: action.payload,
      };
    case NEXT:
      return {
        ...state,
        next: action.payload,
      };
    case CHECKED_CHAR:
      return {
        ...state,
        charactersList: state.charactersList.map((char: any) => {
          if (char.id == action.payload) {
            return { ...char, checked: true };
          }
          return char;
        }),
      };
    case UNCHECKED_CHAR:
      return {
        ...state,
        charactersList: state.charactersList.map((char: any) => {
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
