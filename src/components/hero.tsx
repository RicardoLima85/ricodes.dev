import Image from "next/image";
import { Animation } from "./animation";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Olá,",
    className: "text-2xl md:text-4xl lg:text-5xl"
  },
  {
    text: "eu",
    className: "text-2xl md:text-4xl lg:text-5xl"
  },
  {
    text: "sou",
    className: "text-2xl md:text-4xl lg:text-5xl"
  },
  {
    text: "Ricardo",
    className: "text-2xl md:text-4xl lg:text-5xl text-primary font-bold"
  },
  {
    text: "Lima!",
    className: "text-2xl md:text-4xl lg:text-5xl text-primary font-bold"
  },
];

export function Hero() {
  return (
    <div className="w-full container mt-6 md:mt-10 scroll-m-28" id="about">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
        <div className="space-y-4 md:space-y-6 w-full md:max-w-[60%]">
          <Animation once direction="left" duration={0.5} delay={0.3}>
            <div className="w-full text-left mb-4 md:mb-8">
              <TypewriterEffectSmooth words={words} />
            </div>
          </Animation>

          <Animation once direction="left" duration={0.5} delay={0.4}>
            <p className="text-base md:text-lg text-muted-foreground">
              Sou um entusiasta apaixonado por programação, com experiência em
              empresas nacionais e internacionais. Formado em Análise e
              Desenvolvimento de Sistemas, atualmente curso bacharelado em
              Sistemas de Informação, sempre buscando aprender e inovar. Gosto
              de explorar soluções criativas para desafios e compartilhar
              conhecimento para ajudar outros a crescerem na área.
            </p>
          </Animation>

          <Animation once direction="left" duration={0.5} delay={0.5}>
            <p className="text-base md:text-lg text-muted-foreground">
              Seja você iniciante ou profissional em busca de novos insights,
              estou aqui para compartilhar conhecimento e transformar desafios
              em realizações. Vamos juntos alcançar seus objetivos no mundo da
              programação!
            </p>
          </Animation>
        </div>

        <div className="w-full flex justify-center md:block">
          <Animation once direction="right" duration={0.5} delay={0.5}>
            <CardContainer className="w-[280px] md:w-[320px] lg:w-[380px] h-fit bg-muted rounded-md p-2 md:p-3">
              <CardBody className="h-fit">
                <CardItem translateZ={80}>
                  <Image
                    src="/img/Ricardo.jpg"
                    alt="ricardo"
                    width={1920}
                    height={1080}
                    quality={100}
                    className="w-full rounded-md"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </Animation>
        </div>
      </div>
    </div>
  );
}
