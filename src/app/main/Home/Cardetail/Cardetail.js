import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Hostheader from "../Hostheader/Hostheader";
import Footer from "../Footer/Footer";
import LinearProgress from "@mui/material/LinearProgress";
import CarDetails from '../../Host/sharedComponents/carListing/CarDetails';

function Cardetail() {

  return (
    <div>
      <Hostheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              className: "w-full px-5",
              marginTop: "40px",
              width: "1001px",
              height: "800px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <div className="mt-20 ml-20">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
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
                  value={15}
                />
              </Box>
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "20px",
                marginLeft: "30px",
                color: "#101828",
              }}
            >
              Car Details
            </h3>

            <CardContent>
              <CarDetails />
            </CardContent>

            <CardActions className="flex flex-row justify-end">
              <div style={{ marginTop: "40px", float: "right" }}>
                <Button
                  className="mr-12"
                  component={Link}
                  to="/Carlocation"
                  style={{
                    width: "150px",
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
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Cardetail;
