import React from "react";

function SearchPost() {
  return (
    <div>
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        className="bg-gray-200 w-72 h-11 rounded-xl pl-4"
      />
    </div>
  );
}

export default SearchPost;
