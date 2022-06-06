import React from "react";

// 1부터 100까지 들어있는 arr
const arr = Array.from(Array(100), (_, i) => i + 1);

const handleClick = (props) => () => {
  //고차함수
  alert(props);
};

const button = arr.map(function (el) {
  return (
    <button key={el} onClick={handleClick(el)}>
      {el}
    </button>
  );
});

export default function ThirdPrac() {
  return <div>{button}</div>;
}
