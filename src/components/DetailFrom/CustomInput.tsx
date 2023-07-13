import React, { useState } from "react";

interface CustomInputProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  prefixIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
  validation?: (value: string) => any;
}

export default function CustomInput({
  label,
  type = "text",
  name,
  id,
  placeholder,
  required = true,
  prefixIcon,
  suffixIcon,
  validation,
}: CustomInputProps) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [inputValue, setInputValue] = useState("");

  const borderColor = error ? "border-red-600" : "border-gray-300";

  const validateInput = (event: React.FocusEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    const ret = validation && validation(event.target.value);
    // console.log(ret);
    if (validation) {
      const error = validation(event.target.value);
      setError(error);
      // console.log(error);
      setErrorMessage(error);
    }
  }
  return (
    <div className="relative z-0 w-full group ">
      <label
        htmlFor={id}
        className="text-[11px] 
bg-white relative px-1  top-[0.7rem] left-3 w-auto  "
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={` text-10 focus:border-0  border  text-sm rounded-lg w-full p-4 ${prefixIcon && "pl-14"} ${error ? "border-red-600" : ""}`}
        required={required}
        placeholder={placeholder}
        onBlur={validateInput}
      />
      {errorMessage && (
        <div className="absolute left-3 bottom-[-1.2rem] text-red-600 text-xs">{errorMessage}</div>
      )}
      {prefixIcon && (
        <div className="absolute left-3 bottom-[0.9rem] rounded-lg 
        ">{prefixIcon}</div>
      )}
      {suffixIcon && (
        <div className="absolute right-3 bottom-[0.2rem]">{suffixIcon}</div>
      )}
    </div>
  );
}
