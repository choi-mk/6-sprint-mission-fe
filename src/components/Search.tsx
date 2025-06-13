import React from "react";

interface SearchProps {
  setSearch: (value: string) => void;
}

function Search({ setSearch }: SearchProps) {
  return (
    <div className="flex-1 flex items-center bg-gray-200 rounded-xl h-11 pl-4">
      <img src="assets/ic/ic_search.png" className="w-4 h-4" />
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        className=" w-full pl-1"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
