import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ViewButton from "../sharedComponents/ViewButton";
// import Drawer from "../sharedComponents/Drawer";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Star from "../sharedComponents/Star";
import Withdriver from "../sharedComponents/Withdriver";


function valuetext(value) {
  return `${value}°C`;
}
const Navbarfilters = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [price, setPrice] = React.useState(false);

  const priceClick = () => {
    setPrice((prev) => !prev);
  };

  const priceClickAway = () => {
    setPrice(false);
  };
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    p: 1,
    bgcolor: "background.paper",
    width: 382,
    height: 158,
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-20 shadow-lg bg-white mb-3 md:flex-row flex-col ">
        <div className="flex md:ml-96 md:space-x-12 md:flex-row  flex-col md:space-y-0 space-y-14 ml-55 md:w-md lg:w-2xl">
          {/* <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start ml-96"> */}
          <Autocomplete
            popupIcon={<KeyboardArrowDownIcon style={{color:"rgba(0, 0, 0, 1)"}}/>}
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 155 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Make"
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />

          <Autocomplete
            popupIcon={<KeyboardArrowDownIcon style={{color:"rgba(0, 0, 0, 1)"}}/>}
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 155 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Model"
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />
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
                Price
              </Button>
              {price ? (
                <Box className="mt-28" sx={styles}>
                  <Slider
                    className="mt-60"
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              ) : null}
            </Box>
     
          </ClickAwayListener>
          <Autocomplete
            popupIcon={<KeyboardArrowDownIcon style={{color:"rgba(0, 0, 0, 1)"}}/>}
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 155 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Type"
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />
          <Star />
          <Withdriver />
          {/* <Drawer/> */}
          <Button
            className="w-96 h-52"
            style={{
              backgroundColor: "#D22A8F",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            Search
          </Button>

          <div>
            <Button
              id="basic-button"
              onClick={handleClick}
              style={{ width: "104px", height: "52px" }}
              endIcon={<KeyboardArrowDownIcon style={{color:"rgba(0, 0, 0, 1)"}}/>}
            >
              Sort by
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                className="text-base font-normal"
                style={{ color: "#667085" }}
              >
                Price high to low
              </MenuItem>
              <MenuItem onClick={handleClose} className="text-base font-normal">
                Price low to high
              </MenuItem>
            </Menu>
          </div>
          {/* <IconButton
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <MenuIcon />
                            <i className="fas fa-bars"></i>
                        </IconButton> */}

          {/* </div> */}
        </div>

        <div className="flex items-center justify-center md:mr-96 mx-auto md:mt-0 mt-28">
          <ViewButton />
        </div>
      </nav>
      {/* //--------------------------------------------------------------------------// */}
    </>
  );
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default Navbarfilters;
