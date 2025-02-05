import { questions } from "@/constants/faq";
import { Animation } from "./animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Faq() {
  return (
    <div className="container flex flex-col gap-4 scroll-m-32" id="faq">
      <Animation once direction="left">
        <h1 className="text-2xl font-semibold text-primary">FAQ</h1>
      </Animation>
      <Animation once direction="left" delay={0.7}>
        <p className="text-lg">
          Aqui estão algumas perguntas frequentes sobre nosso serviço.
        </p>
      </Animation>
      <Animation once direction="down">
        <Accordion type="single" collapsible>
          {questions.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger className="md:text-xl text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Animation>
    </div>
  );
}
