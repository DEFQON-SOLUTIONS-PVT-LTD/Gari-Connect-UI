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
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Autocomplete from "@mui/material/Autocomplete";

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

function BpRadio(props) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
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
  const [selectedValue, setSelectedValue] = React.useState("a");
  const radioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [alert, setAlert] = React.useState(false);
  const verifyClickAlert = () => {
    setAlert(true);
  };

  const verifyClose = () => {
    setAlert(false);
  };
  const [values, setValues] = React.useState({
    password: "",
  });
  const passwordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const passwordClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const passwordMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [card, setCard] = React.useState("");

  const paymentChange = (event) => {
    setCard(event.target.value);
  };

  const [pay, setPay] = React.useState(null);

  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-32">
          <div className="flex flex-row  px-24 py-24 sm:ml-96 ml-0">
            <ArrowBackIcon size="large" className="mr-20 sm:ml-44 ml-0" />
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
                  <div className="flex space-x-10">
                    <div className="flex">
                  <FormControlLabel value="female" control={<BpRadio />} label="" />
                  <Typography className="mt-8 text-sm font-medium">Yes</Typography>
                  </div>
                  <div className="flex">
        <FormControlLabel value="male" control={<BpRadio />} label="" />
        <Typography className="mt-8 text-sm font-medium">NO</Typography>
        </div>
                  </div>
                  </RadioGroup>
                </div>
                <hr className="mt-20" />
              </div>
              <div className="mt-28">
                <Card
                  className="shadow-none rounded-md border mb-24 sm:w-8/12 w-full"
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
               <ShieldOutlinedIcon
               className="mt-10"
                    fontSize="large"
                    style={{ color: "#D22A8F" }}
                  />
                <Typography
                  className="text-xs font-normal mt-10 ml-4"
                  style={{ color: "#667085" }}
                >
                  To protect your payment, never transfer money or communicate
                  <br></br> outside os the Gari Connect website or app.
                </Typography>
              </div>
              <div>
                <Card
                  className="w-10/12"
                  style={{
                    marginTop: "40px",
                    height: "440px",
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
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
              }}
            >
            Choose card
            </Typography>
            <Autocomplete
              popupIcon={<KeyboardArrowDownIcon />}
              className="mt-6"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ height: 44 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="medium"
                  placeholder="Choose card"
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                    },
                  }}
                />
              )}
            />
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
                    <div className="flex space-x-10 w-full">
                      
                      <FormControl className="mt-16 w-1/2">
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
                          inputFormat="dd/MM/yyy"
                          disableOpenPicker={true}
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params}
                            sx={{ 
                              '& fieldset':{
                                borderRadius:"8px",
                                height:"48px"
                              }
                            }} />}
                          />
                        </LocalizationProvider>
                      </FormControl>
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
                    <div className="mt-28">
                      <Button
                        onClick={verifyClickAlert}
                        style={{
                          width: "100%",
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
                      onClick={handleClickOpen}
                      variant="contained"
                      className="rounded-4 text-white w-full"
                      style={{ backgroundColor: "#D22A8F" }}
                    >
                      Pay now
                    </Button>
                  </div>
                  <div>
                    <Dialog
                      style={{ borderRadius:"12px",height:"auto"}}
                      fullWidth={true}
                      open={open}
                      onClose={handleClose}
                    >
                      <div
                      >
                        <Card
                          style={{
                            border:"1px solid rgba(195, 203, 205, 0.42)",
                          }}
                        >
                          <div
                            className="flex flex-col justify-center text-center"
                            style={{ marginTop: "21px" }}
                          >
                            <h1 className="text-2xl font-semibold text-grey-900">
                              Welcome Back
                            </h1>
                            <p className="text-sm text-gray-500">
                              Welcome back! please enter your details.
                            </p>
                          </div>
                          <div className="mt-20">
                            <hr style={{ width: "100%" }} />
                          </div>
                          <CardContent>
                            <div className="mt-28 mb-2.5">
                              <Button
                                style={{
                                  border: "1px solid #D0D5DD",
                                  height: "44px",
                                  fontSize: "16px",
                                }}
                                className="w-full h-11 text-black rounded-lg "
                              >
                                <img
                                  width="24px"
                                  style={{ marginRight: "12px" }}
                                  src="assets/images/GariConnect/Google.png"
                                  alt="logo"
                                />{" "}
                                Sign in with Google
                              </Button>
                            </div>
                            <div className="">
                              <Button
                                style={{
                                  border: "1px solid #D0D5DD",
                                  height: "44px",
                                  marginTop: "9px",
                                  fontSize: "16px",
                                }}
                                className="w-full h-11 text-black rounded-lg"
                              >
                                {" "}
                                <img
                                  width="24px"
                                  style={{ marginRight: "12px" }}
                                  src="assets/images/GariConnect/Vector.png"
                                  alt="logo"
                                />{" "}
                                Sign in with Facebook
                              </Button>
                            </div>
                            <div
                              className="flex flex-row justify-center"
                              style={{ marginTop: "28px" }}
                            >
                              <hr
                                style={{
                                  width: "45%",
                                  marginTop: "8px",
                                  marginRight: "12px",
                                }}
                              />
                              <p
                                style={{
                                  color: "#98A2B3",
                                }}
                              >
                                or
                              </p>
                              <hr
                                style={{
                                  width: "45%",
                                  marginTop: "8px",
                                  marginLeft: "12px",
                                }}
                              />
                            </div>
                            <div className="mx-8 mt-16 mb-7">
                              <Typography className="text-sm font-medium text-grey-700">
                                Phone number
                              </Typography>
                              <FormControl fullWidth variant="outlined">
                                <OutlinedInput
                                  className="rounded-lg mb-11 "
                                  placeholder="+92 | 3524584205"
                                  style={{ marginTop: "6px", height: "44px" }}
                                />
                              </FormControl>
                              <Typography className="text-sm font-medium text-grey-700 mt-20 ml-1.5">
                                Password
                              </Typography>
                              <FormControl fullWidth variant="outlined">
                                <OutlinedInput
                                  style={{ marginTop: "6px", height: "44px" }}
                                  className="rounded-lg"
                                  placeholder="********"
                                  id="outlined-adornment-password"
                                  type={
                                    values.showPassword ? "text" : "password"
                                  }
                                  value={values.password}
                                  onChange={passwordChange("password")}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={passwordClickShowPassword}
                                        onMouseDown={passwordMouseDownPassword}
                                        edge="end"
                                      >
                                        {values.showPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                              <div
                                className="flex flex-row justify-between items-center"
                                style={{ marginTop: "12px" }}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      style={{ color: "#D22A8F" }}
                                      defaultChecked
                                    />
                                  }
                                  label="Remember for 30 days"
                                />
                                <Typography
                                  component={Link}
                                  to="/forgetpassword"
                                  className="text-sm text-right mt-2.5 font-medium text-fuchsia-600"
                                  style={{
                                    color: "#D22A8F",
                                    textDecoration: "none",
                                  }}
                                >
                                  Forgot Password
                                </Typography>
                              </div>
                              <div style={{ marginTop: "19px" }}>
                                <Button
                                  style={{
                                    backgroundColor: "rgba(210, 42, 143, 1)",
                                    height: "44px",
                                    fontSize: "16px",
                                  }}
                                  className="w-full h-11 text-white rounded-lg"
                                >
                                  Sign in
                                </Button>
                              </div>
                            </div>
                            <div className="sm:mt-20 mt-24">
                              <p
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  textAlign: "center",
                                  marginTop: "24px",
                                }}
                              >
                                Didn't have an acount?
                                <a
                                  href="/Signup"
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "#D22A8F",
                                    textAlign: "center",
                                    marginTop: "24px",
                                    textDecoration: "none",
                                  }}
                                >
                                  Sign up
                                </a>
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </Dialog>
                  </div>
                  <Dialog
                    style={{ borderRadius: "12px", height: "90%" }}
                    open={alert}
                    onClose={verifyClose}
                  >
                    <div className="flex flex-row justify-center">
                      <Card
                        style={{
                          width: "524px",
                          height: "350px",
                          border: "1px solid rgba(195, 203, 205, 0.42)",
                        }}
                      >
                        <div style={{ marginTop: "21px", textAlign: "center" }}>
                          <h1
                            style={{
                              fontSize: "24px",
                              fontWeight: "600",
                              color: " #101828",
                            }}
                          >
                            Verify
                          </h1>
                          <p
                            style={{
                              fontSize: "14px",
                              fontWeight: "400px",
                              color: "#667085",
                              marginTop: "10px",
                            }}
                          >
                            Please enter 6 digit code send on your phone
                            034******59
                          </p>
                        </div>
                        <div className="w-full mt-20 ">
                          <hr />
                        </div>
                        <CardContent>
                          <div className="flex space-x-10">
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                          </div>
                          <div className="sm:mt-28 mt-16">
                            <Button
                              component={Link}
                              to="/Receipt"
                              style={{
                                backgroundColor: "rgba(210, 42, 143, 1)",
                                height: "44px",
                                fontSize: "16px",
                              }}
                              className="w-full text-white rounded-lg"
                            >
                              Submit
                            </Button>
                          </div>
                          <div className="sm:mt-20 mt-24">
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                textAlign: "center",
                                marginTop: "24px",
                              }}
                            >
                              Didn't receive code?
                              <b
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#D22A8F",
                                  textAlign: "center",
                                  marginTop: "24px",
                                }}
                              >
                                Resend Code
                              </b>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
}
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];