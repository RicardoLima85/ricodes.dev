import { Animation } from "./animation";
import { ExperienceList } from "./card-experience";

import { TracingBeam } from "./ui/tracing-beam";

export function Experience() {
  return (
    <div className="container flex flex-col gap-4 scroll-m-36" id="experience">
      <Animation once direction="left">
        <h1 className="text-2xl font-semibold text-primary">Experiências</h1>
      </Animation>
      <TracingBeam className="px-6">
        <ExperienceList />
      </TracingBeam>
    </div>
  );
}
