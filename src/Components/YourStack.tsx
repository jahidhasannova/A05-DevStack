import React from 'react';
import type { ITechnology } from '../types/technologyType';

interface YourStackProps {
    TechnologySection: ITechnology[]
}

const YourStack = ({ TechnologySection }: YourStackProps) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">

                <div className="card-body">
                    <h2 className="card-title">Your Stack</h2>
                    <p className='text-sm text-gray-400'>No technologies selected yet.</p>

                    <div className="border border-dashed border-gray-300 rounded-[10px] p-6 text-center">
                        <p className="text-sm text-gray-400">Your stack is empty.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default YourStack;