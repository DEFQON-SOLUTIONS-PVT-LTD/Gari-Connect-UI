import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Hostheader from '../Hostheader/Hostheader';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import LinearProgress from "@mui/material/LinearProgress";
import CarDetails from '../../Host/sharedComponents/carListing/CarLocation';


function Carlocation() {

  return (
    <div>
      <Hostheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              className: "w-full",
              marginTop: "40px",
              width: "1000px",
              height: "600px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <div className="mt-10 ml-10">
              <h1
                style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
              >
                List your car
              </h1>
              <p
                style={{ fontSize: "14px", fontWeight: "400px", color: "#667085" }}
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
                  value={30}
                />
              </Box>
            </div>

            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "20px",
                marginLeft: "10px",
              }}
            >

              Select location
            </h3>

            <CardContent>
              <CarDetails />
            </CardContent>

            <CardActions className="flex flex-row justify-end">
              <Button
                component={Link}
                to="/Cardetail"
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
                to="/features"
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
            </CardActions>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Carlocation;
