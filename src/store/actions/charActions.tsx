export const ADD_CHAR = "ADD_CHAR";
export const ADD_LIST = "ADD_LIST";
export const REMOVE_CHAR = "REMOVE_CHAR";

export const addChar = (char: any) => {
  return {
    type: ADD_CHAR,
    payload: char,
  };
};

export const removeChar = (char: any) => {
  return {
    type: REMOVE_CHAR,
    payload: char,
  };
};

export const addList = (chars: any) => {
  return {
    type: ADD_LIST,
    payload: chars,
  };
};
