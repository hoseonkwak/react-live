import React, { useEffect } from "react";

export default function UseEffect1() {
  const [value, setValue] = React.useState("");
  const [sec, setSec] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);

    let lastTime = 3;
    let second = setInterval(() => {
      if (lastTime < 0) {
        clearInterval(second);
        lastTime = 3;
      } else {
        lastTime -= 1;
      }
      // console.log(lastTime);
      setSec(lastTime);
      // console.log(sec);
    }, 1000);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      console.log(value);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      <br />
      <h2></h2>
      <div>
        {sec}초 후 console에 출력 될 값 : {value}
      </div>
    </div>
  );
}
