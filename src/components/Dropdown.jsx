"use client";
import { deleteArticle } from "@/lib/article";
import { deleteComment } from "@/lib/comment";
import { useRouter } from "next/navigation";

import React from "react";

function Dropdown({
  type,
  Id,
  commentId = null,
  setIsEdit = null,
  setIsModalOpen = null,
}) {
  const router = useRouter();

  const handleClickDelete = async (e) => {
    if (!commentId && type === "article") {
      await deleteArticle(Id);
      router.push("/articles");
    } else if (!commentId && type === "item") {
      setIsModalOpen(true);
    } else {
      await deleteComment(commentId);
      window.location.reload();
    }
  };
  const handleClickPatch = async (e) => {
    if (!commentId && type === "article") {
      router.push(`/articles/post/${Id}`);
    } else if (!commentId && type === "item") {
      router.push(`/items/post/${Id}`);
    } else {
      setIsEdit(true);
    }
  };
  return (
    <div className="w-26 h-23 border border-gray-300 rounded-xl flex flex-col items-center justify-evenly text-gray-500 bg-white md:w-35">
      <button onClick={handleClickPatch}>수정하기</button>
      <button onClick={handleClickDelete}>삭제하기</button>
    </div>
  );
}

export default Dropdown;
