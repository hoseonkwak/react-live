import React, { useEffect } from "react";
const App = () => {
  const [value, setValue] = React.useState("");
  const [number, setNumber] = React.useState(0);
  useEffect(() => {
    setNumber(0);
    const start = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 1000);
    const showAlert = setTimeout(() => {
      console.log(value);
      clearInterval(start);
    }, 3000);
    return () => {
      clearTimeout(showAlert);
      clearInterval(start);
    };
  }, [value]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      {3 - number}
    </>
  );
};
export default App;
