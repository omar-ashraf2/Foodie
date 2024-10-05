import React, { useEffect } from "react";
import SaladImage from "../assets/salad.png";
import {
  baseIngredients,
  ingredients,
  protein,
  sauce,
} from "../constants/ingredients";
import { useSaladContext } from "../contexts/SaladContext";
import { Ingredient } from "../types/Ingredient";
import { prefetchImages } from "../utils/prefetchImages";

const allIngredients: Ingredient[] = [
  ...baseIngredients,
  ...ingredients,
  ...protein,
  ...sauce,
];

const SaladVisualizer: React.FC = () => {
  const { state } = useSaladContext();

  useEffect(() => {
    const imageUrls = allIngredients.map((ingredient) => ingredient.image);
    prefetchImages(imageUrls);
  }, []);

  const getIngredientDetails = (id: number) =>
    allIngredients.find((item) => item.id === id);

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

      <div className="grid grid-cols-3 gap-4 mt-8">
        {state.ingredients.map((ingredient) => {
          const ingredientDetails = getIngredientDetails(ingredient.id);
          return ingredientDetails ? (
            <div
              key={ingredientDetails.id}
              className="flex flex-col items-center"
            >
              <img
                src={ingredientDetails.image}
                alt={ingredientDetails.name}
                className="w-16 h-16 object-contain mb-1"
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SaladVisualizer;
