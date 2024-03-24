export const CHECKED_CHAR = "CHECKED_CHAR";
export const ADD_LIST = "ADD_LIST";
export const UNCHECKED_CHAR = "UNCHECKED_CHAR";

export const checkedChar = (id: number) => {
  return {
    type: CHECKED_CHAR,
    payload: id,
  };
};

export const uncheckedChar = (id: number) => {
  return {
    type: UNCHECKED_CHAR,
    payload: id,
  };
};

export const addList = (chars: any) => {
  const newData = chars.map((char: any) => ({ ...char, checked: false }));
  return {
    type: ADD_LIST,
    payload: newData,
  };
};
