import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSaladContext } from "../../contexts/saladContext";
import { validateSaladSelection } from "../../utils/validationUtils";
import PriceSummary from "../PriceSummary";
import OrderReviewModal from "./OrderReviewModal";
import Step from "./Step";
import Toast from "./Toast";

const Header: React.FC = () => {
  const { state, dispatch } = useSaladContext();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleCloseToast = () => {
    setToastOpen(false);
    setToastMessage(null);
  };

  const handleNext = () => {
    const errors = validateSaladSelection(state.size, state.ingredients);

    dispatch({ type: "SET_VALIDATION_ERRORS", errors });

    if (Object.values(errors).some((error) => error)) {
      showToast("تأكد من ادخال جميع البيانات المطلوبة");
      return;
    }

    setIsReviewModalOpen(true);
  };

  return (
    <Box
      sx={{ boxShadow: "0px 2px 2px 0px #00000026" }}
      className="flex flex-col md:flex-row items-center justify-between bg-[##F9F9F9] py-4 md:py-2 px-4 md:px-8 border-b"
    >
      <Button
        color="inherit"
        className="flex gap-2 mb-2 md:mb-0"
        onClick={() => dispatch({ type: "RESET" })}
      >
        <ArrowForward />
        <Typography className="text-base">رجوع</Typography>
      </Button>

      <Box className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4 md:mb-0">
        {[
          { step: 1, label: "نوع الطلب", completed: true },
          { step: 2, label: "مكونات الطلب", current: true },
          { step: 3, label: "عنوان التوصيل" },
          { step: 4, label: "الدفع" },
        ].map(({ step, label, completed, current }, index) => (
          <React.Fragment key={step}>
            {index > 0 && <hr className="bg-gray-400 h-[2px] w-6 md:w-12" />}
            <Step
              step={step}
              label={label}
              completed={completed}
              current={current}
            />
          </React.Fragment>
        ))}
      </Box>

      <Box className="flex flex-col md:flex-row gap-2 md:gap-8 items-center w-full md:w-auto">
        <PriceSummary />
        <Button
          variant="contained"
          color="warning"
          size="medium"
          className="w-full md:w-28"
          onClick={handleNext}
        >
          التالي
        </Button>
      </Box>

      <Toast
        open={toastOpen}
        message={toastMessage || ""}
        onClose={handleCloseToast}
      />

      <OrderReviewModal
        open={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        size={state.size}
        ingredients={state.ingredients}
        totalPrice={state.totalPrice}
      />
    </Box>
  );
};

export default Header;
