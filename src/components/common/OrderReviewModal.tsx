import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import {
  closeButtonStyles,
  continueButtonStyles,
  dialogActionsStyles,
  dialogPaperStyles,
  ingredientsGridStyles,
  orderInfoBoxStyles,
  titleStyles,
} from "../../styles/orderReviewModalStyles";
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
        sx: dialogPaperStyles,
      }}
    >
      <DialogTitle sx={titleStyles}>
        <Typography
          textAlign="center"
          flex={1}
          fontSize={{ xs: "24px", sm: "18px" }}
          fontWeight="bold"
        >
          مراجعة الطلب
        </Typography>
        <IconButton onClick={onClose} sx={closeButtonStyles}>
          <CloseIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </DialogTitle>

      <Box sx={orderInfoBoxStyles}>
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

      <DialogContent
        sx={{
          padding: { xs: "0", sm: "16px" },
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box sx={ingredientsGridStyles}>
            {ingredients.map((ingredient) => (
              <img
                key={ingredient.id}
                src={ingredient.image}
                alt={ingredient.name}
                width={156}
                height={120}
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={dialogActionsStyles}>
        <Button
          variant="contained"
          color="warning"
          onClick={onClose}
          sx={continueButtonStyles}
        >
          متابعة
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderReviewModal;
