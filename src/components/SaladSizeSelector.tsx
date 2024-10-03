import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useSaladContext } from "../contexts/SaladContext";

const SaladSizeSelector: React.FC = () => {
  const { state, dispatch } = useSaladContext();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({
      type: "SET_SIZE",
      size: event.target.value as "small" | "medium" | "large",
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Salad Size</InputLabel>
      <Select value={state.size || ""} onChange={handleChange}>
        <MenuItem value="small">Small</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="large">Large</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SaladSizeSelector;
