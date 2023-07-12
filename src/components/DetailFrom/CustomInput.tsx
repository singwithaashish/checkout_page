import React from "react";

interface CustomInputProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
}

export default function CustomInput({
  label,
  type = "text",
  name,
  id,
  placeholder,
  required = true,
}: CustomInputProps) {
  return (
    <div className="relative z-0 px-2 w-full group ">
      <label
        htmlFor="first_name"
        className="text-[11px] 
bg-white relative px-1  top-[0.7rem] left-3 w-auto  "
      >
        Email Address
      </label>
      <input
        type="email"
        name="first_name"
        id="first_name"
        className=" text-10 focus:border-0  border  text-sm rounded-lg w-full p-4"
        required
        placeholder="contact@gmail.com"
      />
    </div>
  );
}
