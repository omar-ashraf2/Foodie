import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useSaladContext } from "../contexts/SaladContext";

const ReviewPopup: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { state } = useSaladContext();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Review Your Salad</DialogTitle>
      <DialogContent>
        {state.ingredients.map((ingredient) => (
          <div key={ingredient.id}>{ingredient.name}</div>
        ))}
        <div>Total Price: {state.totalPrice} EGP</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button color="primary">Checkout</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewPopup;
