import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Signupheader from "../Signupheader/Signupheader";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function forgetpassword() {
  return (
    <div>
      <Signupheader />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            width: "524px",
            height: "290  px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div className="flex mt-20">
            <IconButton
              component={Link}
              to="/Signin"
              size="small"
              className="mb-40"
            >
              <ArrowBackIosNewIcon style={{ color: "rgba(0, 0, 0, 1)" }} />
            </IconButton>
            <div className="text-center sm:ml-40 mr-28">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
              >
                Forgot password
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                Enter your phone number to reset your password
              </p>
            </div>
          </div>
          <div className="w-full mt-20">
            <hr />
          </div>
          <CardContent>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#344054",
                marginTop: "21px",
              }}
            >
              Phone number
            </Typography>
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                type="number"
                className="rounded-lg mb-11"
                placeholder="+92 | 3524584205"
                style={{ marginTop: "6px", height: "44px" }}
              />
            </FormControl>
            <div style={{ marginTop: "12px" }}>
              <Button
                component={Link}
                to="/Verify"
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
          </CardContent>
        </Card>
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
export default forgetpassword;
