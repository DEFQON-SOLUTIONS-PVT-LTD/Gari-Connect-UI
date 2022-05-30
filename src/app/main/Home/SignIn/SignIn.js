import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";

function SignIn() {
  const [values, setValues] = React.useState({
    password: "",
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
  return (
    <div className="h-xl">
      <Signupheader />
      {/* <div className="flex">
		<div >
		<img className="loginI"  src="assets/images/Gari Connect/LG.png" alt="logo"></img>		
		</div>
		<div style={{ marginLeft:"150px"}}>
		<div style={{ marginTop:"150px"}}>	
		<img width="183px" height="25px" src="assets/images/Gari Connect/Gari Logo.png" alt="logo"></img>	
		</div>
		<div>
		<h1 style={{fontSize:"30px", fontWeight: "600",color:"#101828",marginTop:"50px"}}>Log in to your account</h1>
		<p style={{fontSize:"16px",fontWeight:"400px",color:"#667085",marginTop:"10px"}}>Welcome back! please enter your details.</p>
		<h1 style={{fontSize:"14px", fontWeight: "500",color:"#344054",marginTop:"50px"}}>Email</h1>
		<Box

			sx={{
				height: 44,
				width: 415,
				maxWidth: '100%',
				marginTop:"10px",
				borderRadius:"8px",

			}}
			className="field"
			// startAdornment={<InputAdornment position="start">$</InputAdornment>}
			>

			< TextField fullWidth label="Enter Your Email" id=" email" 

				></TextField>

			</Box>
		<h1 style={{fontSize:"14px", fontWeight: "500",color:"#344054",marginTop:"50px"}}>Password</h1>	
		<Box

	sx={{
		height: 44,
	width: 415,
	maxWidth: '100%',
	marginTop:"10px",
	

	}}
	className="field"
	// startAdornment={<InputAdornment position="start">$</InputAdornment>}
	>

	< TextField fullWidth label="Enter Your Email" id=" email" 

		></TextField>

	</Box>
	<div className="flex" style={{ marginTop:"20px"}}>
	<FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
	<Typography variant="h6" fontSize="14px" marginTop="10px" marginLeft="100px" color="#D22A8F" >
			Forgot Password
			</Typography>
	</div>
	<div style={{ marginTop:"10px"}}>
	<Button style={{ width: "420px", height: "44px", background: "#D22A8F", color: "#FFFFFF", borderRadius: "8px" }}>Sign in</Button>
	</div>
	<div style={{ marginTop:"10px"}}>
	<Button style={{ width: "420px", height: "44px",  borderRadius: "8px" }} > <img width="25px" style={{ marginRight:"5px"}} src="assets/images/Gari Connect/Google.png" alt="logo"></img> Sign in</Button>
	</div>
	<div style={{ marginTop:"10px"}}>
	<Button style={{ width: "420px", height: "44px",  borderRadius: "8px" }} > <img width="25px" style={{ marginRight:"5px"}} src="assets/images/Gari Connect/Vector.png" alt="logo"></img> Sign in</Button>
	</div>
	<div className="flex">
	<p style={{fontSize:"14px",marginLeft:"80px",marginTop:"20px",color:"#667085", fontWeight:"400"}}>Dont have an account?</p>
	<p style={{fontSize:"14px", fontWeight:"500",color:"#D22A8F",marginTop:"18px",marginLeft:"20px"}}>Sign up</p>
	</div>
		</div>
		
		</div>
		</div>	 */}

      <div
        className="flex flex-col justify-center items-center"
        style={{ marginTop: "36px" }}
      >
        <Card
          className="xs:w-1/3 sm:w-1/3 md:w-1/3 w-full"
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
                  onChange={handleChange("password")}
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
                  // component={Link}
                  // to="/Cardetail"
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
      <div className="flex flex-row justify-center">
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
export default SignIn;
