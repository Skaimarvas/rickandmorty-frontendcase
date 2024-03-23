import axios from "axios";

import { Dispatch } from "redux";

import { addList } from "../actions/charActions";

export const addListData = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res: any) => {
        console.log(res.data);
        dispatch(addList(res.data.results));
      })
      .catch((err: any) => console.log(err));
  };
};
