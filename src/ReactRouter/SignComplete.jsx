import React from "react";
import { Link, useParams } from "react-router-dom";

export default function SignComplete() {
  // 회원가입 완료
  const params = useParams();
  console.log(params); // Object { id: '5' }
  return (
    <div>
      <p>{params.id}님 안녕하세요!!</p>
      <Link to="/">로그아웃</Link>
    </div>
  );
}
