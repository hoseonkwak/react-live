import React from "react";

// 1부터 100까지 들어있는 arr
const arr = Array.from(Array(100), (_, i) => i + 1);

const button = arr.map(function (el) {
  // switch (true) {
  //   case el % 7 === 0:
  //     return <button key={el}>7의 배수</button>;
  //   case el % 10 === 0:
  //     return false;
  //   default:
  //     return <button key={el}>{el}</button>;
  // }

  if (el % 10 === 0) {
    return "";
  } else if (el % 7 === 0) {
    return <button key={el}>7의배수</button>;
  } else {
    return <button key={el}>{el}</button>;
  }
});

export default function SecondPrac() {
  return <div>{button}</div>;
}
