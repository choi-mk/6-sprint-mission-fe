"use client";

import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/lib/product";

function QuestionList({ itemId }) {
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", itemId],
    queryFn: () => getProduct(itemId, localStorage.getItem("accessToken")),
  });

  const [isEmpty, setIsEmpty] = useState(false);

  const questions = product?.comments || [];
  useEffect(() => {
    if (questions.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [questions]);

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>{error.message}</div>;

  return !isEmpty ? (
    <div className="mt-6 flex flex-col gap-4 w-full ">
      {questions.map((question) => (
        <Question key={question.id} question={question} itemId={itemId} />
      ))}
    </div>
  ) : (
    <div className="mt-6 flex flex-col justify-center items-center">
      <img
        src="/assets/img/img_question_empty.png"
        className="h-34 w-45"
        alt="아직 문의가 없습니다"
      />
      <p className="text-center text-gray-400 mt-10">아직 문의가 없어요</p>
    </div>
  );
}

export default QuestionList;
