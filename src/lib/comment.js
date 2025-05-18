export const getAllComments = async (type, Id, limit = 10) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${type}/${Id}/comments?limit=${limit}`
    );
    const data = await res.json();
    return data.list;
  } catch (error) {
    console.error("댓글 목록을 가져오는데 실패했습니다:", error);
    throw error;
  }
};

export const postComment = async (type, Id, commentData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${type}/${Id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(commentData),
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error("댓글 작성에 실패했습니다:", error);
    throw error;
  }
};

export const patchComment = async (commentId, commentData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(commentData),
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error("댓글 수정에 실패했습니다:", error);
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.error("댓글 삭제에 실패했습니다:", error);
    throw error;
  }
};
