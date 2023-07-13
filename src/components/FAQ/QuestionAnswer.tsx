import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QuestionAnswerProps {
  question: string;
  answer: string;
  last?: boolean;
}

export default function QuestionAnswer({
  question,
  answer,
    last = false,
}: QuestionAnswerProps) {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className={"flex flex-col  w-full " + (!last && " border-b-2 mb-8")}>
      <div className="flex items-center justify-between" onClick={() => setShowAnswer(!showAnswer)}>
        <h4 className="text-xl font-medium">{question}</h4>
        {showAnswer ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
      </div>
      { <p className="text-md my-4 text-text_secondary">{showAnswer && answer}</p>}
    </div>
  );
}
