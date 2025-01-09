import Image from "next/image";
import { Animation } from "./animation";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Hero() {
  return (
    <div className="w-full container mt-10 scroll-m-28" id="about">
      <div className="flex gap-12">
        <div className="space-y-2">
          <Animation once direction="left" duration={0.5} delay={0.3}>
            <h1 className="text-3xl text-pretty font-bold">
              Olá, eu sou <span className="text-primary">Ricardo Lima</span>!
            </h1>
          </Animation>

          <Animation once direction="left" duration={0.5} delay={0.4}>
            <p className="text-lg text-muted-foreground">
              Sou um entusiasta apaixonado por programação, com experiência em
              empresas nacionais e internacionais. Formado em Análise e
              Desenvolvimento de Sistemas, atualmente curso bacharelado em
              Sistemas de Informação, sempre buscando aprender e inovar. Gosto
              de explorar soluções criativas para desafios e compartilhar
              conhecimento para ajudar outros a crescerem na área.
            </p>
          </Animation>

          <Animation once direction="left" duration={0.5} delay={0.5}>
            <p className="text-lg text-muted-foreground">
              Seja você iniciante ou profissional em busca de novos insights,
              estou aqui para compartilhar conhecimento e transformar desafios
              em realizações. Vamos juntos alcançar seus objetivos no mundo da
              programação!
            </p>
          </Animation>
        </div>
        <Animation once direction="right" duration={0.5} delay={0.5}>
          <CardContainer className="w-60 h-fit bg-muted rounded-md p-3">
            <CardBody className="h-fit">
              <CardItem translateZ={80}>
                <Image
                  src="/img/Ricardo.jpg"
                  alt="ricardo"
                  width={1920}
                  height={1080}
                  quality={100}
                  className="w-80 rounded-md"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Animation>
      </div>
    </div>
  );
}
