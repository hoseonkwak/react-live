import React, { useState } from "react";

export default function StateComponent() {
  const [number, setNumber] = useState({ first: "", second: "" });
  const [result, setResult] = React.useState(0);

  const { first, second } = number;

  const handleChange = (e) => {
    const next = {
      ...number,
      [e.target.name]: e.target.value,
    };
    // alert(e.target.name);
    // console.log(e.target.name);
    console.log(next);
    setNumber(next);
  };

  const handleSum = () => {
    console.log(result);
    setResult(parseInt(first) + parseInt(second));
  };

  return (
    <>
      <input type="number" name="first" onChange={handleChange} />
      +
      <input type="number" name="second" onChange={handleChange} />
      =
      <input type="number" disabled value={result} />
      <button type="button" onClick={handleSum}>
        계산
      </button>
    </>
  );
}
