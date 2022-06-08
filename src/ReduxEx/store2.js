import { createStore, combineReducers } from "redux";

// reducer
const INITIAL_STATE = "";
const userReducer = (state = INITIAL_STATE, action) => {
  console.log("reducer에 action 도착", state, action);

  // action
  switch (action.type) {
    case "LOGIN":
      return action.payload; // payload에는 입력한 id가 들어온다.
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
// store 정의
const store = createStore(
  combineReducers({
    user: userReducer,
  })
);

// getState().user => {user: ''}
export default store;
