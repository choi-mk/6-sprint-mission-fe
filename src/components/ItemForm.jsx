"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { patchProduct, postProduct } from "@/lib/product";

function ItemForm({
  dname = "",
  ddescription = "",
  dprice,
  dtags = [],
  itemId = null,
}) {
  const [name, setName] = useState(dname);
  const [description, setDescription] = useState(ddescription);
  const [price, setPrice] = useState(dprice);
  const [tags, setTags] = useState(dtags);
  const [tag, setTag] = useState("");

  const router = useRouter();
  const isValid =
    name.trim() !== "" && description.trim() !== "" && price !== 0;
  const handleClick = async (e) => {
    e.preventDefault();
    if (!itemId) {
      const newItem = await postProduct({ name, description, price, tags });
      router.push(`/items/${newItem.id}`);
    } else {
      const updatedItem = await patchProduct(itemId, {
        name,
        description,
        price,
        tags,
      });
      router.push(`/articles/${itemId}`);
    }
  };

  const handleCancel = () => {};
  return (
    <form className="w-full">
      <div className="flex w-full justify-between">
        <div className="font-bold text-xl text-gray-800">상품 등록하기</div>
        <button
          type="submit"
          className={`${
            !isValid ? "bg-gray-400" : "bg-primary-100"
          } text-white w-18.5 h-10.5 rounded-xl`}
          disabled={!isValid}
          onClick={handleClick}
        >
          등록
        </button>
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-800 font-bold">상품 이미지</label>
        <div className="w-70 h-70 rounded-3xl bg-gray-200"></div>
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-800 font-bold">상품명</label>
        <input
          className="w-full h-14 bg-gray-100 pl-6 rounded-lg"
          placeholder="상품명을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className="text-sm text-gray-800 font-bold">상품 소개</label>
        <textarea
          className="w-full h-50 bg-gray-100 pl-6 pt-4 rounded-lg"
          placeholder="상품 소개를 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-800 font-bold">판매가격</label>
        <input
          className="w-full h-14 bg-gray-100 pl-6 rounded-lg"
          placeholder="판매 가격을 입력해주세요"
          value={price}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-800 font-bold">태그</label>
        <input
          className="w-full h-14 bg-gray-100 pl-6 rounded-lg"
          placeholder="태그를 입력해주세요"
          value={tag}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        {tags.map((tag) => (
          <div className="py-1 px-3" key={tag}>
            <p>#{tag}</p>
            <div
              className="w-5 h-5 rounded-full bg-gray-400"
              onClick={handleCancel}
            >
              <img src="/assets/ic/ic_cancel.png" />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}

export default ItemForm;
