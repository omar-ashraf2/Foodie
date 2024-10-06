import { SxProps } from "@mui/material";

const dialogPaperStyles: SxProps = {
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "18px",
  "@media (max-width: 600px)": {
    minWidth: "100%",
    margin: "8px",
  },
};

const titleStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "0",
  marginBottom: "16px",
};

const closeButtonStyles: SxProps = {
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#31354A",
};

const orderInfoBoxStyles: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  textAlign: { xs: "center", sm: "left" },
  gap: 5,
};

const ingredientsGridStyles: SxProps = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(2, 1fr)",
    sm: "repeat(3, 1fr)",
  },
  gap: { xs: "8px", sm: "16px" },
  padding: "16px",
  borderRadius: "4px",
  backgroundColor: "#F9F9F9",
  height: "100%",
};

const dialogActionsStyles: SxProps = {
  marginTop: "16px",
  padding: 0,
};

const continueButtonStyles: SxProps = {
  padding: "14px 32px",
  fontSize: "16px",
  borderRadius: "8px",
  width: { xs: "100%", sm: "auto" },
};

export {
  closeButtonStyles,
  continueButtonStyles,
  dialogActionsStyles,
  dialogPaperStyles,
  ingredientsGridStyles,
  orderInfoBoxStyles,
  titleStyles,
};
