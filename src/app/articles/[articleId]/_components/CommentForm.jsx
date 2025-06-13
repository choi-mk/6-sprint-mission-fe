"use client";

import { postComment } from "@/lib/api/comment";
import React, { useState } from "react";

function CommentForm({ articleId }) {
  const [content, setContent] = useState("");
  const handleClick = async () => {
    const newComment = await postComment("articles", articleId, { content });
    if (newComment) {
      window.location.reload();
    }
  };

  const isValid = content.trim() !== "";
  return (
    <div className="mt-8">
      <p className="text-gray-900 text-sm font-semibold">댓글달기</p>
      <textarea
        placeholder="댓글을 입력해주세요"
        className="bg-gray-100 w-full h-26 rounded-xl pl-6 pt-4 mt-2"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex justify-end mt-4">
        <button
          className={`${
            !isValid ? "bg-gray-400" : "bg-primary-100"
          } text-white w-18.5 h-10.5 rounded-xl`}
          disabled={!isValid}
          onClick={handleClick}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
