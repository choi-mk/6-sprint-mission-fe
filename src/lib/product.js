export const getProduct = async (productId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export const getAllProducts = async (search = "", order = "recent") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?keyword=${search}&orderBy=${order}`
  );
  const data = await res.json();
  return data.list;
};

export const postProduct = async (productData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  if (!res.ok) {
    throw new Error("Failed to post product");
  }
  const data = await res.json();
  return data;
};

export const patchProduct = async (productId, productData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to patch product");
  }
  const data = await res.json();
  return data;
};

export const deleteProduct = async (productId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete product");
  }
  const data = await res.json();
  return data;
};

export const postProductFavorite = async (productId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/favorite`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to post product");
  }
  const data = await res.json();
  return data;
};

export const deleteProductFavorite = async (productId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/favorite`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to post product");
  }
  const data = await res.json();
  return data;
};
