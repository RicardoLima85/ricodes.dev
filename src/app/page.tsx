import { CallToAction } from "@/components/call-to-action";
import { Experience } from "@/components/experience";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { MarqueeDemo } from "@/components/reviews";

export default function Home() {
  return (
    <div className="mb-14 space-y-20">
      <Hero />
      <Experience />
      <MarqueeDemo />
      <CallToAction />
      <Faq />
    </div>
  );
}
