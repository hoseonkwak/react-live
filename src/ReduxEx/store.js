import { createStore, combineReducers } from "redux";

// reducer
const INITIAL_STATE = 0;
const counterReducer = (state = INITIAL_STATE, action) => {
  console.log("action이 reducer에 도착!", state, action);
  // action
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// store 정의
// 하나의 거대한 object 여기에 필요한 모든 데이터를 담는다.
const store = createStore(
  combineReducers({
    counter: counterReducer,
  })
);

export default store;
