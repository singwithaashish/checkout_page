import { pageTexts } from "@/utils/constants";
import React, { useState } from "react";
import { BsTagFill } from "react-icons/bs";
import { MdDateRange, MdWatch } from "react-icons/md";
import { PiTicketFill } from "react-icons/pi";

export default function TicketSection() {
  const [appliedCoupon, setAppliedCoupon] = useState("Tickete10");
  return (
    <>
      <div className="flex flex-col border-b-2">
        {/* ticket image */}
        <div className="flex flex-col items-center justify-center">
          <img src="/canoe.jpg" alt="ticket" className="w-full h-56 rounded-xl" />
        </div>
        <h3 className="text-xl font-medium mt-5">
          Amsterdam open boat canal cruise - Live Guide - From Anne Frank House
        </h3>
        <div className="flex flex-col justify-start gap-y-3 my-5">
          <div className="flex">
            <PiTicketFill className="text-2xl" />
            <span className=" ml-5 font-medium">
              {pageTexts.ticketSection.variant}
            </span>
          </div>
          <div className="flex">
            <MdDateRange className="text-2xl" />
            <span className=" ml-5 font-medium">
              {pageTexts.ticketSection.date}
            </span>
          </div>
          <div className="flex">
            <MdWatch className="text-2xl" />
            <span className=" ml-5 font-medium">
              {pageTexts.ticketSection.time}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col  my-4">
        <h3 className="text-xl mt-5 font-medium">Tickets Overview</h3>
        <div className="border-b-2 gap-y-3 flex flex-col py-4">
          {pageTexts.ticketSection.overview.map((item, index) => (
            <div
              key={index}
              className={
                "flex justify-between " +
                (index > pageTexts.ticketSection.overview.length - 2 &&
                  "text-text_green")
              }
            >
              <p>{`${item.type} ${item.count ? `(x${item.count})` : ""}`}</p>
              <p>{`${item.price} `}</p>
            </div>
          ))}

          <div className="flex justify-between border-t-2 pt-4">
            <div className="flex text-text_green">
              <BsTagFill className="text-2xl" />
              <span className=" ml-5 font-medium underline">{ appliedCoupon ? `'${appliedCoupon}' applied` : "Have a promo code?"}</span>
            </div>
            {appliedCoupon &&
              <p className="font-medium underline" onClick={() => setAppliedCoupon("")}
            >Remove</p>}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <h3 className="text-xl mt-5 font-medium">Total</h3>
            <p className="text-md underline">
              You will pay in {pageTexts.ticketSection.currency}
            </p>
          </div>
          <span className="text-xl mt-5 font-medium">
            {pageTexts.ticketSection.total}
          </span>
        </div>
        <aside className="bg-gray-100 rounded-lg p-4 my-4">
          <h5 className="text-md font-medium">Free Cancellation</h5>
          <p className="text-sm">
            Cancel before 12 June for full refund
          </p>
        </aside>
      </div>
    </>
  );
}
