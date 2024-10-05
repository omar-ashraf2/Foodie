import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useSaladContext } from "../contexts/SaladContext";
import {
  AccordionStyle,
  AccordionSummaryStyle,
  MenuItemStyle,
  SelectStyle,
  SubtitleStyle,
} from "../styles/styles";
import { TSize } from "../types/size";

type SaladSizeSelectorProps = {
  onSizeSelect: (size: TSize) => void;
};

const SaladSizeSelector: React.FC<SaladSizeSelectorProps> = ({
  onSizeSelect,
}) => {
  const { state, dispatch } = useSaladContext();

  const handleChange = (event: SelectChangeEvent) => {
    const newSize = event.target.value as TSize;
    dispatch({
      type: "SET_SIZE",
      size: newSize,
    });
    onSizeSelect(newSize);
  };

  return (
    <Accordion
      sx={{
        ...AccordionStyle,
        "&.Mui-expanded": {
          marginTop: "15px !important",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#333" }} />}
        sx={AccordionSummaryStyle}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
          حجم السلطة
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" sx={{ ...SubtitleStyle, mb: 1 }}>
          قم باختيار مكونات السلطة الرئيسية
        </Typography>
        <Typography sx={{ fontWeight: 300, mb: 2, fontSize: "14px" }}>
          الحجم
        </Typography>
        <FormControl fullWidth>
          <Select
            displayEmpty
            value={state.size || ""}
            onChange={handleChange}
            sx={SelectStyle}
          >
            <MenuItem
              value=""
              sx={{ ...MenuItemStyle, display: "none" }}
              disabled
            >
              برجاء الاختيار
            </MenuItem>

            <MenuItem value="small" sx={MenuItemStyle}>
              سلطة صغيرة ( S )
            </MenuItem>
            <MenuItem value="medium" sx={MenuItemStyle}>
              سلطة وسط ( M )
            </MenuItem>
            <MenuItem value="large" sx={MenuItemStyle}>
              سلطة كبيرة ( L )
            </MenuItem>
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default SaladSizeSelector;
