import { createStore, combineReducers, applyMiddleware } from "redux";

// reducer
const INITIAL_STATE = 0;
const counterReducer = (state = INITIAL_STATE, action) => {
  // console.log("action이 reducer에 도착!", state, action);
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

function loggingMiddleware(store) {
  return function (next) {
    return function (action) {
      // 하고 싶은 작업...
      console.log("action이 middleware에 도착", action);
      console.log("현재 state: ", store.getState());
      next(action);
    };
  };
}

function randomMiddleware(store) {
  return function (next) {
    return function (action) {
      if (Math.round(Math.random())) {
        console.log("성공!");
        next(action);
      } else {
        console.log("실패...");
      }
    };
  };
}

// store 정의
// 하나의 거대한 object 여기에 필요한 모든 데이터를 담는다.
const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  applyMiddleware(randomMiddleware, randomMiddleware)
);

export default store;
