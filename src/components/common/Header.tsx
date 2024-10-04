import { ArrowForward, CheckCircle } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import PriceSummary from "../PriceSummary";

const Header: FC = () => {
  return (
    <Box className="flex items-center justify-between bg-gray-50 py-2 px-8 border-b-2">
      {/* Back Button */}
      <Button color="inherit">
        <ArrowForward />
        <Typography className="text-base">رجوع</Typography>
      </Button>

      {/* Order Steps */}
      <Box className="flex items-center justify-center gap-4">
        <Box className="flex items-center gap-2">
          <CheckCircle className="!text-[32px] " color="warning" />
          <Typography className="mx-2 text-sm">نوع الطلب</Typography>
        </Box>

        <hr className="bg-gray-400 h-[2px] w-12" />

        <Box className="flex items-center gap-2">
          <Box className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 border-2 border-orange-400">
            <Typography className="text-sm text-white">2</Typography>
          </Box>
          <Typography className="mx-2 text-sm">مكونات الطلب</Typography>
        </Box>

        <hr className="bg-gray-400 h-[2px] w-12" />

        <Box className="flex items-center gap-2">
          <Box className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-100">
            <span className="text-sm font-light">3</span>
          </Box>
          <Typography fontWeight={300} className="mx-2 text-sm">
            عنوان التوصيل
          </Typography>
        </Box>

        <hr className="bg-gray-400 h-[2px] w-12" />

        <Box className="flex items-center gap-2">
          <Box className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-100">
            <span className="text-sm font-light ">4</span>
          </Box>
          <Typography fontWeight={300} className="mx-2 text-sm">
            الدفع
          </Typography>
        </Box>
      </Box>

      {/* Price and Next Button */}
      <Box className="flex flex-row gap-8 items-center">
        <PriceSummary />
        <Button
          variant="contained"
          color="warning"
          size="medium"
          className="w-28"
        >
          التالي
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
