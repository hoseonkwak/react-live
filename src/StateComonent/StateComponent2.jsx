import React from "react";

export default function StateComponent2() {
  const [left, setLeft] = React.useState(0);
  const [right, setRight] = React.useState(0);
  const [result, setResult] = React.useState(0);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setLeft(parseInt(e.target.value, 10))}
      />
      +
      <input
        type="number"
        onChange={(e) => setRight(parseInt(e.target.value, 10))}
      />
      =
      <input type="number" disabled value={result} />
      <button type="button" onClick={() => setResult(left + right)}>
        계산
      </button>
    </>
  );
}
