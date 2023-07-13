import { allSvgs } from "@/utils/SVGs";
import React from "react";
import CustomInput from "./CustomInput";

interface PaymentMethodProps {
  svg: JSX.Element;
  name: string;
  setSelectedModeIndex: any,
  currentModeIndex: number,
  inputFieldData: {
    label: string;
    type: string;
    id: string;
    suffixIcon?: JSX.Element;
  }[];
  isSelected: boolean;
}

export default function PaymentMethod(
    { svg, name, inputFieldData, isSelected, setSelectedModeIndex, currentModeIndex
     }: PaymentMethodProps,
) {
  return (
    <div className="border-b-2 py-5">
      <div className="flex justify-between ">
        <div className="flex">
          {svg}
          <span className="ml-2">{name}</span>
        </div>
        <input type="radio" className=" w-5 text-black fill-black  " name="payment" id="payment" checked={isSelected} onChange={e => setSelectedModeIndex(currentModeIndex)}/>
      </div>
      {isSelected && <div className="grid md:grid-cols-2 gap-4">
        {
            inputFieldData.map((item, index) => (
                <CustomInput
                    key={index}
                    label={item.label}
                    type={item.type}
                    name={item.id}
                    id={item.id}
                    placeholder={item.label}
                    required={true}
                    suffixIcon={item.suffixIcon}
                />
            ))
        }
      </div>}
    </div>
  );
}
