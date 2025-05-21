"use client";

import React, { useEffect, useState } from "react";
import BestArticle from "./BestArticle";
import { getAllArticles } from "@/lib/article";

function BestBulletin() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);

  const fetchArticles = async () => {
    const search = "";
    const order = "recent";
    const data = await getAllArticles(search, order);
    setArticles(data);
    setIsLoading(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const getCount = () => {
    if (windowWidth >= 1280) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    fetchArticles();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-xl">베스트 게시글</p>
      <div className="flex gap-6 justify-center">
        {isLoading ? (
          <p>로딩중...</p>
        ) : (
          articles
            .slice(0, getCount())
            .map((article) => (
              <BestArticle key={article.id} title={article.title} />
            ))
        )}
      </div>
    </div>
  );
}

export default BestBulletin;
