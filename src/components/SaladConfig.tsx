import React from "react";
import SaladVisualizer from "./SaladVisualizer";
import SaladSizeSelector from "./SaladSizeSelector";
import IngredientCategory from "./IngredientCategory";
import PriceSummary from "./PriceSummary";

const SaladConfig: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {/* Left Side - Visualizer */}
      <div className="w-1/2 border rounded p-4">
        <SaladVisualizer />
      </div>

      {/* Right Side - Configuration */}
      <div className="w-1/2 space-y-4">
        <SaladSizeSelector />
        <IngredientCategory title="Base Ingredients" />
        <IngredientCategory title="Ingredients" />
        <IngredientCategory title="Protein" />
        <IngredientCategory title="Sauce" />
        <PriceSummary />
      </div>
    </div>
  );
};

export default SaladConfig;
