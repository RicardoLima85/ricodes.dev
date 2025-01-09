import { Hero } from "@/components/hero";
import { MarqueeDemo } from "@/components/reviews";

export default function Home() {
  return (
    <div className="mb-14 space-y-20 h-[5000px]">
      <Hero />
      <MarqueeDemo />
    </div>
  );
}
