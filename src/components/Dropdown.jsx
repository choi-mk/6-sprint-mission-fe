"use client";
import { deleteArticle, patchArticle } from "@/lib/article";
import { deleteComment, patchComment } from "@/lib/comment";
import { useRouter } from "next/navigation";

import React from "react";

function Dropdown({ articleId, commentId = null, setIsEdit = null }) {
  const router = useRouter();

  const handleClickDelete = async (e) => {
    if (!commentId) {
      await deleteArticle(articleId);
      router.push("/board");
    } else {
      const delComment = await deleteComment(articleId, commentId);
      window.location.reload();
    }
  };
  const handleClickPatch = async (e) => {
    if (!commentId) {
      router.push(`/board/post/${articleId}`);
    } else {
      setIsEdit(true);
    }
  };
  return (
    <div className="w-35 h-23 border border-gray-300 rounded-xl flex flex-col items-center justify-evenly text-gray-500 bg-white">
      <button onClick={handleClickPatch}>수정하기</button>
      <button onClick={handleClickDelete}>삭제하기</button>
    </div>
  );
}

export default Dropdown;
