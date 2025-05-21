import React from "react";

function Item({ item }) {
  return (
    <div className="flex flex-col w-42 gap-4">
      <div className="w-42 h-42 flex justify-center items-center bg-gray-50">
        <img
          src={
            `${process.env.NEXT_PUBLIC_API_URL}${item.images[0]}` ||
            "/assets/img/img_item_default.png"
          }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p>{item.name}</p>
        <p className="text-gray-800 font-bold">{item.price}원</p>
        <div className="flex items-center gap-1">
          <img className="w-4 h-4" src="/assets/ic/ic_heart.png" />
          <p>{item.favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
