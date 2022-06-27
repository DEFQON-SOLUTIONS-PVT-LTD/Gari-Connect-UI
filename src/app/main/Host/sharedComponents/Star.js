import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function Star (){
    const [value, setValue] = React.useState(2);
    const [price, setPrice] = React.useState(false);

    const priceClick = () => {
      setPrice((prev) => !prev);
    };
  
    const priceClickAway = () => {
      setPrice(false);
    };
    const styles = {
        position: "absolute",
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        p: 1,
        bgcolor: "background.paper",
        width: 170,
        height: 77,
      };
    return(
        <ClickAwayListener onClickAway={priceClickAway}>
        <Box sx={{ position: "relative" }}>
          <Button
            className="text-xs"
            style={{
              border: "1px solid #D0D5DD",
              height: "52px",
              width: "128px",
              borderRadius: "8px",
              color: "#667085",
            }}
            type="button"
            onClick={priceClick}
            endIcon={<KeyboardArrowDownIcon style={{color:"rgba(0, 0, 0, 1)"}}/>}
          >
            Rating
          </Button>
          {price ? (
            <Box className="mt-28" sx={styles}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        max={4}
        sx={{
          fontSize: "40px"
      }}
      />
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    );
}