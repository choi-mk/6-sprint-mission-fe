import React from "react";
import Comment from "./Comment";

function CommentsList({ comments, articleId }) {
  return (
    <div className="mt-6 flex flex-col gap-4 ">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          content={comment.content}
          commentId={comment.id}
          articleId={articleId}
        />
      ))}
    </div>
  );
}

export default CommentsList;
