"use client";

import React, { useEffect, useState } from "react";
import Question from "./Question";

function QuestionList({ questions, itemId }) {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (questions.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [questions]);
  return !isEmpty ? (
    <div className="mt-6 flex flex-col gap-4 ">
      {questions.map((question) => (
        <Question
          key={question.id}
          dcontent={question.content}
          questionId={question.id}
          itemId={itemId}
        />
      ))}
    </div>
  ) : (
    <div className="mt-6 flex flex-col justify-center items-center">
      <img src="/assets/img/img_question_empty.png" className="h-34 w-45" />
      <p className="text-center text-gray-400 mt-10">아직 문의가 없어요</p>
    </div>
  );
}

export default QuestionList;
