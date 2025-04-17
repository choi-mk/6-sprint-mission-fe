import React from "react";
import BestArticle from "./BestArticle";

function BestBulletin() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-xl">베스트 게시글</p>
      <div className="flex gap-6 justify-center">
        <BestArticle />
      </div>
    </div>
  );
}

export default BestBulletin;
