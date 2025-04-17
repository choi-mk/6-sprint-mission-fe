"use client";
import { deleteArticle, patchArticle } from "@/lib/article";
import { deleteComment, patchComment } from "@/lib/comment";
import { useRouter } from "next/navigation";

import React from "react";

function Dropdown({ articleId, commentId = null }) {
  const router = useRouter();
  console.log("commentId");
  console.log(commentId);
  const handleClickDelete = async (e) => {
    if (!commentId) {
      await deleteArticle(articleId);
      router.push("/board");
    } else {
      console.log(commentId);
      const delComment = await deleteComment(articleId, commentId);
    }
  };
  const handleClickPatch = async (e) => {
    if (!commentId) {
      // await patchArticle(articleId);
      router.push(`/board/post/${articleId}`);
    } else {
      await patchComment(articleId, commentId);
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
