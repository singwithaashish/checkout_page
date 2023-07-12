import { Inter } from "next/font/google";
import TicketSection from "@/components/Ticket/TicketSection";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DetailFormSection from "@/components/DetailFrom/DetailFormSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`md:px-10 py-10 text-text_primary  ${inter.className}`}
    >
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 order-1 px-5 ">
          <h1 className="text-5xl font-medium">Confirm and pay</h1>
        </div>
        <section className="flex flex-col border-b-2 px-5 order-2 md:col-start-3 md:row-span-2">
          <TicketSection />
        </section>
        <DetailFormSection />
      </div>
      kasdj

      {/* <div className="flex flex-col md:flex-row justify-between items-center border-b-2 py-5">
        <h3 className="text-2xl font-medium mt-5">Frequently asked question</h3>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h4 className="text-xl font-medium mt-5">
              Are my tickets transferable?
            </h4>
            <AiOutlineMinus className="text-2xl" />
          </div>
          <p className="text-md">
            Yes, you can transfer your tickets to someone else. Please contact
            us at least 24 hours before the tour starts to transfer your ticket.
          </p>
        </div>
      </div> */}
    </main>
  );
}
