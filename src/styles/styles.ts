import { SxProps } from "@mui/material";

export const AccordionStyle: SxProps = {
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
    pt: 0,
  },
};

export const AccordionSummaryStyle: SxProps = {
  borderRadius: "4px",
  "& .MuiAccordionSummary-content": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const SubtitleStyle: SxProps = {
  fontWeight: 200,
  fontSize: "14px",
  mt: 0,
};

export const SelectStyle: SxProps = {
  borderRadius: "4px",
  height: "48px",
  boxShadow: "1px 1px 1px 0px #00000033",
  "& .MuiOutlinedInput-root": {
    height: "48px",
  },
  "& .MuiSelect-icon": {
    right: "unset",
    left: "16px",
    color: "#333",
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
    fontWeight: 300,
    paddingRight: "16px",
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
