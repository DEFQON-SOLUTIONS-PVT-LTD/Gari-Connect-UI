import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Navbar from "../Navbar/Navbar";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import TripDateRange from "../../Host/sharedComponents/TripDateRange";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import ReportList from "./ReportList";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Carddetail() {
  const [value, setValue] = React.useState(4);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <div className="grid grid-cols-1 justify-center">
        <div className="sm:flex justify-center mt-24">
          <div>
            <img
              style={{ maxHeight: "94%" }}
              src="assets/images/logos/Carddetail1.svg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col justify-center sm:ml-20 ml-0">
            <img
              width="100%"
              src="assets/images/logos/Carddetail2.svg"
              alt="logo"
            />
            <img
              width="100%"
              src="assets/images/logos/Carddetail4.svg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col justify-center sm:ml-20 mb-20">
            <img
              width="100%"
              src="assets/images/logos/Carddetail3.svg"
              alt="logo"
            />
            <div className="relative">
              <img
                width="100%"
                src="assets/images/logos/Carddetail5.svg"
                alt="logo"
                className="opacity-50"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-8 px-8">
                <Button className="opacity-100 text-white">View more</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
          <div className="col-span-1 sm:ml-8 md:ml-96 lg:ml-288">
            <div className="grid grid-cols-3 mt-28">
              <Typography className="font-normal text-2xl col-span-2">
                Toyota Corolla Altis-2020
              </Typography>
              <Typography className="font-normal text-2xl col-span-1">
                PKR 5000
                <b className="font-normal text-sm" style={{ color: "#667085" }}>
                  per day
                </b>
              </Typography>
            </div>
            <div className="grid grid-cols-4 gap-16 mt-8">
              <Typography
                className="font-normal text-sm col-span-3"
                style={{ color: "#667085" }}
              >
                Gulberg 3, Lahore
              </Typography>
              <Typography
                className="font-normal text-sm col-span-1"
                style={{ color: "#667085" }}
              >
                est,total 15000*
              </Typography>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 mt-12">
              <div className="col-span-3">
                <div className="flex">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    max={4}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="medium"
                  />
                  <Typography className="text-sm font-normal ml-6">
                    <b>4.0</b>
                    <b
                      className="text-sm font-normal ml-6"
                      style={{ color: "#667085" }}
                    >
                      (15 Trips)
                    </b>
                  </Typography>
                </div>
              </div>
              <div className="col-span-1">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  sx={{
                    color: "#667085",
                    "&.Mui-checked": {
                      color: "#D22A8F",
                    },
                  }}
                />
                <IconButton>
                  <SendOutlinedIcon />
                </IconButton>
                <IconButton>
                  <ContentCopyOutlinedIcon />
                </IconButton>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="flex">
                  <img src="assets/images/logos/Petrol.svg" alt="logo" />
                  <Typography className="ml-10 text-xs font-medium">
                    Petrol
                  </Typography>
                </div>
                <div className="flex mt-24">
                  <img src="assets/images/logos/seats.svg" alt="logo" />
                  <Typography className="ml-10 text-xs font-medium">
                    4 Seats
                  </Typography>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex">
                  <img src="assets/images/logos/Petrolgalon.svg" alt="logo" />
                  <Typography className="ml-10 text-xs font-medium">
                    30 mpg
                  </Typography>
                </div>
                <div className="flex mt-24">
                  <img src="assets/images/logos/Door.svg" alt="logo" />
                  <Typography className="ml-10 text-xs font-medium">
                    4 doors
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <hr />
              <div>
                <Typography className="text-base font-semibold mt-8">
                  Descripton
                </Typography>
                <Typography style={{ color: "#667085" }}>
                  Extremely comfortable and sporty at the same time: You can go
                  wrong with an AMG. You will not regret renting this amazing
                  car. Great drive around the city and throught the coast.
                  Extremely comfortable and sporty at the same time: You can go
                  wrong with an AMG.You will not regret renting this amazing
                  car.Great drive around the city and through the coast.
                  <b style={{ color: "#D22A8F" }}>Read more</b>
                </Typography>
              </div>
              <hr className="mt-32" />
              <div>
                <Typography className="text-base font-semibold mt-8">
                  Features
                </Typography>
                <div className="flex flex-row justify-between">
                  <div>
                    <div className="flex space-x-4 mt-16">
                      <img
                        width="18px"
                        src="assets/images/logos/keylessentry.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Keylessentry
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="18px"
                        src="assets/images/logos/fapplecarplay.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Applecarplay
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="18px"
                        src="assets/images/logos/keylessentry.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Keylessentry
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="18px"
                        src="assets/images/logos/fapplecarplay.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Applecarplay
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="18px"
                        src="assets/images/logos/keylessentry.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Keylessentry
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="18px"
                        src="assets/images/logos/fapplecarplay.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Applecarplay
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <div className="flex space-x-4 mt-12">
                      <img
                        width="20px"
                        src="assets/images/logos/fbluetooth.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Bluetooth
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="20px"
                        src="assets/images/logos/chargeimg.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        USBcharge
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="20px"
                        src="assets/images/logos/fbluetooth.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Bluetooth
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="20px"
                        src="assets/images/logos/chargeimg.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        USBcharge
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="20px"
                        src="assets/images/logos/fbluetooth.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        Bluetooth
                      </Typography>
                    </div>
                    <div className="flex space-x-4 mt-28">
                      <img
                        width="20px"
                        src="assets/images/logos/chargeimg.svg"
                        alt="logo"
                      />
                      <Typography className="font-medium text-xs">
                        USBcharge
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-32">
              <hr />
              <div>
                <Typography className="text-base font-semibold mt-8">
                  Guidelines
                </Typography>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <div className="flex space-x-4 mt-16">
                    <img
                      width="18px"
                      src="assets/images/logos/keylessentry.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Keylessentry
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/fapplecarplay.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Applecarplay
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/keylessentry.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Keylessentry
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/fapplecarplay.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Applecarplay
                    </Typography>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-4 mt-16">
                    <img
                      width="20px"
                      src="assets/images/logos/fbluetooth.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Bluetooth
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="20px"
                      src="assets/images/logos/chargeimg.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      USBcharge
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="20px"
                      src="assets/images/logos/fbluetooth.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Bluetooth
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-32">
              <hr />
              <div className="flex mt-8">
                <Typography className="text-base font-semibold mt-8">
                  Review and rating
                </Typography>
                <div className="mt-8 flex ml-8">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    max={4}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="medium"
                  />
                  <Typography className="text-sm font-normal ml-8">
                    <b>4.0</b>
                  </Typography>
                </div>
              </div>
            </div>

            <div className="flex w-full mt-32">
              <img
                className="mt-8"
                src="assets/images/logos/Profile.svg"
                alt="logo"
              />
              <div>
                <div className="flex mt-8 ml-8">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    max={4}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="medium"
                  />
                  <Typography className="text-sm font-normal ml-8">
                    <b>4.0</b>
                  </Typography>
                </div>
                <div className="ml-8">
                  <Typography className="font-medium text-xs">
                    Hassan Ali{" "}
                    <b
                      className="text-xs font-normal"
                      style={{ color: "#667085" }}
                    >
                      10-5-2022
                    </b>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <Typography className="font-normal text-sm">
                thank you for every thing i appreciate you!
              </Typography>
            </div>
            <hr className="flex w-full mt-28" />
            <div className="flex w-full mt-28">
              <img
                className="mt-8"
                src="assets/images/logos/Profile.svg"
                alt="logo"
              />
              <div>
                <div className="flex mt-8 ml-8">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    max={4}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="medium"
                  />
                  <Typography className="text-sm font-normal ml-8">
                    <b>4.0</b>
                  </Typography>
                </div>
                <div className="ml-8">
                  <Typography className="font-medium text-xs">
                    Hassan Ali{" "}
                    <b
                      className="text-xs font-normal"
                      style={{ color: "#667085" }}
                    >
                      10-5-2022
                    </b>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <Typography className="font-normal text-sm">
                thank you for every thing i appreciate you!
              </Typography>
            </div>
            <hr className="flex w-full mt-28" />
            <div className="flex w-full mt-28">
              <img
                className="mt-8"
                src="assets/images/logos/Profile.svg"
                alt="logo"
              />
              <div>
                <div className="flex mt-8 ml-8">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    max={4}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="medium"
                  />
                  <Typography className="text-sm font-normal ml-8">
                    <b>4.0</b>
                  </Typography>
                </div>
                <div className="ml-8">
                  <Typography className="font-medium text-xs">
                    Hassan Ali{" "}
                    <b
                      className="text-xs font-normal"
                      style={{ color: "#667085" }}
                    >
                      10-5-2022
                    </b>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <Typography className="font-normal text-sm">
                thank you for every thing i appreciate you!
              </Typography>
            </div>
            <hr className="flex w-full mt-28" />
            <div className="flex w-full mt-28">
              <img
                className="mt-8"
                src="assets/images/logos/Profile.svg"
                alt="logo"
              />
              <div>
                <div className="flex mt-8 ml-8">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    max={4}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="medium"
                  />
                  <Typography className="text-sm font-normal ml-8">
                    <b>4.0</b>
                  </Typography>
                </div>
                <div className="ml-8">
                  <Typography className="font-medium text-xs">
                    Hassan Ali{" "}
                    <b
                      className="text-xs font-normal"
                      style={{ color: "#667085" }}
                    >
                      10-5-2022
                    </b>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <Typography className="font-normal text-sm">
                thank you for every thing i appreciate you!
              </Typography>
            </div>
          </div>
          <div className="col-span-1 sm:max-w-8/12 md:w-7/12 lg:w-5/12 sm:ml-160 ml-0">
            <div>
              <Card style={{ height: "auto" }}>
                <Typography className="text-lg font-semibold ml-10 mt-10">
                  Book your car
                </Typography>
                <hr />
                <CardContent>
                  <TripDateRange />

                  <div className="" style={{ marginTop: "19px" }}>
                    <Button
                      onClick={handleClickOpen}
                      style={{
                        backgroundColor: "rgba(210, 42, 143, 1)",
                        fontSize: "16px",
                      }}
                      className="h-11 text-white rounded-lg md:w-320 w-256"
                    >
                      Book now
                    </Button>
                  </div>
                  <div>
                    <Dialog
                      style={{ borderRadius: "12px", height: "auto" }}
                      fullWidth={true}
                      open={open}
                      onClose={handleClose}
                    >
                      <div>
                        <Card
                          style={{
                            border: "1px solid rgba(195, 203, 205, 0.42)",
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
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
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
                                  component={Link}
                                  to="/Confirmandpay"
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
                  <div
                    className="rounded-lg mt-8 md:w-320 w-256 "
                    style={{ backgroundColor: "#EDF5FE" }}
                  >
                    <div className="flex pt-10">
                      <img
                        className="pl-6"
                        src="assets/images/logos/Cancelationthunder.svg"
                        alt="logo"
                      />
                      <Typography
                        className="mt-6 ml-10  font-normal text-sm"
                        style={{ color: "#046AF3" }}
                      >
                        Free Cancellation
                      </Typography>
                    </div>
                    <div className="ml-48 pb-10">
                      <Typography
                        className="font-normal text-xs"
                        style={{ color: "#667085" }}
                      >
                        Free cancellation, you can cancel you booking within 1
                        hour <br></br> otherwise cancellation charges may apply.
                        For more information <br></br> go to{" "}
                        <a
                          href="#"
                          style={{ color: "black" }}
                          className="text-sm font-light"
                        >
                          Cancellation Policy
                        </a>
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-10">
                <Typography className="text-lg font-semibold ml-10 mt-10">
                  Hosted By
                </Typography>
                <hr />
                <CardContent>
                  <div className="flex">
                    <div className="flex w-full">
                      <img
                        className="mt-8"
                        width="69"
                        src="assets/images/logos/Profile.svg"
                        alt="logo"
                      />

                      <div>
                        <div className="ml-8">
                          <Typography className="font-semibold text-base mt-12">
                            Hassan Ali{" "}
                            <b
                              className="text-xs font-normal"
                              style={{ color: "#667085" }}
                            >
                              10-5-2022
                            </b>
                          </Typography>
                        </div>
                        <div className="flex ml-8">
                          <Rating
                            name="simple-controlled"
                            value={value}
                            max={4}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            size="medium"
                          />
                          <Typography className="text-sm font-normal ml-8">
                            <b
                              className="font-normal text-xs"
                              style={{ color: "#667085" }}
                            >
                              4.0
                            </b>
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            className="font-normal text-xs"
                            style={{ color: "#667085" }}
                          >
                            487 trips- Joined Sep 2020
                          </Typography>
                        </div>
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
                  To protect your payment, never transfer money or<br></br>{" "}
                  communicate outside os the Gari Connect website or app.{" "}
                </Typography>
              </div>
              <div>
                <hr className="mt-20" />
              </div>
              <div className=" text-center mt-20 font-400 text-14 ">
                <ReportList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          style={{ marginTop: "152px" }}
          className="w-full"
          src="assets/images/logos/Detailmap.svg"
          alt="logo"
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
