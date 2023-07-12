import { Inter } from "next/font/google";
import TicketSection from "@/components/Ticket/TicketSection";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DetailFormSection from "@/components/DetailFrom/DetailFormSection";
import { pageTexts } from "@/utils/constants";
import QuestionAnswer from "@/components/FAQ/QuestionAnswer";
import FaqSection from "@/components/FAQ/FaqSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`md:px-10 py-10 text-text_primary  ${inter.className}`}>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 order-1 px-5 ">
          <h1 className="text-5xl font-medium">Confirm and pay</h1>
        </div>
        <section className="flex flex-col border-b-2 px-5 order-2 md:col-start-3 md:row-span-2">
          <TicketSection />
        </section>
        <DetailFormSection />
      </div>
      <section className="flex gap-x-10 justify-between items-start p-5 pt-8 md:flex-row-reverse flex-col">
        <FaqSection />
      </section>
      
    </main>
  );
}
