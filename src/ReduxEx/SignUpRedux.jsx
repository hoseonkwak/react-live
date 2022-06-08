import React from "react";
import { createContext, useContext } from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store2";

const Hello = ({ id, dispatchAndUpdateState }) => {
  const handleClickLogout = () => {
    // console.log("action 객체 전송!: ");
    dispatchAndUpdateState({
      type: "LOGOUT",
    });
  };
  return (
    <>
      <div>안녕하세요 {id}님!</div>
      <button type="button" onClick={handleClickLogout}>
        로그아웃
      </button>
    </>
  );
};

const Form = ({ dispatchAndUpdateState }) => {
  const [inputId, setInputId] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const idChk = React.useRef(null);
  const pwChk = React.useRef(null);
  const [password, setPassword] = React.useState("");

  // 클릭
  const handleClick = () => {
    // console.log(inputId.length || password.length);
    if (!chkId(inputId)) {
      setInputId("");
      idChk.current?.focus();
      alert("유효하지 않은 ID입니다.");
      return;
    }
    if (!chkPw(password)) {
      setPassword("");
      pwChk.current?.focus();
      alert("유효하지 않은 PW입니다.");
      return;
    }
    // 임의의 데이터를 넘기고 싶으면 payload로 보낸다.
    dispatchAndUpdateState({ type: "LOGIN", payload: inputValue });
    //alert("회원가입 성공!");
  };

  //id 변경될 때
  const handleChangeId = (e) => {
    //console.log(e.target.value);
    setInputId(e.target.value);
    setInputValue(e.target.value);
  };

  // id 체크
  const chkId = (props) => {
    return props.length >= 6 && props.length <= 20;
  };

  // pw 변경될 때
  const handleChangePw = (e) => {
    setPassword(e.target.value);
  };

  // pw 체크
  const chkPw = (props) => {
    return props.length >= 12 && props.length <= 20;
  };

  return (
    <div>
      <div>
        <input
          type="text"
          ref={idChk}
          value={inputId}
          name="id"
          placeholder="6글자 이상 20글자 이하"
          onChange={handleChangeId}
        />
        {chkId(inputId) ? "" : "유효하지 않은 ID입니다."}
      </div>
      <div>
        <input
          type="text"
          ref={pwChk}
          value={password}
          name="password"
          placeholder="12글자 이상 20글자 이하"
          onChange={handleChangePw}
        />
        {chkPw(password) ? "" : "유효하지 않은 PW입니다."}
      </div>
      <button type="button" onClick={handleClick}>
        회원가입
      </button>
    </div>
  );
};

function SignUpRedux() {
  const [id, setId] = React.useState(store.getState().user);
  const dispatchAndUpdateState = (action) => {
    // 회원가입 버튼을 클릭하면 action에 { type: "LOGIN", payload: inputValue }가 들어온다.
    store.dispatch(action); // reducer로 전송
    setId(store.getState().user); // 현재 user에 담겨있는 id를 set
  };

  return (
    <BrowserRouter>
      {id ? (
        <Routes>
          <Route
            path="/"
            element={
              <Hello id={id} dispatchAndUpdateState={dispatchAndUpdateState} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/register"
            element={<Form dispatchAndUpdateState={dispatchAndUpdateState} />}
          />
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default SignUpRedux;
