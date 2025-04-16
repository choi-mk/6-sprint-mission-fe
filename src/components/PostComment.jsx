import React from "react";

function PostComment() {
  return (
    <div className="mt-8">
      <p className="text-gray-900 text-sm font-semibold">댓글달기</p>
      <textarea
        placeholder="댓글을 입력해주세요"
        className="bg-gray-100 w-full h-26 rounded-xl pl-6 pt-4 mt-2"
      />
      <div className="flex justify-end mt-4">
        <button className="bg-gray-400 text-white w-18.5 h-10.5 rounded-xl">
          등록
        </button>
      </div>
    </div>
  );
}

export default PostComment;
