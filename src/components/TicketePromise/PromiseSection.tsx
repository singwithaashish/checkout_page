import { pageTexts } from "@/utils/constants";
import React from "react";

export default function PromiseSection() {
  return (
    <>
      <h3 className="text-xl mt-5 font-medium">
        {pageTexts.tiketePromiseSection.title}
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        {pageTexts.tiketePromiseSection.promises.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start gap-y-3 my-5 border rounded-lg p-5"
          >
            {item.svg}
            <h4 className="text-lg font-medium mt-8">{item.title}</h4>
            <p className="text-md text-text_secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
