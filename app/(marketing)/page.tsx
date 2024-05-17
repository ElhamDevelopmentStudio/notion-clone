import { Button } from "@/components/ui/button";
import { Heading } from "./_components/Heading";
import { Heroes } from "./_components/Heroes";
import { Features } from "./_components/Features";
import { Footer } from "./_components/footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      <div className="ht-full flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Features />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
