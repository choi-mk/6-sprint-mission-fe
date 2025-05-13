"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  deleteProductFavorite,
  getProduct,
  postProductFavorite,
} from "@/lib/product";
import DeleteModal from "@/components/DeleteModal";
import useOutsideClick from "@/hook/useOutsideClick";
import Dropdown from "@/components/Dropdown";
import { useAuth } from "@/providers/AuthProvider";

function ItemDetail({ itemId }) {
  const { data: item, isLoading } = useQuery({
    queryKey: ["product", itemId],
    queryFn: () => getProduct(itemId),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, setIsOpen, dropDownRef } = useOutsideClick();
  const [isMine, setIsMine] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (item && user) {
      setIsMine(item.ownerId === user.id);
    }
    if (item) {
      setIsFavorite(item.isFavorite);
      setFavoriteCount(item.favoriteCount);
    }
  }, [item, user]);
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickHeart = async () => {
    if (!user) return;

    setIsFavorite((prev) => !prev);
    setFavoriteCount((prev) => prev + (isFavorite ? -1 : 1));

    try {
      const updatedItem = isFavorite
        ? await deleteProductFavorite(itemId)
        : await postProductFavorite(itemId);
      setFavoriteCount(updatedItem.favoriteCount);
    } catch (error) {
      setIsFavorite((prev) => !prev);
      setFavoriteCount((prev) => prev + (isFavorite ? 1 : -1));
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center md:flex-row md:items-start">
      <img
        src={
          `${process.env.NEXT_PUBLIC_API_URL}${item.image}` ||
          "/assets/img/img_item_detail.png"
        }
        className="w-[343px] h-[343px] object-cover rounded-xl"
      />
      <div className="border-b border-gray-200 pb-6 w-full">
        <div className="border-b border-gray-200 pb-4 flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-gray-800 font-semibold text-lg">{item.name}</p>
            <p className="text-gray-800 font-semibold text-2xl">{item.price}</p>
          </div>
          {isMine && (
            <div className=" relative h-4">
              <div
                className="w-3 h-4 flex justify-center z-50"
                onClick={handleClick}
              >
                <img className="w-1 h-4" src="/assets/ic/ic_setting.png" />
              </div>
              {isOpen && (
                <div
                  ref={dropDownRef}
                  className="absolute right-0 top-full mt-2 z-100"
                >
                  <Dropdown
                    type={"item"}
                    Id={itemId}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          <div className="mt-4">
            <p className="text-gray-800 font-semibold">상품 소개</p>
            <p className="text-gray-800 mt-2">{item.description}</p>
          </div>
          <div className="mt-8">
            <p className="text-gray-800 font-semibold">상품 태그</p>
            <div className="flex gap-2 mt-2">
              {item.tags.map((tag) => (
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
          <div
            className="border-l border-gray-200 pl-6"
            onClick={handleClickHeart}
          >
            <div className="border border-gray-200 rounded-2xl flex py-1 px-3 justify-center items-center gap-1">
              {isFavorite ? (
                <img src="/assets/ic/ic_full_heart.png" className="w-5 h-4.5" />
              ) : (
                <img src="/assets/ic/ic_heart.png" className="w-5 h-4.5" />
              )}
              {favoriteCount}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <DeleteModal setIsModalOpen={setIsModalOpen} itemId={itemId} />
      )}
    </div>
  );
}

export default ItemDetail;
