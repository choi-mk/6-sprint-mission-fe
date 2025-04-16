import React from "react";
import SearchPost from "./SearchPost";
import Post from "./Post";

function Bulletin() {
  return (
    <div className="w-full h-172.5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-bold">게시글</p>
        <button className="w-22 h-10.5 bg-primary-100 text-white rounded-xl">
          글쓰기
        </button>
      </div>

      <div className="flex justify-between">
        <SearchPost />
        <div className="bg-white border border-gray-200 rounded-xl w-11 h-11 flex justify-center items-center">
          <img className="w-3.5 h-3" src="/assets/ic/ic_drop.png"></img>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Bulletin;
