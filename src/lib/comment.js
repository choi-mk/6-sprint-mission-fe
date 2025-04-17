export const postComment = async (articleId, commentData) => {
  const res = await fetch(
    `http://localhost:3000/api/board/${articleId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to post comment");
  }
  const data = await res.json();
  return data;
};

export const patchComment = async (articleId, commentId, commentData) => {
  const res = await fetch(
    `http://localhost:3000/api/board/${articleId}/comments/${commentId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to patch comment");
  }
  const data = await res.json();
  return data;
};

export const deleteComment = async (articleId, commentId) => {
  console.log(commentId);
  const res = await fetch(
    `http://localhost:3000/api/board/${articleId}/comments/${commentId}`,
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete comment");
  }
  const data = await res.json();
  return data;
};
