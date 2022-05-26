import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Link } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";

function Verifyaccount() {
  return (
    <div>
      <Signupheader />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            width: "524px",
            height: "370px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div style={{ marginTop: "21px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
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
              Please enter 6 digit code send on your phone 034******59
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
              to="/Createpassword"
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
                  Resend Code<br></br>
                  </b>
                  <b
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      textAlign: "center",
                      colors: "#344054",
                    }}
                  >
                    Or try
                  </b>
                  <a
                  href="/Option"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#D22A8F",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    another options
                  </a>
               
              </p>
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
export default Verifyaccount;
