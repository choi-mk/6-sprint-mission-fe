"use client";
import { TArticle } from "@/types";

export const getArticle = async (
  articleId: TArticle["id"],
  accessToken: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch article");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getArticle error:", error);
    throw error;
  }
};

export const getAllArticles = async (
  search: string = "",
  order: "recent" | "favorite" = "recent"
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles?search=${search}&orderBy=${order}`
    );
    if (!res.ok) throw new Error("Failed to fetch all articles");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getAllArticles error:", error);
    throw error;
  }
};

export const postArticle = async (articleData: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: articleData,
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

export const patchArticle = async (
  articleId: TArticle["id"],
  articleData: FormData
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(articleData),
      }
    );
    if (!res.ok) throw new Error("Failed to patch article");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("patchArticle error:", error);
    throw error;
  }
};

export const deleteArticle = async (articleId: TArticle["id"]) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (!res.ok) throw new Error("Failed to delete article");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("deleteArticle error:", error);
    throw error;
  }
};
