import { SxProps } from "@mui/material";

const dialogPaperStyles: SxProps = {
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: "18px",
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
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  gap: 5,
};

const dialogContentStyles: SxProps = {
  padding: 0,
};

const ingredientsGridStyles: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 2,
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
};

export {
  dialogPaperStyles,
  titleStyles,
  closeButtonStyles,
  orderInfoBoxStyles,
  dialogContentStyles,
  ingredientsGridStyles,
  dialogActionsStyles,
  continueButtonStyles,
};
