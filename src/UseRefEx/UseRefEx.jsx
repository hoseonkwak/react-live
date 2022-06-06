import React from "react";

export default function UseRefEx() {
  const input = React.useRef(null);
  const [value, setValue] = React.useState("");
  const handleClick = () => {
    setValue("");
    if (input.current) {
      // input.current.value = "";
      input.current?.focus();
    }
  };
  return (
    <div>
      {value}
      <div>현재 value는 {value}입니다.</div>
      <input
        type="text"
        value={value}
        ref={input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Click to Reset
      </button>
    </div>
  );
}
