import { experiences } from "@/constants/experiences";
import { cn } from "@/lib/utils";
import { formatRange } from "@/utils/date";
import { Animation } from "./animation";
import { Card } from "./ui/card";

export function ExperienceList(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("flex flex-col gap-4", props.className)}>
      {experiences.map((experience) => (
        <Animation
          margin="0px"
          once
          key={experience.company}
          delay={0.2}
          direction="up"
        >
          <Card.Root className="w-full overflow-hidden">
            <Card.Header>
              <Animation margin="0px" direction="left">
                <Card.Title>
                  {experience.title} · {experience.company}
                </Card.Title>
              </Animation>
              <Animation margin="0px" delay={0.4} direction="left">
                <Card.Description>
                  {formatRange(experience.startedAt, experience.endedAt)}
                </Card.Description>
              </Animation>
            </Card.Header>

            <Card.Content className="flex flex-col gap-4">
              <Animation margin="0px" delay={0.5} direction="left">
                <p className="leading-7">{experience.description}</p>
              </Animation>
            </Card.Content>
          </Card.Root>
        </Animation>
      ))}
    </div>
  );
}
