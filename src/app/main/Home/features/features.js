import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Footer from "../Footer/Footer";
import Hostheader from "../Hostheader/Hostheader";
import { Link } from "react-router-dom";
import { CardContent, CardActions } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Features from '../../Host/sharedComponents/carListing/Features';

function features() {

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
                value={45}
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
            Select features
          </h3>

          <CardContent>
            <Features />
          </CardContent>

          <CardActions className="flex flex-row justify-end">
            <div>
              <Button
                component={Link}
                to="/Carlocation"
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
            </div>
            <div>
              <Button
                component={Link}
                to="/guideline"
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
          </CardActions>
        </Card>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default features;
