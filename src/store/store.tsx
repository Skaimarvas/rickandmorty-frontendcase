import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  Middleware,
} from "redux";
import { charReducer } from "./reducers/charReducer";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const middleware: Middleware[] = [logger, thunk];

export const store = createStore(charReducer, applyMiddleware(...middleware));
