import {
  Button,
  Card,
  CardContent,
  Typography,
  Rating,
  Divider,
} from "@mui/material";
import Footer from "app/main/Home/Footer/Footer";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import IconButton from "@mui/material/IconButton";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import Navbar from "../Navbar/Navbar";
import { styled } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#D22A8F",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#D22A8F",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function Confirmandpay() {
  const [value, setValue] = React.useState(4);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [age, setAge] = React.useState("");

  const ageChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-32">
          <div className="flex flex-row items-center px-24 py-24 ml-96">
            <ArrowBackIcon size="large" className="mr-20 ml-44" />
            <Typography className="text-2xl font-normal font-Gilroy-Medium">
              Confirm and pay
            </Typography>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20"
            style={{ marginLeft: "10%" }}
          >
            <div className="col-span-1">
              <Typography className="font-normal text-2xl">
                Your trip
              </Typography>
              <div className="w-10/12">
                <div className="flex justify-between mt-36 mb-32">
                  <div>
                    <Typography className="text-18 font-medium mb-6">
                      Dates
                    </Typography>
                    <Typography
                      className="text-sm font-normal"
                      color="text.secondary"
                    >
                      May 13 – 20
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      component={Link}
                      to="#"
                      className="text-base font-normal"
                      style={{ color: "#D22A8F" }}
                    >
                      Edit
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between mt-32">
                  <div>
                    <Typography
                      className="text-sm font-medium mt-7"
                      style={{ color: "#101828" }}
                    >
                      Life insurance
                    </Typography>
                    <Typography
                      className="text-sm font-normal"
                      style={{ color: "#667085" }}
                    >
                      PKR 200 will be charge for insurance
                    </Typography>
                  </div>
                  <RadioGroup
                      defaultValue="female"
                      aria-labelledby="demo-customized-radios"
                      name="customized-radios"
                    >
                  <div className="flex space-x-12">
                  <div className="flex">
                          <FormControlLabel
                            value="female"
                            control={<BpRadio />}
                            label=""
                          />
                          <Typography className="font-medium text-sm pt-6">
                            Yes
                          </Typography>
                        </div>
                        <div className="flex">
                          <FormControlLabel
                            value="male"
                            control={<BpRadio />}
                            label=""
                          />
                          <Typography className="font-medium text-sm pt-6">
                            No
                          </Typography>
                        </div>
                  </div>
                  </RadioGroup>
                </div>
                <hr className="mt-20" />
              </div>
              <div className="mt-28">
                <Card
                  className="shadow-none rounded-md border mb-24 w-7/12"
                  sx={{ minHeight: 133 }}
                >
                  <div className="border-b">
                    <Typography
                      className="text-12 font-medium px-20 py-10"
                      style={{ color: "#101828" }}
                    >
                      Hosted By
                    </Typography>
                  </div>
                  <CardContent>
                    <div className="flex flex-row">
                      <div className="flex sm:flex-col md:flex-row flex-col md:items-center">
                        <img
                          className="mr-12"
                          style={{ maxWidth: 70, maxHeight: 70 }}
                          src="assets/images/profile/HassanAli.png"
                          alt=""
                        />
                        <div className="flex flex-col">
                          <Typography className="text-16 font-600 font-Manrope">
                            Hassan Ali
                          </Typography>
                          <div className="flex flex-row items-center mb-4">
                            <Rating
                              className="text-16"
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                              max={4}
                            />
                            <Typography
                              className="text-12 font-normal ml-8"
                              color="text.secondary"
                            >
                              4.0
                            </Typography>
                          </div>
                          <Typography
                            className="text-12"
                            color="text.secondary"
                          >
                            487 trips - Joined Sep 2020
                          </Typography>
                        </div>
                      </div>
                      <div className="flex flex-row items-start ml-auto">
                        <Typography
                          className="text-12 mr-4"
                          color="text.secondary"
                        >
                          Verified
                        </Typography>
                        <Checkbox
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon />}
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          style={{ padding: 0 }}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 14,
                              color: "#D22A8F",
                            },
                            "& .MuiTouchRipple-root": { display: "none" },
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex mt-24">
                <IconButton>
                  <ShieldOutlinedIcon
                    fontSize="large"
                    style={{ color: "#D22A8F" }}
                  />
                </IconButton>
                <Typography
                  className="text-xs font-normal mt-10"
                  style={{ color: "#667085" }}
                >
                  To protect your payment, never transfer money or communicate
                  <br></br> outside os the Gari Connect website or app.
                </Typography>
              </div>
              <div className="">
          <Card
            style={{
              className: "w-full",
              marginTop: "40px",
              width: "524px",
              minHeight: "430px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            >
              Add payment method
            </h3>
            <CardContent>
            <FormControl fullWidth>
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  Choose card
                </Typography>
                <Select
                  className="rounded-lg"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  placeholder="Select a car make"
                  onChange={ageChange}
                  style={{ marginTop: "6px", height: "44px" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  Enter card number
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="155485541554"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <div className="flex space-x-10">
              <div className="mt-16">
              <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginBottom: "6px",
                  }}
                >
                  Expiry date
                </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
                <FormControl className="w-1/2" variant="outlined">
                  <Typography
                    style={{
                      marginTop: "14px",
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    CSV
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg mb-11"
                    placeholder="849"
                    style={{ marginTop: "6px", height: "44px" }}
                  />
                </FormControl>
              </div>
              <div className="flex flex-row justify-between mt-28">
                <Button
                  className="ml-10 w-full"
                  style={{
                    height: "44px",
                    background: "#D22A8F",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "500px",
                    borderRadius: "8px",
                  }}
                >
                  Pay now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
            </div>
            <div className="col-span-1" style={{ marginRight: "25%" }}>
              <Card
                className="shadow-none rounded-md border ml-auto"
                sx={{ maxWidth: "533px", minHeight: "544px" }}
              >
                <CardContent>
                  <div className="flex flex-row">
                    <div className="flex sm:flex-col md:flex-row flex-col md:items-center">
                      <img
                        className="mr-12"
                        src="assets/images/logos/Honda.svg"
                        alt=""
                      />
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-4">
                          <Rating
                            className="text-16"
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            max={4}
                          />
                          <Typography
                            className="text-sm font-normal ml-8"
                            color="text.black"
                          >
                            4.0
                          </Typography>
                          <Typography
                            className="text-sm pl-8"
                            style={{ color: "#667085" }}
                          >
                            15 trips
                          </Typography>
                        </div>
                        <Typography className="text-16 font-600 font-Manrope">
                          Honda Afb 8895-19
                        </Typography>

                        <Typography className="text-12" color="text.secondary">
                          Gulberg 3
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <hr className="pt-20" />
                  <div className="mt-16">
                    <Typography className="text-xl">Price details</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Rate per day
                    </Typography>
                    <Typography className="text-base">Rs 4000/day</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Booked for
                    </Typography>
                    <Typography className="text-base">5 days</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Life insurance
                    </Typography>
                    <Typography className="text-base">Rs 200/day</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Subtotal
                    </Typography>
                    <Typography className="text-base">Rs 8200/-</Typography>
                  </div>

                  <Divider className="my-16" />

                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Total price
                    </Typography>
                    <Typography className="text-base font-semibold">
                      Rs 8200/-
                    </Typography>
                  </div>

                  <div className="flex flex-row justify-end space-x-10 mt-44 mb-10">
                    <Button
                      variant="contained"
                      className="rounded-4 text-white w-full"
                      style={{ backgroundColor: "#D22A8F" }}
                    >
                      Pay now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-88">
          <Footer />
        </div>
      </div>
    </div>
  );
}
