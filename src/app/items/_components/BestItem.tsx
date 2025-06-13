import { TItem } from "@/types";
import React from "react";

interface BestItemProps {
  item: TItem;
}

function BestItem({ item }: BestItemProps) {
  const heart = item.favoriteCount;
  return (
    <div className="flex flex-col gap-2 w-85 h-109 lg:w-70 lg:h-94 ">
      <div className="w-85 h-85 lg:w-70 lg:h-70">
        <img
          className="w-full h-full object-cover"
          src={
            `${process.env.NEXT_PUBLIC_API_URL}${item.images[0]}` ||
            "/assets/img/img_default.png"
          }
        ></img>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="text-sm">{item.name}</div>
        <div className="text-gray-800 font-bold">{item.price}원</div>
        <div className="flex items-center gap-1">
          <img className="w-3.5 h-3" src="/assets/ic/ic_heart.png" />
          <div className="text-gray-500">{heart > 9999 ? "9999+" : heart}</div>
        </div>
      </div>
    </div>
  );
}

export default BestItem;
