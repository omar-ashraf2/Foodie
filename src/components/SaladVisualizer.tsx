import React from "react";
import { useSaladContext } from "../contexts/SaladContext";

const SaladVisualizer: React.FC = () => {
  const { state } = useSaladContext();

  return (
    <div>
      <h3 className="text-center">Your Salad</h3>
      <div className="flex flex-wrap justify-center">
        {state.ingredients.map(
          (ingredient: {
            id: React.Key | null | undefined;
            image: unknown;
            name: string | undefined;
          }) => (
            <img
              key={ingredient.id}
              src={`path_to_images/${ingredient.image}`}
              alt={ingredient.name}
              className="w-16 h-16 m-2"
            />
          )
        )}
      </div>
    </div>
  );
};

export default SaladVisualizer;
