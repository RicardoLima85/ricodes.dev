import Image from "next/image";
import { Animation } from "./animation";
import { CalModal } from "./cal-modal";
import PulsatingButton from "./ui/pulsating-button";

export function CallToAction() {
  return (
    <div className="container flex items-center justify-center gap-12">
      <Animation
        delay={0.4}
        duration={0.5}
        className="size-40"
        once
        direction="left"
      >
        <Image
          src="/img/ricardo-macbook.png"
          alt="ricardo"
          width={1920}
          height={1080}
          className="size-40 rounded-full"
        />
      </Animation>
      <Animation
        duration={0.5}
        direction="right"
        once
        className="flex flex-col max-w-lg gap-4"
      >
        <h1 className="text-2xl font-semibold text-primary">Titulo Brabo</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          molestias sapiente, sequi libero alias, ex culpa corporis voluptate ea
          vero.
        </p>
        <CalModal>
          <PulsatingButton
            data-cal-link="ricodes/mentoria60min"
            data-cal-config='{"layout":"month_view"}'
            pulseColor="#29a2b9"
          >
            Agendar Mentoria
          </PulsatingButton>
        </CalModal>
      </Animation>
    </div>
  );
}
