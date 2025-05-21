import React from "react";

function Item({ name, price }) {
  return (
    <div className="flex flex-col w-42">
      <div className="w-42 h-42 flex justify-center items-center bg-gray-50">
        <img src="/assets/img/img_item_default.png" className="w-13 h-auto" />
      </div>
      <div>
        <p>{name}</p>
        <p className="text-gray-800 font-bold">{price}원</p>
      </div>
      <div className="flex items-center gap-1">
        <img className="w-4 h-4" src="/assets/ic/ic_heart.png" />
        <p>240</p>
      </div>
    </div>
  );
}

export default Item;
