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
  fontSize: "14px",
  fontWeight: 400,
  paddingBlock: "8px",
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

export const CheckboxStyle: SxProps = {
  "& .MuiSvgIcon-root": {
    borderRadius: "2px",
    width: "20px",
    height: "20px",
  },
  "& .MuiSvgIcon-root path": {
    color: "#F98D37",
  },
  "&.Mui-checked .MuiSvgIcon-root": {
    color: "#FBB26F",
  },
  "&.Mui-disabled .MuiSvgIcon-root path": {
    color: "#b0b0b0",
  },
  "&.Mui-disabled .MuiSvgIcon-root": {
    color: "#b0b0b0",
    cursor: "not-allowed",
  },
  "&.Mui-disabled + .MuiTypography-root": {
    color: "#b0b0b0",
  },
};
