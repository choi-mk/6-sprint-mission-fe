"use client";
import { deleteProduct } from "@/lib/product";
import { useRouter } from "next/navigation";
import React from "react";

function DeleteModal({ setIsModalOpen, itemId }) {
  const router = useRouter();
  const handleClick = async () => {
    await deleteProduct(itemId);
    router.push("/items");
  };
  return (
    <div className="z-500 fixed inset-0 bg-black/70 flex items-center justify-center ">
      <div className="w-80 h-55 bg-white rounded-xl flex justify-center items-center flex-col opacity-100">
        <div className="bg-error w-6 h-6 rounded-full flex justify-center items-center">
          <img src="/assets/ic/ic_check.png" className="w-3 h-3" />
        </div>
        <p className="text-gray-800 mt-6">정말로 상품을 삭제하시겠어요?</p>
        <div className="flex gap-2 h-12 mt-8">
          <button
            className="border border-error text-error w-22 h-12 rounded-lg font-semibold"
            onClick={() => setIsModalOpen(false)}
          >
            취소
          </button>
          <button
            onClick={handleClick}
            className="bg-error text-white w-22 h-12  rounded-lg font-semibold"
          >
            네
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
