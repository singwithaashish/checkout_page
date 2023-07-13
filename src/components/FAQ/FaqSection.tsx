import { pageTexts } from "@/utils/constants";
import React from "react";
import QuestionAnswer from "./QuestionAnswer";
import NeedHelpBox from "./NeedHelpBox";

export default function FaqSection() {
  return (
    <>
      <div className=" md:col-span-2 col-span-3 flex flex-1 flex-col items-start  py-5 pb-0">
        <h3 className="text-2xl font-medium mb-8">Frequently asked question</h3>
        {pageTexts.faqSection.questions.map((item, index) => (
          <QuestionAnswer
            key={index}
            question={item.question}
            answer={item.answer}
            last={index === pageTexts.faqSection.questions.length - 1}
          />
        ))}
      </div>
      <NeedHelpBox />
    </>
  );
}
