import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Link } from "react-router-dom";
import Signupheader from '../Signupheader/Signupheader';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Signup() {

  return (
    <div>
      <Signupheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              marginTop: "150px",
              width: "524px",
              height: "500px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <div style={{ marginTop: "21px", textAlign: "center" }}>
              <h1
                style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
              >
                Welcome
              </h1>
              <p
                style={{ fontSize: "14px", fontWeight: "400px", color: "#667085" }}
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
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  className="rounded-lg mb-11"
                  placeholder="+92 | 3524584205"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>



              <div style={{ marginTop: "12px" }}>
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
                  Alresdy have an acount?<a href="/Signin" style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#D22A8F",
                    textAlign: "center",
                    marginTop: "24px",
                    textDecoration: "none",
                  }}>Sign in</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center ">
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
