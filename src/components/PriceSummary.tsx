import React from "react";
import { useSaladContext } from "../contexts/SaladContext";

const PriceSummary: React.FC = () => {
  const { state } = useSaladContext();

  return (
    <div className="text-right">
      <h4>Total Price: {state.totalPrice} EGP</h4>
    </div>
  );
};

export default PriceSummary;
