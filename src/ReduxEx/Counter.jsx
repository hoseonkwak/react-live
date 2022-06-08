import React from "react";
import store from "./store";

function Counter() {
  const [count, setCount] = React.useState(store.getState().counter);
  const dispatch = (action) => {
    console.log("action 객체 전송!: ", action);
    // action을 reducer로 보낸다.
    store.dispatch(action);
    setCount(store.getState().counter);
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
