import { WarningAmber } from "@mui/icons-material";
import { Alert, Snackbar, Typography } from "@mui/material";

type ToastProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ open, message, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
      <Alert
        sx={{
          backgroundColor: "#fff",
          border: "1px solid #F09254",
          boxShadow: "0px 4px 6px 0px #0000001A",
          borderRadius: "4px",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          minWidth: "fit-content",
          "& .MuiAlert-icon": {
            margin: "0",
          },
        }}
        icon={
          <WarningAmber
            sx={{
              color: "#FBB26F",
              fontSize: "20px",
              margin: "0",
            }}
          />
        }
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "12px",
          }}
        >
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default Toast;
