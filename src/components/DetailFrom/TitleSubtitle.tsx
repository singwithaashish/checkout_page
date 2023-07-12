import React from "react";

interface TitleSubtitleProps {
  title: string;
  subtitle: string;
}

export default function TitleSubtitle({ title, subtitle }: TitleSubtitleProps) {
  return (
    <div className="flex flex-col justify-start my-5">
      <h3 className="text-2xl font-medium mt-5">{title}</h3>
      <p className="text-md text-text_secondary ">{subtitle}</p>
    </div>
  );
}
