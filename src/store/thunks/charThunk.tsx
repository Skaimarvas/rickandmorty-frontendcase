import axios from "axios";

import { Dispatch } from "redux";

import {
  FETCH_STATES,
  addList,
  addNext,
  addPrev,
  pages,
  setFetchState,
} from "../actions/charActions";

export const addListData = (url: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setFetchState(FETCH_STATES.fetching));
    axios
      .get(url)
      .then((res: any) => {
        console.log(res.data);
        dispatch(addList(res.data.results));
        dispatch(addNext(res.data.info.next));
        dispatch(addPrev(res.data.info.prev));
        dispatch(pages(res.data.info.pages));
        dispatch(setFetchState(FETCH_STATES.fetched));
      })
      .catch((err: any) => {
        console.log(err);
        dispatch(setFetchState(FETCH_STATES.failed));
      });
  };
};

export const searchCharList = (name: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setFetchState(FETCH_STATES.fetching));
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res: any) => {
        console.log(res.data);
        dispatch(addList(res.data.results));
        dispatch(addNext(res.data.info.next));
        dispatch(addPrev(res.data.info.prev));
        dispatch(pages(res.data.info.pages));
        dispatch(setFetchState(FETCH_STATES.fetched));
      })
      .catch((err: any) => console.log(err));
    dispatch(setFetchState(FETCH_STATES.failed));
  };
};
