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
import Signupheader from "../Signupheader/Signupheader";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function Createpassword() {
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
      <Signupheader/>
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              marginTop: "150px",
              width: "524px",
              height: "518px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
             <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h1
            style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
          >
            Set password
          </h1>
          <p
            style={{ fontSize: "14px", fontWeight: "400px", color: "#667085" }}
          >
            Set a strong password for your account
          </p>
        </div>
        <div className="mt-20">
              <hr style={{width:"100%"}}/>
            </div>
            <CardContent>
           
              <div style={{ marginTop:"25px"}}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500px",
                  color: "#344054",
                  
                }}
              >
                Enter password
              </Typography>
              <FormControl fullWidth variant="outlined">
               

                <OutlinedInput
                  className="rounded-lg"
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange("password")}
                  style={{marginTop: "6px",height:"44px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
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
              </div>
              <div style={{ marginTop:"10px"}}>

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
              <FormControl fullWidth variant="outlined">
               
                <OutlinedInput
                  className="rounded-lg"
                  id="outlined-adornment-confirmPassword"
                  type={values.showconfirmPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  value={values.confirmpassword}
                  onChange={handleChange("confirmpassword")}
                  style={{marginTop: "6px",height: "44px"}}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirmpassword visibility"
                        onClick={handleClickShowconfirmPassword}
                        onMouseDown={handleMouseDownconfirmPassword}
                        edge="end"
                      >
                        {values.showconfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              </div>
              <div className="flex" style={{ marginTop: "16px" }}>
                <img src="assets/images/logos/Tick.svg" alt="logo"></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400px",
                    color: "#667085",
                    marginLeft: "10px",
                  }}
                >
                  An uppercase character
                </p>
              </div>
              <div className="flex" style={{ marginTop: "12px" }}>
                <img src="assets/images/logos/Tick.svg" alt="logo"></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400px",
                    color: "#667085",
                    marginLeft: "10px",
                  }}
                >
                  An lowercase character
                </p>
              </div>
              <div className="flex" style={{ marginTop: "12px" }}>
                <img src="assets/images/logos/Tick.svg" alt="logo"></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400px",
                    color: "#667085",
                    marginLeft: "10px",
                  }}
                >
                  A number (0-9) and/or symbol (Such as !,#, or % )
                </p>
              </div>
              <div className="flex" style={{ marginTop: "12px" }}>
                <img src="assets/images/logos/Tick.svg" alt="logo"></img>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400px",
                    color: "#667085",
                    marginLeft: "10px",
                  }}
                >
                  Ten or more character total
                </p>
              </div>

              <div style={{ marginTop: "10px" }}>
                <Button
                className="w-full"
                component={Link}
                to="Personaldetails"
                  style={{
                   height: "44px",
                    background: "#D22A8F",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    fontSize: "16px",
                    marginTop: "28px"
                  }}
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <Typography
        className="absolute bottom-0 text-16 font-normal pb-10"
          style={{color: "#98A2B3"}}
        >
          © 2022 GariConnect. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Createpassword;
