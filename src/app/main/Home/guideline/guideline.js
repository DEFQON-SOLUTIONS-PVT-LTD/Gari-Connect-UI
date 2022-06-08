import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Footer from "../Footer/Footer";
import Hostheader from "../Hostheader/Hostheader";
import { Link } from "react-router-dom";
import { CardActionArea } from '@mui/material';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Guidelines from '../../Host/sharedComponents/carListing/Guidelines';

function guideline() {
  return (
    <div>
      <Hostheader />
      <div className="flex flex-col items-center">
        <Card

          style={{
            marginTop: "40px",
            width: "70%",
            height: "auto",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >

          <div className="ml-20 mt-10">
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
            >
              List your car
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400px",
                color: "#667085",
              }}
            >
              Please enter detail to list your car
            </p>
          </div>
          <div>
            <Box sx={{ color: "#D22A8F" }}>
              <LinearProgress
                color="inherit"
                className="mt-32"
                variant="determinate"
                value={60}
              />
            </Box>
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "10px",
              marginLeft: "20px",
            }}
          >
            Select guideline
          </h3>
          <CardContent>
            <Guidelines/>
          </CardContent>
            <div
              className="flex flex-row justify-end sm:mr-20 mr-16 mt-36 mb-20"
            >
              <Button
                component={Link}
                to="/features"
                style={{
                  width: "99px",
                  height: "44px",
                  background: "#FFFFFF",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "500px",
                  borderRadius: "8px",
                  border: "1px solid #D0D5DD",
                }}
              >
                Back
              </Button>
              <Button
                component={Link}
                to="/availability"
                className="ml-10"
                style={{
                  width: "100px",
                  height: "44px",
                  background: "#D22A8F",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "500px",
                  borderRadius: "8px",
                }}
              >
                Next
              </Button>
            </div>
        </Card>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default guideline;