export const getArticle = async (id) => {
  const res = await fetch(`http://localhost:3000/api/board/${id}`);
  const data = await res.json();
  return data;
};

export const getAllArticles = async () => {
  const res = await fetch(`http://localhost:3000/api/board`);
  const data = await res.json();
  return data;
};

export const postArticle = async (articleData) => {
  const res = await fetch(`http://localhost:3000/api/board`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });
  if (!res.ok) {
    throw new Error("Failed to post article");
  }
  const data = await res.json();
  return data;
};

export const patchArticle = async (id, articleData) => {
  const res = await fetch(`http://localhost:3000/api/board/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });
  if (!res.ok) {
    throw new Error("Failed to patch article");
  }
  const data = await res.json();
  return data;
};

export const deleteArticle = async (id) => {
  const res = await fetch(`http://localhost:3000/api/board/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete article");
  }
  const data = await res.json();
  return data;
};
