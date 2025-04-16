import React from "react";

function InputPost() {
  return (
    <form className="w-full">
      <div className="flex w-full justify-between">
        <div className="font-bold text-xl text-gray-800">상품 등록하기</div>
        <button className="bg-gray-400 text-white w-18.5 h-10.5 rounded-xl">
          등록
        </button>
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-800 font-bold">*제목</label>
        <input
          className="w-full h-14 bg-gray-100 pl-6 rounded-lg"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className="text-sm text-gray-800 font-bold">*내용</label>
        <textarea
          className="w-full h-50 bg-gray-100 pl-6 pt-4 rounded-lg"
          placeholder="내용을 입력해주세요"
        />
      </div>
    </form>
  );
}

export default InputPost;
