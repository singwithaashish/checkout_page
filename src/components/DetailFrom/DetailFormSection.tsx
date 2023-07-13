import { pageTexts } from "@/utils/constants";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import TitleSubtitle from "./TitleSubtitle";
import { allSvgs } from "@/utils/SVGs";
import PaymentMethod from "./PaymentMethod";

export default function DetailFormSection() {
  const [selectedModeIndex, setSelectedModeIndex] = useState(0);
  return (
    <>
      <TitleSubtitle
        title="Enter your details"
        subtitle="We'll be sending your tickets to the details below. Booking for a friend? Add their details."
      />
      <div className="grid md:grid-cols-2 gap-4">
        {pageTexts.paySection.detailsFields.map((item, index) => (
          <CustomInput
            key={index}
            label={item.label}
            type={item.type}
            name={item.id}
            id={item.id}
            placeholder={item.label}
            required={true}
            prefixIcon={item.prefixIcon}
            validation={item.validation}
          />
        ))}
      </div>
      <TitleSubtitle
        title="Addition Information"
        subtitle="We need a few more details to complete your reservation"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <CustomInput
          label={pageTexts.paySection.additionalInfo.ageInput.label}
          type={pageTexts.paySection.additionalInfo.ageInput.type}
          name={pageTexts.paySection.additionalInfo.ageInput.id}
          id={pageTexts.paySection.additionalInfo.ageInput.id}
          placeholder={pageTexts.paySection.additionalInfo.ageInput.label}
          required={true}
        />
        <div className="relative z-0 w-full group">
          <label
            htmlFor="gender"
            className="text-[11px] bg-white relative px-1 top-[0.7rem] left-3 w-auto"
          >
            Select your gender
          </label>
          <select
            name="gender"
            id="gender"
            className={
              "text-10 focus:border-0 bg-white border text-sm rounded-lg w-full p-4 "
            }
            required
          >
            <option value="" disabled selected hidden>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <TitleSubtitle
        title="Select your mode of payment"
        subtitle="Payments with Tickete are secure and encrypted."
      />
      {pageTexts.paySection.modeOfPayment.types.map((item, index) => (
        <PaymentMethod
          svg={item.svg}
          name={item.title}
          key={index}
          inputFieldData={pageTexts.paySection.modeOfPayment.inputFields}
          isSelected={selectedModeIndex === index}
          setSelectedModeIndex={setSelectedModeIndex}
          currentModeIndex={index}
        />
      ))}

      <TitleSubtitle
        title={`Total: ${100}`}
        subtitle={`You will pay in ${pageTexts.ticketSection.currency}`}
      />
      <div className="flex rounded-lg bg-gray-100 p-4">
        <input type="radio" name="terms" id="terms" />
        <label htmlFor="terms" className="ml-2">
          Recieve travel tips, suggestions and offers in {pageTexts.city} by
          email
        </label>
      </div>
      <p className="text-sm mt-2">
        With payment, you agree to the general{" "}
        <span className=" text-blue-600">terms and conditions of tickete</span>{" "}
        and the <span className=" text-blue-600">activity provider</span>
      </p>
      <button className="bg-black flex items-center text-white rounded-lg py-2 mt-5 px-5">
        Confirm and pay{" "}
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M16.25 3.625H3.75C3.41848 3.625 3.10054 3.7567 2.86612 3.99112C2.6317 4.22554 2.5 4.54348 2.5 4.875V9.46094C2.5 16.4453 8.42188 18.7656 9.60938 19.1562C9.8631 19.2397 10.1369 19.2397 10.3906 19.1562C11.5781 18.7656 17.5 16.4453 17.5 9.46094V4.875C17.5 4.54348 17.3683 4.22554 17.1339 3.99112C16.8995 3.7567 16.5815 3.625 16.25 3.625ZM10 17.9688C9.00781 17.6406 4.35156 15.8125 3.80469 10.5H10V4.875H16.25V9.46094C16.2519 9.80806 16.2336 10.155 16.1953 10.5H10V17.9688Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
    </>
  );
}
