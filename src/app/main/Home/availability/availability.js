import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Hostheader from '../Hostheader/Hostheader';
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Availability from '../../Host/sharedComponents/carListing/Availability';

export default function () {
  return (
    <div>
      <Hostheader />
      <Card
        className="mx-auto mt-40 w-3/4"
        style={{ height: "750px" }}
      >
        <div className="mt-20 ml-10">
          <Typography

            style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
          >
            List your car
          </Typography>
        </div>
        <div className="ml-10">
          <Typography
            style={{ fontSize: "14px", fontWeight: "400px", color: "#667085" }}
          >
            Please enter your detail to list your car
          </Typography>
        </div>
        <div>
          <Box sx={{ color: "#D22A8F" }}>
            <LinearProgress
              color="inherit"
              className="mt-32"
              variant="determinate"
              value={75}
            />
          </Box>
        </div>
        <div className="ml-10">
          <Typography
            className="text-lg font-semibold"
            style={{ color: "#101828", }}
          >
            Set availability
          </Typography>
        </div>

        <CardContent>
          <Availability />
        </CardContent>

        <CardActions className="flex flex-row justify-end">
          <Button
            component={Link}
            to="/guideline"
            className="ml-10 w-96"
            style={{

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
            to="/image"
            className="ml-5 w-96"
            style={{

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
        </CardActions>
      </Card>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>

    </div>
  );
}
