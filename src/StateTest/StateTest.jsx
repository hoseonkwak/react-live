import React from "react";

export default function StateTest() {
  const names = [
    {
      name: "hello",
    },
    {
      name: "jin",
    },
    {
      name: "bye",
    },
  ];

  const [result, setResult] = React.useState([]);
  return (
    <>
      {result}
      <button
        type="button"
        onClick={() => {
          setResult([...result, ...names.map(({ name }) => name)]);
        }}
      >
        클릭
      </button>
    </>
  );
}
