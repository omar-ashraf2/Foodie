import { Box, Typography } from "@mui/material";
import { useSaladContext } from "../contexts/saladContext";

const PriceSummary: React.FC = () => {
  const { state } = useSaladContext();

  if (state.ingredients.length === 0) return null;

  return (
    <Box textAlign="right">
      <Typography variant="body1">
        السعر :{" "}
        <Typography component="span" sx={{ fontWeight: "200" }}>
          {state.totalPrice} جـ
        </Typography>
      </Typography>
    </Box>
  );
};

export default PriceSummary;
