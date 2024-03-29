export const CHECKED_CHAR = "CHECKED_CHAR";
export const ADD_LIST = "ADD_LIST";
export const UNCHECKED_CHAR = "UNCHECKED_CHAR";
export const SEARCH_CHAR = "SEARCH_CAR";
export const PREV = "PREV";
export const NEXT = "NEXT";
export const PAGES = "PAGES";
export const SET_FETCH_STATES = "SET_FETCH_STATES";

export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FAILED",
};

export const setFetchState = (fetchState: string) => {
  return {
    type: SET_FETCH_STATES,
    payload: fetchState,
  };
};

export const checkedChar = (id: number) => {
  return {
    type: CHECKED_CHAR,
    payload: id,
  };
};

export const addPrev = (prev: string) => {
  return {
    type: PREV,
    payload: prev,
  };
};
export const addNext = (next: string) => {
  return {
    type: NEXT,
    payload: next,
  };
};

export const pages = (pages: number) => {
  return {
    type: PAGES,
    payload: pages,
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
