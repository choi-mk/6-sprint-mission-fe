"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { patchProduct, postProduct } from "@/lib/product";

function ItemForm({
  dname = "",
  ddescription = "",
  dprice = 0,
  dtags = [],
  itemId = null,
}) {
  const [name, setName] = useState(dname);
  const [description, setDescription] = useState(ddescription);
  const [price, setPrice] = useState(dprice);
  const [tags, setTags] = useState(dtags);
  const [tag, setTag] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const isValid =
    name.trim() !== "" && description.trim() !== "" && price !== 0;

  const handleClick = async (e) => {
    e.preventDefault();
    if (!itemId) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("tags", JSON.stringify(tags));
      if (image) formData.append("image", image);
      const newItem = await postProduct(formData);
      router.push(`/items/${newItem.id}`);
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("tags", JSON.stringify(tags));
      if (image) formData.append("image", image);

      const updatedItem = await patchProduct(itemId, formData);
      router.push(`/items/${itemId}`);
    }
  };

  useEffect(() => {
    if (image === null) {
      setErrorMessage("");
    } else {
      setErrorMessage("*이미지 등록은 최대 1개까지 가능합니다.");
    }
  }, [image]);

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
        <div className="flex gap-6 mt-4">
          <input
            id="imageUpload"
            className="hidden"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label
            htmlFor="imageUpload"
            className="w-70 h-70 bg-gray-200 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src="/assets/ic/ic_plus.png"
                className="w-12 h-12"
                alt="이미지 등록"
              />
              <div className="text-gray-400">이미지 등록</div>
            </div>
          </label>
          {image && (
            <div className="relative">
              <img
                src={URL.createObjectURL(image)}
                className="w-70 h-70 rounded-2xl object-cover"
              />
              <button
                className="absolute top-1 right-1 z-10 rounded-full bg-gray-400 w-5 h-5 flex justify-center items-center"
                onClick={(e) => setImage(null)}
              >
                <img src="/assets/ic/ic_cancel.png" className="w-2 h-2" />
              </button>
            </div>
          )}
        </div>
        <div className="text-error">{errorMessage}</div>
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
          type="number"
          className="w-full h-14 bg-gray-100 pl-6 rounded-lg"
          placeholder="판매 가격을 입력해주세요"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-800 font-bold">태그</label>
        <input
          className="w-full h-14 bg-gray-100 pl-6 rounded-lg"
          placeholder="태그를 입력해주세요"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (tag.trim() !== "") {
                setTags((prev) => [...prev, tag.trim()]);
                setTag("");
              }
            }
          }}
        />
      </div>
      <div className="mt-4 flex gap-3">
        {tags.map((tagItem) => (
          <div
            className="py-1 px-3 bg-gray-100 flex rounded-2xl gap-2 items-center"
            key={tagItem}
          >
            <p>#{tagItem}</p>
            <div
              className="w-5 h-5 rounded-full bg-gray-400 flex justify-center items-center"
              onClick={() =>
                setTags((prev) => prev.filter((t) => t !== tagItem))
              }
            >
              <img src="/assets/ic/ic_cancel.png" className="w-2 h-2" />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}

export default ItemForm;
