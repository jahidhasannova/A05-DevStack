import React from 'react';
import type { ITechnology } from '../../types/technologyType';
import { VscStarEmpty } from 'react-icons/vsc';

const AvailableTechnologies = ({ TechnologySection }) => {
    console.log(TechnologySection, 'From AvailableTechnologies')
    return (
        <div className=" grid grid-cols-3 gap-4 mt-10 ">

            {/* Map  */}

            {
                TechnologySection.map((Technology: ITechnology) => {
                    return <div className='grid grid-cols-3 gap-4 '>

                        <div className="card bg-base-100 w-96 shadow-sm container mx-auto px-4 py-4">
                            <div className="flex items-center justify-between">
                                <figure>
                                    <img
                                        className="w-12 h-12 object-contain"
                                        src={Technology.icon}
                                        alt={Technology.name}
                                    />
                                </figure>

                                <p
                                    className="rounded-full px-3 py-1 text-sm font-medium"
                                    style={{
                                        color: Technology.color,
                                        backgroundColor: Technology.lightColor,
                                    }}
                                >
                                    {Technology.badge}
                                </p>
                            </div>


                            <div className="card-body -ml-4">
                                <h2 className="card-title ">{Technology.name}</h2>
                                <p className='text-[#64748B]'>{Technology.description}</p>
                            </div>

                            <div className="border-t border-gray-100"></div>

                            <div className="flex items-center gap-4 justify-between">
                                <p className='border-0 bg-[#F1F5F9] p-1 rounded-md mt-5 mb-5'>{Technology.category}</p>
                                <p className='text-[#475569]'>{Technology.difficulty}</p>
                                <p className="flex items-center gap-1">
                                    <VscStarEmpty className="text-yellow-500" />
                                    {Technology.rating}
                                </p>
                            </div>

                            <div className="card-actions justify-center">
                                <button
                                    className="btn h-10 w-70  rounded-xl bg-black font-medium  text-white "
                                >
                                    Add to Stack
                                </button>
                            </div>

                        </div>
                    </div>
                })
            }


        </div>
    );
}

export default AvailableTechnologies;