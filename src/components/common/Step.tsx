import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

type StepProps = {
  step: number;
  label: string;
  completed?: boolean;
  current?: boolean;
};

const Step: React.FC<StepProps> = ({ step, label, completed, current }) => (
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
          className={`text-sm ${current ? "text-white" : "font-light"}`}
        >
          {step}
        </Typography>
      )}
    </Box>
    <Typography
      className="mx-2 text-sm font-light md:font-medium lg:font-light md:text-center lg:text-left"
      fontWeight={completed || current ? 500 : 300}
    >
      {label}
    </Typography>
  </Box>
);

export default Step;
