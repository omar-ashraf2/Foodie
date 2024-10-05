import { ArrowForward, CheckCircle } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSaladContext } from "../../contexts/SaladContext";
import PriceSummary from "../PriceSummary";
import Toast from "./Toast";

const Header: React.FC = () => {
  const { state, dispatch } = useSaladContext();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleCloseToast = () => {
    setToastOpen(false);
    setToastMessage(null);
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    showToast("تم الرجوع إلى الحالة الابتدائية");
  };

  const isFieldMissing = (field: string | null) => !field || field.length === 0;

  const handleNext = () => {
    const { size, ingredients } = state;

    if (isFieldMissing(size))
      return showToast("تأكد من ادخال جميع البيانات المطلوبة");

    const requiredIngredientsCount =
      size === "large" ? 8 : size === "medium" ? 6 : 5;

    const categories = [
      { category: "base", min: 1 },
      { category: "ingredient", min: requiredIngredientsCount },
      { category: "protein", min: 1 },
      { category: "sauce", min: 1 },
    ];

    for (const { category, min } of categories) {
      const selectedCount = ingredients.filter(
        (item) => item.category === category
      ).length;
      if (selectedCount < min)
        return showToast("تأكد من ادخال جميع البيانات المطلوبة");
    }
  };

  return (
    <Box
      sx={{ boxShadow: "0px 2px 2px 0px #00000026" }}
      className="flex items-center justify-between bg-[##F9F9F9] py-2 px-8 border-b"
    >
      <Button color="inherit" className="flex gap-2" onClick={handleReset}>
        <ArrowForward />
        <Typography className="text-base">رجوع</Typography>
      </Button>

      <Box className="flex items-center justify-center gap-4">
        {[
          { step: 1, label: "نوع الطلب", completed: true },
          { step: 2, label: "مكونات الطلب", current: true },
          { step: 3, label: "عنوان التوصيل" },
          { step: 4, label: "الدفع" },
        ].map(({ step, label, completed, current }, index) => (
          <React.Fragment key={step}>
            {index > 0 && <hr className="bg-gray-400 h-[2px] w-12" />}
            <Box className="flex items-center gap-2">
              <Box
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  completed
                    ? "!text-[32px] text-orange-500"
                    : current
                    ? "bg-orange-500 border-2 border-orange-400"
                    : "bg-orange-100"
                }`}
              >
                {completed ? (
                  <CheckCircle className="!text-[32px] " />
                ) : (
                  <Typography
                    className={`text-sm ${
                      current ? "text-white" : "font-light"
                    }`}
                  >
                    {step}
                  </Typography>
                )}
              </Box>
              <Typography
                className="mx-2 text-sm"
                fontWeight={completed || current ? 500 : 300}
              >
                {label}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>

      <Box className="flex flex-row gap-8 items-center">
        <PriceSummary />
        <Button
          variant="contained"
          color="warning"
          size="medium"
          className="w-28"
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
    </Box>
  );
};

export default Header;
