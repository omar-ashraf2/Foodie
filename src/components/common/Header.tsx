import { ArrowForward } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <Box className="flex items-center justify-between bg-[#F9F9F9] py-2 px-8 border-b">
      {/* Back Button */}
      <IconButton className="flex gap-2">
        <ArrowForward />
        <Typography className="">رجوع</Typography>
      </IconButton>

      {/* Order Steps */}
      <Box className="flex shrink-0 items-center space-x-2">
        <Typography className="text-sm text-gray-400">نوع الطلب</Typography>
        <Typography className="text-orange-500 font-bold">1</Typography>
        <span className="text-gray-300">—</span>

        <Typography className="text-sm text-gray-400">مكونات الطلب</Typography>
        <Typography className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
          2
        </Typography>
        <span className="text-gray-300">—</span>

        <Typography className="text-sm text-gray-400">عنوان التوصيل</Typography>
        <Typography className="bg-gray-300 text-gray-500 px-2 py-1 rounded-full text-sm">
          3
        </Typography>
        <span className="text-gray-300">—</span>

        <Typography className="text-sm text-gray-400">الدفع</Typography>
        <Typography className="bg-gray-300 text-gray-500 px-2 py-1 rounded-full text-sm">
          4
        </Typography>
      </Box>

      {/* Next Button */}
      <Button variant="contained" color="warning" className="text-white">
        التالي
      </Button>
    </Box>
  );
};

export default Header;
