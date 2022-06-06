import React from "react";

const HelloName = () => {
  const name = useContext(UserContext2);
  return <div>this is HelloName. and Name is {name}</div>;
};
const HelloId = () => {
  const id = useContext(Context1);
  return <div>this is HelloId. and Id is {id}</div>;
};

function Prac3() {
  return <div>Prac3</div>;
}

export default Prac3;
