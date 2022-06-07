import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";

function Signup() {
  const [values, setValues] = React.useState({
    password: "",
    confirmpassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowconfirmPassword = () => {
    setValues({
      ...values,
      showconfirmPassword: !values.showconfirmPassword,
    });
  };
  const handleMouseDownconfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Signupheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              marginTop:"150px",
              width: "524px",
              height: "840px",
              borderRadius: "4px",
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
                Welcome
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                To make account Please enter your details.
              </p>
            </div>
            <div className="mt-20">
              <hr style={{ width: "100%" }} />
            </div>
            <CardContent>
              <div style={{ marginTop: "26px" }}>
                <Button
                  style={{
                    height: "44px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    border: "1px solid #D0D5DD",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Google.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Google
                </Button>
              </div>
              <div style={{ marginTop: "6px" }}>
                <Button
                  style={{
                    border: "1px solid #D0D5DD",
                    fontSize: "16px",
                    height: "44px",
                    borderRadius: "8px",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Vector.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Facebook
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
              <div className="flex space-x-10">
                <FormControl fullWidth variant="outlined">
                  <Typography
                    style={{
                      marginTop: "14px",
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    First name
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    placeholder="First name"
                    style={{ marginTop: "6px", height: "44px" }}
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
                    Last name
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    placeholder="Last name"
                    style={{ marginTop: "6px", height: "44px" }}
                  />
                </FormControl>
              </div>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Enter email address
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11"
                  placeholder="abc@gmail.com"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Phone number
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11"
                  placeholder="+92 | 3524584205"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <div style={{ marginTop: "25px" }}>
                <FormControl fullWidth variant="outlined">
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    Enter password
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange("password")}
                    style={{ marginTop: "6px", height: "44px" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
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
              </div>
              <div style={{ marginTop: "10px" }}>
                <FormControl fullWidth variant="outlined">
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginTop: "8px",
                    }}
                  >
                    Re-enter password
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    id="outlined-adornment-confirmPassword"
                    type={values.showconfirmPassword ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={values.confirmpassword}
                    onChange={handleChange("confirmpassword")}
                    style={{ marginTop: "6px", height: "44px" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirmpassword visibility"
                          onClick={handleClickShowconfirmPassword}
                          onMouseDown={handleMouseDownconfirmPassword}
                          edge="end"
                        >
                          {values.showconfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button
                  component={Link}
                  to="/Verifyaccount"
                  style={{
                    height: "44px",
                    background: "#D22A8F",
                    color: "#FFFFFF",
                    fontSize: "16px",
                  }}
                  className="w-full rounded-lg"
                >
                  Sign up
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
                  Alresdy have an acount?
                  <a
                    href="/Signin"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#D22A8F",
                      textAlign: "center",
                      marginTop: "24px",
                      textDecoration: "none",
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-60">
        <Typography
          className="absolute bottom-0 text-16 font-normal pb-10"
          style={{ color: "#98A2B3" }}
        >
          © 2022 GariConnect. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Signup;
