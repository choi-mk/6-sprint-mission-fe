import React from "react";

function SimpleLogin() {
  return (
    <div className="w-full h-19 rounded-md bg-[#E6F2FF] flex items-center px-6 py-4 justify-between">
      <p>간편 로그인하기</p>
      <div className="flex gap-4">
        <img className="w-10" src="assets/ic/ic_google.png" />
        <img className="w-10" src="assets/ic/ic_kakao.png" />
      </div>
    </div>
  );
}

export default SimpleLogin;
