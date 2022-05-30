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
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";


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
                  <div className="flex">
                    <div className="flex">
                      <Radio
                        style={{ color: "#D22A8F" }}
                        checked={selectedValue === "a"}
                        onChange={radioChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                        size="small"
                      />
                      <Typography
                        className="text-sm font-medium mt-12"
                        style={{ color: "#101828" }}
                      >
                        Yes
                      </Typography>
                    </div>
                    <div className="flex">
                      <Radio
                        style={{ color: "#D22A8F" }}
                        checked={selectedValue === "b"}
                        onChange={radioChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "B" }}
                        size="small"
                      />
                      <Typography
                        className="text-sm font-medium mt-12"
                        style={{ color: "#101828" }}
                      >
                        No
                      </Typography>
                    </div>
                  </div>
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
                      style={{ borderRadius: "12px", height: "90%" }}
                      open={open}
                      onClose={handleClose}
                    >
                      <div
                        className="flex flex-col justify-center items-center"
                        style={{ marginTop: "36px" }}
                      >
                        <Card
                          className="w-full"
                          style={{
                            border: "1px solid rgba(195, 203, 205, 0.42)",
                            marginTop: "150px",
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
                                  type={values.showPassword ? "text" : "password"}
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
                                    <Checkbox style={{ color: "#D22A8F" }} defaultChecked />
                                  }
                                  label="Remember for 30 days"
                                />
                                <Typography
                                  component={Link}
                                  to="/forgetpassword"
                                  className="text-sm text-right mt-2.5 font-medium text-fuchsia-600"
                                  style={{ color: "#D22A8F", textDecoration: "none" }}
                                >
                                  Forgot Password
                                </Typography>
                              </div>
                              <div style={{ marginTop: "19px" }}>
                                <Button
                                  onClick={verifyClickAlert}

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
                                Didn't have an acount?<a href="/Signup" style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#D22A8F",
                                  textAlign: "center",
                                  marginTop: "24px",
                                  textDecoration: "none",
                                }}>Sign up</a>
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
                  ><div className="flex flex-row justify-center">
                      <Card
                        style={{
                          marginTop: "150px",
                          width: "524px",
                          height: "350px",
                          border: "1px solid rgba(195, 203, 205, 0.42)",
                        }}
                      >
                        <div style={{ marginTop: "21px", textAlign: "center" }}>
                          <h1 style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}>
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
                            Please enter 6 digit code send on your phone 034******59
                          </p>
                        </div>
                        <div className="w-full mt-20 ">
                          <hr />
                        </div>
                        <CardContent>

                          <div className="flex space-x-10">
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput
                                className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48"

                              />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput
                                className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48"

                              />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput
                                className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48"

                              />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput
                                className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48"

                              />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput
                                className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48"

                              />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput
                                className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48"
                              />
                            </FormControl>
                          </div>
                          <div className="sm:mt-28 mt-16">
                            <Button
                              component={Link}
                              to="/Setpassword"
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
                              Didn't receive code?<b style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#D22A8F",
                                textAlign: "center",
                                marginTop: "24px",
                              }}>Resend Code</b>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div></Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
