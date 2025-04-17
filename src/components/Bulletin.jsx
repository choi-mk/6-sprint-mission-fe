import React from "react";
import SearchArticle from "./SearchArticle";
import Article from "./Article";
import Link from "next/link";
import { getAllArticles } from "@/lib/article";

async function Bulletin() {
  const articles = await getAllArticles();
  console.log(articles);

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

      <div className="flex justify-between">
        <SearchArticle />
        <div className="bg-white border border-gray-200 rounded-xl w-11 h-11 flex justify-center items-center">
          <img className="w-3.5 h-3" src="/assets/ic/ic_drop.png"></img>
        </div>
      </div>
      <div className="flex flex-col gap-6 h-auto">
        {articles.map((article) => (
          <Link key={article.id} href={`/board/${article.id}`}>
            <Article title={article.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Bulletin;
