export const getArticle = async (articleId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export const getAllArticles = async (search = "", order = "recent") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?keyword=${search}&orderBy=${order}`
  );
  const data = await res.json();
  return data.list;
};

export const postArticle = async (articleData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
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

export const patchArticle = async (articleId, articleData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to patch article");
  }
  const data = await res.json();
  return data;
};

export const deleteArticle = async (articleId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`,
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete article");
  }
  const data = await res.json();
  return data;
};
