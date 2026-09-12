import type { promises } from 'dns';
import { use } from 'react';
import type { ITechnology } from '../../types/technologyType';

interface TechnologySectionProps{
    TechnologyPromise: promises<ITechnology[]>
}

const TechnologySection = ({ TechnologyPromise }:TechnologySectionProps) => {

    console.log(TechnologyPromise);

    const TechnologySection = use(TechnologyPromise);

    console.log(TechnologySection);

    return (
        <div>
            
        </div>
    );
}

export default TechnologySection;