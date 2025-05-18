export const getProduct = async (productId, accessToken) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("상품 정보를 가져오는 데 실패했습니다:", error);
    throw error;
  }
};

export const getAllProducts = async (search = "", order = "recent") => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?keyword=${search}&orderBy=${order}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("상품 목록을 가져오는 데 실패했습니다:", error);
    throw error;
  }
};

export const postProduct = async (productData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: productData,
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error("상품 등록에 실패했습니다:", error);
    throw error;
  }
};

export const patchProduct = async (productId, productData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: productData,
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error("상품 수정에 실패했습니다:", error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to delete product");
    }
    return data;
  } catch (error) {
    console.error("상품 삭제에 실패했습니다:", error);
    throw error;
  }
};

export const postProductFavorite = async (productId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/favorite`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to add favorite");
    }
    return data;
  } catch (error) {
    console.error("상품 찜 등록에 실패했습니다:", error);
    throw error;
  }
};

export const deleteProductFavorite = async (productId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/favorite`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to remove favorite");
    }
    return data;
  } catch (error) {
    console.error("상품 찜 해제에 실패했습니다:", error);
    throw error;
  }
};
