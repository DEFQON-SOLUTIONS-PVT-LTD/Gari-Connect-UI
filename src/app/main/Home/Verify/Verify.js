import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import OtpInput from "react-otp-input";

function OTP() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);
  return (
    <div>
      <Signupheader />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            width: "524px",
            height: "361px",
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
            <div className="flex justify-center space-x-10">
              <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={6}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                  width: "66px",
                  height: "66px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "32px",
                }}
                focusStyle={{
                  border: "1px solid black",
                  outline: "none",
                }}
              />
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
export default OTP;
