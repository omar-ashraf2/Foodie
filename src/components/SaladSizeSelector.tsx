import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSaladContext } from "../contexts/SaladContext";

type SaladSizeSelectorProps = {
  onSizeSelect: (size: "small" | "medium" | "large" | null) => void;
};

const SaladSizeSelector: React.FC<SaladSizeSelectorProps> = ({
  onSizeSelect,
}) => {
  const { state, dispatch } = useSaladContext();

  const handleChange = (event: SelectChangeEvent) => {
    const newSize = event.target.value as "small" | "medium" | "large" | null;
    dispatch({
      type: "SET_SIZE",
      size: newSize,
    });
    onSizeSelect(newSize);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>حجم السلطة</InputLabel>
      <Select value={state.size || ""} onChange={handleChange}>
        <MenuItem value="small">سلطة صغيرة (S)</MenuItem>
        <MenuItem value="medium">سلطة وسط (M)</MenuItem>
        <MenuItem value="large">سلطة كبيرة (L)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SaladSizeSelector;
