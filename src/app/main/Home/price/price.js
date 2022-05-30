import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Hostheader from "../Hostheader/Hostheader";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { CardActions } from "@mui/material";
import AddPrice from '../../Host/sharedComponents/carListing/AddPrice';

export default function price() {
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
      <Card className="mt-32 w-3/4 mx-auto" style={{ height: "700px" }}>
        <div>
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
                value={100}
              />
            </Box>
          </div>
          <CardContent>
            <AddPrice />
          </CardContent>
          <CardActions className="flex flex-row justify-end">
            <div
              className="flex"
              style={{ marginTop: "34px", float: "right" }}
            >
              <Button
                component={Link}
                to="/image"
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
                onClick={handleClickOpen}
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
                Finish
              </Button>
              <Dialog
                className="w-full"
                style={{ borderRadius: "12px" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <div className="mx-auto mt-36">
                  <img
                    width="48"
                    src="assets/images/logos/popup.svg"
                    alt="logo"
                  />
                </div>
                <DialogTitle
                  className="mx-auto mt-32"
                  id="alert-dialog-title"
                >
                  {"Car listed succesfully"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Typography className="text-sm font-normal">
                      Your car is listed succesfully,please wait for
                    </Typography>
                    <Typography className="flex flex-row justify-center">
                      approval, Thanks
                    </Typography>
                  </DialogContentText>
                </DialogContent>
                <DialogActions className="mx-auto mt-32 mb-24">
                  <Button
                    component={Link}
                    to="/HostTabs"
                    className="rounded-lg"
                    style={{
                      border: "1px solid #D0D5DD",
                      height: "44px",
                      width: "170px",
                    }}
                    onClick={handleClose}
                  >
                    Go to dashboard
                  </Button>
                  <Button
                    component={Link}
                    to="/Cardetail"
                    className="rounded-lg"
                    style={{
                      color: "#FFFFFF",
                      background: "#D22A8F",
                      height: "44px",
                      width: "170px",
                    }}
                    onClick={handleClose}
                    autoFocus
                  >
                    List another car
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </CardActions>
        </div>
      </Card>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}
