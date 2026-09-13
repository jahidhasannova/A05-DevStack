import { VscStarEmpty } from "react-icons/vsc";
import type { ITechnology } from "../../types/technologyType";
import YourStack from "./YourStack";
import { Bounce, toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";

interface AvailableTechnologiesProps {
  TechnologySection: ITechnology[];
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const AvailableTechnologies = ({
  TechnologySection,
  selectedTechnologies,
  setSelectedTechnologies,
}: AvailableTechnologiesProps) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 mt-10">

      {/* Available Technologies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {TechnologySection.map((Technology: ITechnology) => {

          const isTechnologySelected = selectedTechnologies.some(
            (technology) => technology.id === Technology.id,
          );

          const handleAddTechnology = () => {

            if (isTechnologySelected) {
              toast.warning(
                `${Technology.name} is already in your stack.`,
                {
                  position: "top-center",
                  autoClose: 3000,
                  theme: "colored",
                  transition: Bounce,
                },
              );

              return;
            }

            setSelectedTechnologies([
              ...selectedTechnologies,
              Technology,
            ]);

            toast.success(
              `${Technology.name} added to stack successfully!`,
              {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
              },
            );
          };

          return (
            <div key={Technology.id}>

              <div className="card bg-base-100 w-full shadow-sm px-4 py-4">

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

                <div className="card-body px-0">

                  <h2 className="card-title">
                    {Technology.name}
                  </h2>

                  <p className="text-[#64748B]">
                    {Technology.description}
                  </p>

                </div>

                <div className="border-t border-gray-100"></div>

                <div className="flex items-center gap-2 justify-between flex-wrap">

                  <p className="border-0 bg-[#F1F5F9] px-2 py-1 rounded-md mt-5 mb-5 text-sm">
                    {Technology.category}
                  </p>

                  <p className="text-[#475569] text-sm">
                    {Technology.difficulty}
                  </p>

                  <p className="flex items-center gap-1">
                    <VscStarEmpty className="text-yellow-500" />
                    {Technology.rating}
                  </p>

                </div>

                <div className="card-actions justify-center">

                  <button
                    onClick={handleAddTechnology}
                    disabled={isTechnologySelected}
                    className={`btn h-10 w-full rounded-xl font-medium text-white ${
                      isTechnologySelected
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black hover:bg-gray-800"
                    }`}
                  >
                    {isTechnologySelected
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Your Stack */}
      <div>
        <YourStack
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>

    </div>
  );
};

export default AvailableTechnologies;