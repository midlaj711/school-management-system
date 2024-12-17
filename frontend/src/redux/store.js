import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk';

import authReducer from "./reducers/authReducer";
import studentReducer from "./reducers/studentReducer";
import libraryReducer from "./reducers/libraryReducer";
import feesReducer from "./reducers/feesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentReducer,
  library: libraryReducer,
  fees: feesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
