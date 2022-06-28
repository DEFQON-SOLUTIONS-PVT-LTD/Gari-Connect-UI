import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Collapse,
  Box,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ClearIcon from "@mui/icons-material/Clear";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import IconButton from "@mui/material/IconButton";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import TripDateRange from "../sharedComponents/TripDateRange";
import PropTypes from "prop-types";
import Drawer from '@mui/material/Drawer';

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose1 = () => {
    onClose(true);
  };

  return (
    <Dialog onClose={handleClose1} open={open}>
      <DialogTitle className="mx-auto">
        <img src="/assets/images/icons/requestSendicon.svg" alt="logo" />
      </DialogTitle>
      <DialogContent>
        <Typography className="text-18 font-medium text-center mb-10">
          Request sent to host
        </Typography>
        <Typography className="text-12 font-normal text-gray-500 text-center mb-24">
          Your booking dates will be updated after confirmation <br /> from your
          host.
        </Typography>
        <Button
          fullWidth
          variant="contained"
          size="large"
          className="rounded-md"
          style={{ backgroundColor: "#D22A8F" }}
        >
          Okay
        </Button>
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function EditDialog(props) {
  const { onClose, open } = props;

  const [openAlert, setOpenAlert] = React.useState(true);
  const [sent, setSent] = React.useState(false);
  const otpClickOpen = () => {
    setSent(true);
  };

  const otpClose = () => {
    setSent(false);
  };

  const handleClose = () => {
    onClose(true);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle className="flex justify-between items-center border-b">
        <Typography className="text-20 font-medium">Edit trip dates</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon className="text-black" />
        </IconButton>
      </DialogTitle>
      <DialogContent className="space-y-12">
        <TripDateRange />
        <div>
          <form>
          <TextField
          InputProps={{className:"rounded-lg"}}
            sx={{
              "& fieldset": {
                border: "1px solid #D0D5DD",
              },
            }}
            id="outlined-multiline-static"
            fullWidth
            multiline
            rows={5}
            placeholder="Write your problem"
          />
          </form>
        </div>
        <div className="space-y-12">
          <Box sx={{ width: "100%" }}>
            <Collapse in={openAlert}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                className="flex flex-row items-center rounded-8"
                icon={
                  <div
                    className="flex items-center justify-center w-28 h-28 rounded-full"
                    style={{ backgroundColor: "rgba(4, 106, 243, 0.08)" }}
                  >
                    <img src="/assets/images/icons/boltIcon.svg" alt="logo" />
                  </div>
                }
                severity="info"
              >
                <Typography className="text-14" sx={{ color: "#046AF3" }}>
                  Additional charges of cost PKR 3600 will be added
                </Typography>
              </Alert>
            </Collapse>
          </Box>
          <Button
          onClick={otpClickOpen}
            fullWidth
            variant="contained"
            size="large"
            className="rounded-md"
            style={{ backgroundColor: "#D22A8F" }}
          >
            Send request
          </Button>
          <SimpleDialog open={sent} onClose={otpClose}/>
        </div>
      </DialogContent>
    </Dialog>
  );
}

EditDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SwipeableTemporaryDrawer() {
  
  const [open1, setOpen1] = React.useState(false);

  
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="p-8"
      sx={{ width: 412 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <nav className="flex justify-between items-center py-16">
        <Typography className="text-black text-24 ml-28">
          Booking Details
        </Typography>
        <IconButton
        
         >
        <ClearIcon
          className="w-48 cursor-pointer"
          style={{ color: "#D22A8F" }}
        />
        </IconButton>
      </nav>
      <Divider />
      <div className="flex items-center space-x-16">
        <img
          src="/assets/images/GariConnect/carimage.png"
          alt="car"
          className="py-20 ml-28"
        />
        <div>
          <div className="flex space-x-8 ">
            <Stack spacing={1}>
              <Rating name="half-rating" max={4} defaultValue={4} />
            </Stack>
            <Typography className="text-black text-14 font-medium">
              4.0
            </Typography>
            <Typography className="" style={{ color: "#667085" }}>
              15 trips
            </Typography>
          </div>
          <div>
            <Typography className="text-16 font-medium">
              Honda Afb 8895-19
            </Typography>
            <Typography className="" style={{ color: "#667085" }}>
              Gulberg 35
            </Typography>
          </div>
        </div>
      </div>

      <Divider />
      <div className="py-16 ml-28">
        <div>
          <Typography className="text-black text-18 font-medium">
            Dates
          </Typography>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Typography className="text-16 font-medium">Sat, Oct 12</Typography>
            <Typography className="text-12">10:00 AM</Typography>
          </div>
          <div>
            <img src="/assets/images/GariConnect/Arrow.png" />
          </div>
          <div>
            <Typography className="text-16 font-medium">Sat, Oct 19</Typography>
            <Typography className="text-12">10:00 AM</Typography>
          </div>
        </div>
      </div>
      <Divider />

      <div className="py-10 ml-28">
        <Typography className="text-black text-18 font-medium">Host</Typography>
      </div>
      <div className="flex justify-between items-center py-12">
        <div className="flex">
          <img
            src="assets/images/profile/Avatar-0.svg"
            alt="Avatar"
            className="mx-20 h-60 w-60"
          />
          <div>
            <div className="flex space-x-8 ">
              <Typography className="text-16 font-medium">
                Olivia Rhye
              </Typography>
            </div>
            <div className="flex justify-between space-x-4">
              <Stack spacing={1}>
                <Rating name="half-rating" max={4} defaultValue={4} />
              </Stack>
              <Typography className="text-black text-14 font-medium ml-7">
                4.0
              </Typography>
            </div>
            <div>
              <Typography className="" style={{ color: "#046AF3" }}>
                5156151dd
              </Typography>
            </div>
          </div>
        </div>
        <div>
          <Typography
            className="text-14 text-center ml-auto rounded-full w-64"
            style={{ background: "#eefaf5" }}
          >
            15 trips
          </Typography>
          <Typography style={{ color: "#667085" }}>
            Member since Jun 8, 2021
          </Typography>
        </div>
      </div>
      <Divider />
      <div className="py-16">
        <Typography className="text-black text-18 font-medium ml-28">
          Trip details
        </Typography>
        <div className="ml-28 py-14">
          <div className="flex space-x-10">
            <Typography>With driver</Typography>
            <TaskAltIcon style={{ color: "#039855" }} />
          </div>
          <Typography className="py-8">Pick up</Typography>
          <div className="flex space-x-10">
            <Typography className=" font-bold">
              Alama Iqbal Airport, Lahore
            </Typography>
            <a
              href="https://maps.google.com/"
              target="_blank"
              style={{ color: "#D22A8F",backgroundColor:"white" }}
            >
              View on map
            </a>
          </div>
          <Typography className="py-8">Drop off</Typography>
          <div className="flex space-x-10">
            <Typography className=" font-bold">
              Ho# 38, Phase 6, DHA, Lahore
            </Typography>
            <a
              href="https://maps.google.com/"
              target="_blank"
              style={{ color: "#D22A8F",backgroundColor:"white" }}
            >
              View on map
            </a>
          </div>
        </div>
      </div>
      <Divider />

      <div className="py-16 space-y-9">
        <div>
          <Typography className="text-black text-18 font-medium ml-28">
            Price
          </Typography>
        </div>
        <div className="space-y-9 px-16 ml-12">
          <div className="flex justify-between items-center">
            <Typography className="">Driver fee</Typography>
            <Typography className="font-medium">Rs 2000</Typography>
          </div>
          <div className="flex justify-between items-center">
            <Typography className="">Pickup / drop off fee</Typography>
            <Typography className="font-medium">Rs 2000</Typography>
          </div>
          <div className="flex justify-between items-center">
            <Typography className="">7 Days car rent</Typography>
            <Typography className="font-medium">Rs 82000</Typography>
          </div>
          <div className="flex justify-between items-center">
            <Typography className="font-medium">Total</Typography>
            <Typography className="font-medium">Rs 12200</Typography>
          </div>
          <div
            className="flex justify-between items-center h-28"
            style={{ background: "#f1f1f2" }}
          >
            <Typography className="font-medium">You will pay</Typography>
            <Typography className="font-medium" style={{ color: "#D22A8F" }}>
              Rs 11000
            </Typography>
          </div>
        </div>
      </div>
      <div className=" flex justify-end space-x-8">
        <Button
          onClick={handleClickOpen1}
          className="border-1 h-36 w-160 rounded-4 stroke-2"
        >
          Rechedule Booking
        </Button>
        <EditDialog open={open1} onClose={handleClose1} />
        <Button
          className="border-1 h-36 w-128 rounded-4 stroke-2 text-white"
          style={{ background: "#D22A8F" }}
        >
          Cancel Booking
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <ArrowForwardSharpIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
