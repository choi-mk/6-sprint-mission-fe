"use client";

import { patchArticle, postArticle } from "@/lib/api/article";
import { TArticle } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

interface ArticleFormProps {
  dtitle?: TArticle["title"];
  dcontent?: TArticle["content"];
  articleId?: TArticle["id"] | null;
}

function ArticleForm({
  dtitle = "",
  dcontent = "",
  articleId = null,
}: ArticleFormProps) {
  const [title, setTitle] = useState<TArticle["title"]>(dtitle);
  const [content, setContent] = useState<TArticle["content"]>(dcontent);
  const [images, setImages] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    if (images.length <= 3) {
      setErrorMessage("");
    } else {
      setErrorMessage("*이미지는 최대 3개까지 업로드할 수 있습니다.");
    }
  }, [images]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    images.forEach((image) => {
      formData.append("images", image);
    });
    if (!articleId) {
      const newArticle = await postArticle(formData);
      router.push(`/articles/${newArticle.id}`);
    } else {
      await patchArticle(articleId, formData);
      router.push(`/articles/${articleId}`);
    }
  };

  const isValid = title.trim() !== "" && content.trim() !== "";
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
        <label className="text-sm text-gray-800 font-bold">*제목</label>
        <input
          className="w-full h-14 bg-gray-100 pl-6 rounded-lg"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-4">
        <label className="text-sm text-gray-800 font-bold">*내용</label>
        <textarea
          className="w-full h-50 bg-gray-100 pl-6 pt-4 rounded-lg"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-sm text-gray-800 font-bold">*이미지</label>
        <div className="flex gap-6 mt-4">
          <input
            id="imageUpload"
            className="hidden"
            type="file"
            accept="image/*"
            multiple
            disabled={images.length >= 3}
            onChange={(e) => {
              const selectedFiles = Array.from(e.target.files || []);
              setImages([...images, ...selectedFiles].slice(0, 3));
            }}
          />
          <label
            htmlFor="imageUpload"
            className="w-70 h-70 bg-gray-200 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/ic/ic_plus.png"
                width={48}
                height={48}
                alt="이미지 등록"
              />
              <div className="text-gray-400">이미지 등록</div>
            </div>
          </label>
          <div className="flex gap-3">
            {images.map((image, index) => (
              <div className="relative" key={index}>
                <Image
                  alt="preview"
                  src={URL.createObjectURL(image)}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover"
                />
                <button
                  className="absolute top-1 right-1 z-10 rounded-full bg-gray-400 w-5 h-5 flex justify-center items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setImages((prev) => prev.filter((_, i) => i !== index));
                  }}
                >
                  <Image
                    alt="cancel"
                    src="/assets/ic/ic_cancel.png"
                    width={8}
                    height={8}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-error mt-2 text-sm">{errorMessage}</div>
      </div>
    </form>
  );
}

export default ArticleForm;
