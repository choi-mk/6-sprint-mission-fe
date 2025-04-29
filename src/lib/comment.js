export const getAllComments = async (object, Id, limit = 10) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${object}/${Id}/comments?limit=${limit}`
  );
  const data = await res.json();
  return data.list;
};

export const postComment = async (object, Id, commentData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${object}/${Id}/comments`,
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

export const patchComment = async (commentId, commentData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`,
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

export const deleteComment = async (commentId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`,
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
