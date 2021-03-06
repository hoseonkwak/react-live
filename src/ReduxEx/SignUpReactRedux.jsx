import React from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Hello = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClickLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <div>안녕하세요 {user}님!</div>
      <button type="button" onClick={handleClickLogout}>
        로그아웃
      </button>
    </>
  );
};

const Form = () => {
  const [inputId, setInputId] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const idChk = React.useRef(null);
  const pwChk = React.useRef(null);
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  // 클릭
  const handleClick = () => {
    console.log(inputId.length || password.length);
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
    dispatch({ type: "LOGIN", payload: inputValue });
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

function SignUpReactRedux() {
  const userId = useSelector((state) => state.user);
  // setId('fastcampus');

  return (
    <BrowserRouter>
      {userId ? (
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Form />} />
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default SignUpReactRedux;
