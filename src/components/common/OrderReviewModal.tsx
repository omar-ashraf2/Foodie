import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Ingredient } from "../../types/Ingredient";
import { TSize } from "../../types/size";

type OrderReviewModalProps = {
  open: boolean;
  onClose: () => void;
  size: TSize | null;
  ingredients: Ingredient[];
  totalPrice: number;
};

const OrderReviewModal: React.FC<OrderReviewModalProps> = ({
  open,
  onClose,
  size,
  ingredients,
  totalPrice,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "8px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          minWidth: "640px",
          minHeight: "auto",
          padding: "18px",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "0",
          marginBottom: "16px",
        }}
      >
        <Typography
          textAlign="center"
          flex={1}
          fontSize="24px"
          fontWeight="bold"
        >
          مراجعة الطلب
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "0",
            color: "#31354A",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <CloseIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </DialogTitle>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="16px"
        gap={5}
      >
        <Typography fontSize="14px">
          سلطة{" "}
          {size === "large"
            ? "كبيرة ( L )"
            : size === "medium"
            ? "وسط ( M )"
            : "صغيرة ( S )"}
        </Typography>
        <Typography fontSize="14px">السعر : {totalPrice} جـ</Typography>
      </Box>

      <DialogContent sx={{ padding: "0" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap={2}
            sx={{
              padding: "16px",
              borderRadius: "4px",
              backgroundColor: "#F9F9F9",
              height: "100%",
            }}
          >
            {ingredients.map((ingredient) => (
              <img
                key={ingredient.id}
                src={ingredient.image}
                alt={ingredient.name}
                width={156}
                height={120}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ marginTop: "16px", padding: "0" }}>
        <Button
          variant="contained"
          color="warning"
          onClick={onClose}
          sx={{
            padding: "14px 32px",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        >
          متابعة
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderReviewModal;
