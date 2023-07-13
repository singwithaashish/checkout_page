import { Inter } from "next/font/google";
import TicketSection from "@/components/Ticket/TicketSection";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DetailFormSection from "@/components/DetailFrom/DetailFormSection";
import { pageTexts } from "@/utils/constants";
import QuestionAnswer from "@/components/FAQ/QuestionAnswer";
import FaqSection from "@/components/FAQ/FaqSection";
import PromiseSection from "@/components/TicketePromise/PromiseSection";
import FooterSection from "@/components/Footer/FooterSection";
import { allSvgs } from "@/utils/SVGs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` text-text_primary  ${inter.className}`}>
      <header className="flex w-full  flex-col md:flex-row justify-between items-center md:px-20 px-5 py-10">
        <div className=" hidden md:flex justify-between w-full items-center">
          <h2 className="text-2xl font-medium text-black">tickete</h2>

          <div className="flex gap-x-2 items-center">
            {allSvgs.Question}
            <span className="text-xl ">Help</span>
          </div>
        </div>
        <div className="flex md:hidden justify-between w-full items-center">
          {allSvgs.CaretCircleLeft}
        </div>
      </header>
      <section className="grid md:grid-cols-3 gap-4 border-b-2 md:mx-20 py-5">
        <div className="md:col-span-2 order-1  md:px-0 px-5 ">
          <h1 className="md:text-5xl text-4xl font-medium">Confirm and pay</h1>
        </div>
        <div className="flex flex-col md:px-0 px-5 border-b-2 md:border-b-0 md:border-l-2 md:pl-5 order-2 md:col-start-3 md:row-span-2">
          <TicketSection />
        </div>
        <form className="md:col-span-2 md:px-0 px-5 order-3 py-1">
          <DetailFormSection />
        </form>
      </section>
      <section className="grid grid-cols-3 gap-x-10 border-b-2 md:mx-20 py-10 justify-between items-start m-5 md:px-0 md:pb-0 pt-8 md:flex-row flex-col">
        <FaqSection />
      </section>
      <section className="flex flex-col mb-8 md:px-20 px-5 py-10">
        <PromiseSection />
      </section>
      <footer className="flex flex-col p-10 items-start bg-black py-10">
        <FooterSection />
      </footer>
    </main>
  );
}
