import { use, useState } from "react";
import type { ITechnology } from "../../types/technologyType";
import AvailableTechnologies from "./AvailableTechnologies";

interface TechnologySectionProps {
  TechnologyPromise: Promise<ITechnology[]>;
}

const TechnologySection = ({ TechnologyPromise }: TechnologySectionProps) => {
  const TechnologySection = use(TechnologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  return (
    <div id="technologies" className="container mx-auto px-4">
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Explore <span className="gradient-text">Technologies</span>
        </h2>

        <p className="mt-3 text-sm text-gray-400">
          Pick technologies to build your ideal development stack.
        </p>
      </div>

      <AvailableTechnologies
        TechnologySection={TechnologySection}
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
      ></AvailableTechnologies>
    </div>
  );
};

export default TechnologySection;
