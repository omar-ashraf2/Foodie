import React from "react";
import { useSaladContext } from "../contexts/SaladContext";
import SaladImage from "../assets/salad.png";

const SaladVisualizer: React.FC = () => {
  const { state } = useSaladContext();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {state.ingredients.length === 0 && (
        <>
          <div className="relative w-48 h-44 mb-2">
            <img
              src={SaladImage}
              alt="Salad Bowl"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-center text-2xl">
            ابدأ بتحضير طبق <br /> السلطة الخاص بك!
          </h3>
        </>
      )}

      <div className="flex flex-wrap justify-center">
        {state.ingredients.map((ingredient) => (
          <img
            key={ingredient.id}
            src={`path_to_images/${ingredient.image}`}
            alt={ingredient.name}
            className="w-16 h-16 m-2"
          />
        ))}
      </div>
    </div>
  );
};

export default SaladVisualizer;
