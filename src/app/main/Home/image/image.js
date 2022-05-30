import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import Hostheader from "../Hostheader/Hostheader";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Footer from "../Footer/Footer";
import { CardActions } from "@mui/material";
import AddImages from '../../Host/sharedComponents/carListing/AddImages';

export default function image() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Hostheader />
      <div
        style={{ marginBottom: "250px" }}
        className="flex flex-col items-center"
      >
        <Card
          style={{
            marginTop: "40px",
            width: "70%",
            height: "auto",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div className="ml-20 mt-10">
            <Typography
              style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
            >
              List your car
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "400px",
                color: "#667085",
              }}
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
                value={90}
              />
            </Box>
          </div>
          <div className="sm:flex flex-row justify-between mt-10 ml-20">
            <Typography
              className="text-lg font-semibold"
              style={{ color: "#101828" }}
            >
              Add images
            </Typography>

            <Button
              onClick={handleClickOpen}
              className="text-base font-medium mt-10 mr-32"
              style={{ color: "#D22A8F" }}
            >
              See ideal example
            </Button>
          </div>

          <AddImages />

          <CardActions className="flex flex-row justify-end">
            <div className="flex mt-84 mb-20 mr-20" style={{ float: "right" }}>
              <Button
                component={Link}
                to="/availability"
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
                to="/price"
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="rounded-xl"
      >
        <DialogTitle className="mx-auto">
          <Typography
            className="text-sm font-semibold"
            style={{ color: "#101828" }}
          >
            Photos ideal example
          </Typography>
        </DialogTitle>
        <hr />
        <DialogContent>
          <div>
            <img src="assets/images/logos/Idealcar1.svg" alt="logo" />
          </div>
          <div className="flex mt-20 space-x-12">
            <img src="assets/images/logos/Idealcar2.svg" alt="logo" />
            <img src="assets/images/logos/Idealcar3.svg" alt="logo" />
            <img src="assets/images/logos/Idealcar4.svg" alt="logo" />
            <img src="assets/images/logos/Idealcar5.svg" alt="logo" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className="mx-auto"
            style={{
              width: "86px",
              height: "44px",
              backgroundColor: "#D22A8F",
              color: "#FFFFFF",
              borderRadius: "8px",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}
