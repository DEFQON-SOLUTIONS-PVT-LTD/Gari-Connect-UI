import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ClearIcon from "@mui/icons-material/Clear";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import IconButton from '@mui/material/IconButton';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

export default function SwipeableTemporaryDrawer() {
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
        <ClearIcon
          className="w-48 cursor-pointer"
          style={{ color: "#D22A8F" }}
        />
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
            <Typography
              className="underline cursor-pointer"
              style={{ color: "#D22A8F" }}
            >
              View on map
            </Typography>
          </div>
          <Typography className="py-8">Drop off</Typography>
          <div className="flex space-x-10">
            <Typography className=" font-bold">
              Ho# 38, Phase 6, DHA, Lahore
            </Typography>
            <Typography
              className="underline cursor-pointer"
              style={{ color: "#D22A8F" }}
            >
              View on map
            </Typography>
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
        <Button className="border-1 h-36 w-160 rounded-4 stroke-2">
          Rechedule Booking
        </Button>
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
          <IconButton onClick={toggleDrawer(anchor, true)}><ArrowForwardSharpIcon/></IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

