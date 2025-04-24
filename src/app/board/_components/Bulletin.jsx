"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllArticles } from "@/lib/article";
import useOutsideClick from "@/hook/useOutsideClick";
import SearchArticle from "@/components/SearchArticle";

import OrderDropdown from "@/components/OrderDropdown";
import Article from "./Article";

function Bulletin() {
  const { isOpen, setIsOpen, dropDownRef } = useOutsideClick();
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState("asc");

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const fetchArticles = async () => {
    const data = await getAllArticles(search, order);
    setArticles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, [search, order]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-bold">게시글</p>
        <Link href="board/post">
          <button className="w-22 h-10.5 bg-primary-100 text-white rounded-xl">
            글쓰기
          </button>
        </Link>
      </div>

      <div className="flex justify-between gap-4">
        <SearchArticle setSearch={setSearch} />
        <div className="relative">
          <div
            onClick={handleClick}
            className="bg-white border border-gray-200 rounded-xl w-11 h-11 flex justify-center items-center md:w-32 md:gap-6"
          >
            <p className="hidden md:block">최신순</p>
            <img
              src="assets/ic/ic_arrow_down.png"
              className="hidden md:block w-5"
            />
            <img
              className="w-3.5 h-3 md:hidden"
              src="/assets/ic/ic_drop.png"
            ></img>
          </div>
          {isOpen && (
            <div
              ref={dropDownRef}
              className="absolute right-0 top-full mt-1 z-50"
            >
              <OrderDropdown setOrder={setOrder} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6 h-auto items-center">
        {isLoading ? (
          <p>로딩중...</p>
        ) : (
          articles.map((article) => (
            <Link
              className="w-full"
              key={article.id}
              href={`/board/${article.id}`}
            >
              <Article title={article.title} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Bulletin;
