import React from "react";

function Header() {
  return (
    <div className="h-17 border-b border-gray-200 flex justify-between items-center px-4">
      <div className="flex gap-2">
        <p className="text-primary-100 font-bold text-lg">판다마켓</p>
        <div className="flex gap-2 items-center">
          <p className="font-bold text-gray-600">자유게시판</p>
          <p className="font-bold text-gray-600">중고마켓</p>
        </div>
      </div>
      <button className="bg-primary-100 h-10.5 w-22 text-white rounded-lg">
        로그인
      </button>
    </div>
  );
}

export default Header;
