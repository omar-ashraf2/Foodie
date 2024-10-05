import { SxProps } from "@mui/material";

export const AccordionStyle: SxProps = {
  mb: 2,
  borderRadius: "4px",
  boxShadow: "1px 1px 1px 0px #00000033",
  padding: "4px",
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {
    minHeight: "48px",
    px: 2,
  },
  "& .MuiAccordionDetails-root": {
    px: 3,
    pt: 2,
  },
};

export const AccordionSummaryStyle: SxProps = {
  backgroundColor: "#FFF",
  borderRadius: "4px",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const SelectStyle: SxProps = {
  backgroundColor: "#F9F9F9",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E0E0",
    },
    "&:hover fieldset": {
      borderColor: "#EE6400",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EE6400",
    },
  },
  "& .MuiSelect-icon": {
    right: "unset",
    left: "10px",
    color: "#333",
  },
};

export const MenuItemStyle: SxProps = {
  "&:hover": {
    backgroundColor: "#FFE2CD",
  },
  "&.Mui-selected": {
    backgroundColor: "#FFE2CD",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#FFD8BA",
  },
};
