import React from "react";

function ItemDetail() {
  const tags = ["아이패드미니", "애플", "가성비"];
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <img
        src="/assets/img/img_item_detail.png"
        className="w-[343px] h-[343px] object-cover rounded-xl"
      />
      <div className="border-b border-gray-200 pb-6 w-full">
        <div className="border-b border-gray-200 pb-4 flex flex-col gap-2">
          <p className="text-gray-800 font-semibold text-lg">
            아이패드 미니 팔아요
          </p>
          <p className="text-gray-800 font-semibold text-2xl">500000원</p>
        </div>
        <div>
          <div className="mt-4">
            <p className="text-gray-800 font-semibold">상품 소개</p>
            <p className="text-gray-800 mt-2">description</p>
          </div>
          <div className="mt-8">
            <p className="text-gray-800 font-semibold">상품 태그</p>
            <div className="flex gap-2 mt-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-gray-100 py-1 px-4 rounded-2xl text-gray-800"
                >
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-4 ">
            <img src="/assets/ic/ic_profile.png" className="w-10 h-10" />
            <div>
              <p className="text-gray-600">총명한 판다</p>
              <p className="text-gray-400">2024.01.02</p>
            </div>
          </div>
          <div className="border-l border-gray-200 pl-6">
            <div className="border border-gray-200 rounded-2xl flex py-1 px-3 justify-center items-center gap-1">
              <img src="/assets/ic/ic_heart.png" className="w-5 h-4.5" />
              123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
