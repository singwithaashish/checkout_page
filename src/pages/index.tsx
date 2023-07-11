import { Inter } from "next/font/google";
import TicketSection from "@/components/Ticket/TicketSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex flex-col text-text_primary justify-start ${inter.className}`}
    >
      <div className="md:grid md:grid-cols-2 md:grid-rows-2">
        <div className="px-5 py-10">
          <h1 className="text-4xl font-bold">Confirm and pay</h1>
        </div>

        <TicketSection />
      </div>
    </main>
  );
}
