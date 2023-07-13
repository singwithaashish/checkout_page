import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QuestionAnswerProps {
  question: string;
  answer: string;
  last?: boolean;
}

const useClientSideRender = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

export default function QuestionAnswer({
  question,
  answer,
    last = false,
}: QuestionAnswerProps) {
  const isClient = useClientSideRender();
  const [showAnswer, setShowAnswer] = useState(false);
  
  useEffect(() => {
    if (isClient) {
      setShowAnswer(window.innerWidth > 768);

      const handleResize = () => {
        setShowAnswer(window.innerWidth > 768);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function:
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);
  return (
    <div className={"flex flex-col  w-full md:pr-10" + (last ? "md:border-b-0 border-b-2 mb-8 md:mb-0": " border-b-2 mb-8")}>
      <div className="flex items-center justify-between" onClick={() => setShowAnswer(!showAnswer)}>
        <h4 className="text-xl font-medium">{question}</h4>
        {showAnswer ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
      </div>
      { <p className="text-md my-4 text-text_secondary">{showAnswer && answer}</p>}
    </div>
  );
}
