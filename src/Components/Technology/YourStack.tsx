import { IoClose } from "react-icons/io5";
import type { ITechnology } from "../../types/technologyType";
import { Bounce, toast } from "react-toastify";
import type { Dispatch, SetStateAction } from "react";

interface YourStackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: YourStackProps) => {
  const handleRemoveTechnology = (Technology: ITechnology) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== Technology.id,
    );

    setSelectedTechnologies(remainingTechnologies);

    toast.warning(`${Technology.name} removed from your stack.`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.error("All technologies have been removed from your stack.", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Your Stack</h2>

          {selectedTechnologies.length === 0 ? (
            <>
              <p className="text-sm text-gray-400">
                No technology selected yet.
              </p>

              <div className="border border-dashed border-gray-300 rounded-[10px] p-6 text-center">
                <p className="text-sm text-gray-400">Your stack is empty.</p>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-400">
                {selectedTechnologies.length}{" "}
                {selectedTechnologies.length === 1
                  ? "technology selected"
                  : "technologies selected"}
              </p>

              <div className="grid grid-cols-1 gap-3 mt-3">
                {selectedTechnologies.map((Technology) => (
                  <div
                    key={Technology.id}
                    className="flex justify-between items-center border border-gray-200 rounded-xl p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="w-10 h-10 object-contain"
                        src={Technology.icon}
                        alt={Technology.name}
                      />

                      <div>
                        <h3 className="font-semibold">{Technology.name}</h3>

                        <p className="text-sm text-gray-400">
                          {Technology.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveTechnology(Technology)}
                      className="w-9 h-9 flex items-center justify-center cursor-pointer"
                    >
                      <IoClose className="text-gray-500 text-xl hover:text-red-500" />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleRemoveAll}
                className="w-full mt-4 border border-red-300 text-red-500 font-semibold rounded-lg py-2 hover:bg-red-100 cursor-pointer"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourStack;
