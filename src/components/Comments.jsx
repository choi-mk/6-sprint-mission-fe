import React from "react";
import Comment from "./Comment";

function Comments() {
  return (
    <div className="mt-6 flex flex-col gap-4 ">
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
