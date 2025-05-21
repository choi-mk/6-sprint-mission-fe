"use client";

import React, { useEffect, useState } from "react";
import Question from "./Question";
import { getAllComments } from "@/lib/comment";
import { useQuery } from "@tanstack/react-query";

function QuestionList({ itemId }) {
  const { data: questions = [], isLoading } = useQuery({
    queryKey: ["comments", itemId],
    queryFn: () => getAllComments("products", itemId),
  });

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (questions.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [questions]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
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
