import { pageTexts } from "@/utils/constants";
import React from "react";
import PromiseBox from "./PromiseBox";

export default function PromiseSection() {
  return (
    <>
      <h3 className="text-xl mt-5 font-medium">
        {pageTexts.tiketePromiseSection.title}
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        {pageTexts.tiketePromiseSection.promises.map((item, index) => (
          <PromiseBox item={item} index={index} key={index}/>
        ))}
      </div>
    </>
  );
}
