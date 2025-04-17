"use client";

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import useOutsideClick from "@/hook/useOutsideClick";

function Comment({ content, commentId, articleId }) {
  const { isOpen, setIsOpen, dropDownRef } = useOutsideClick();
  const [isEdit, setIsEdit] = useState();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="border-b border-gray-200 h-24">
      <div className="flex justify-between">
        <p>{content}</p>
        <div className="relative h-4">
          <div className="w-3 h-4 flex justify-center" onClick={handleClick}>
            <img className="w-1 h-4" src="/assets/ic/ic_setting.png" />
          </div>
          {isOpen && (
            <div
              ref={dropDownRef}
              className="absolute right-0 top-full mt-2 z-50"
            >
              <Dropdown articleId={articleId} commentId={commentId} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 flex">
        <img src="/assets/ic/ic_profile.png" className="w-8 h-8" />
        <div className="ml-2">
          <p className="text-gray-600 text-xs">똑똑한 판다</p>
          <p className="text-gray-400 text-xs">1시간 전</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
