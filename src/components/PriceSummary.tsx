import { useSaladContext } from "../contexts/SaladContext";

const PriceSummary: React.FC = () => {
  const { state } = useSaladContext();

  return (
    <div
      className={`text-right ${state.ingredients.length === 0 ? "hidden" : ""}`}
    >
      <p>
        السعر : <span className="font-thin">{state.totalPrice} جـ</span>
      </p>
    </div>
  );
};

export default PriceSummary;
