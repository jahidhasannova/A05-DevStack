import type { promises } from 'dns';
import { use } from 'react';
import type { ITechnology } from '../../types/technologyType';
import AvailableTechnologies from './AvailableTechnologies';

interface TechnologySectionProps {
    TechnologyPromise: promises<ITechnology[]>
}

const TechnologySection = ({ TechnologyPromise }: TechnologySectionProps) => {

    console.log(TechnologyPromise);

    const TechnologySection = use(TechnologyPromise);

    console.log(TechnologySection);

    return (
        <div className="container mx-auto ">

            {/* Text: Explore the Technologies*/}
            <div className="mb-8">

                <h2 className="text-4xl font-bold">
                    Explore the{" "}
                    <span className=" text-pink-500">
                        Technologies
                    </span>
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <AvailableTechnologies TechnologySection={TechnologySection}></AvailableTechnologies>
        </div>
    );
}

export default TechnologySection;