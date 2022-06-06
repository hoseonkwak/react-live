import React from "react";
import { Link } from "react-router-dom";

export default function SignUpContext() {
  const idChk = React.useRef(null);
  const pwChk = React.useRef(null);
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  // 클릭
  const handleClick = () => {
    console.log(id.length || password.length);
    if (!chkId(id)) {
      setId("");
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
    //alert("회원가입 성공!");
  };

  //id 변경될 때
  const handleChangeId = (e) => {
    //console.log(e.target.value);
    setId(e.target.value);
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

  // 버튼
  const Button = () => {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={!(id.length || password.length)}
      >
        회원가입
      </button>
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          ref={idChk}
          value={id}
          name="id"
          placeholder="6글자 이상 20글자 이하"
          onChange={handleChangeId}
        />
        {chkId(id) ? "" : "유효하지 않은 ID입니다."}
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

      {chkId(id) && chkPw(password) ? (
        <Link to={`/signin/${id}`}>
          <Button />
        </Link>
      ) : (
        <Button />
      )}
    </div>
  );
}
