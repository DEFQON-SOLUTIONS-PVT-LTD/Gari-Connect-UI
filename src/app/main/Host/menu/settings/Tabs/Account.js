import {
  Button,
  FormControl,
  TextField,
  Typography,
  Box,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function GuestAccount() {
  const [image, setimage] = useState("assets/images/profile/Hassan.png");
  const [City, setCity] = React.useState("");
  const [Gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const GenderChange = (event) => {
    setGender(event.target.value);
  };

  const setImage = (e) => {
    const [file] = e.target.files;
    setimage(URL.createObjectURL(file));
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center border-b">
        <div className="">
          <Typography className="text-lg font-medium text-gray-900 ml-24">
            Account settings
          </Typography>
        </div>
        <div className="flex flex-row space-x-10 mr-10">
          <Button variant="outlined" className="rounded-4">
            Discard
          </Button>
          <Button
            variant="contained"
            className="rounded-4 text-white"
            style={{ backgroundColor: "#D22A8F" }}
          >
            Save changes
          </Button>
        </div>
      </div>

      <div className="w-full flex-row py-12 grid grid-cols-3 mb-96">
        <div className="flex flex-col justify-start text-center space-y-20 col-span-1 mt-36">
          <div>
            <img className="mx-auto w-224 h-224" src={image} alt="" />
          </div>

          <label htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              multiple
              onChange={setImage}
              type="file"
            />
            <Button variant="outlined" className="rounded-4" component="span">
              Change photo
            </Button>
          </label>
        </div>

        <div className="flex flex-col col-span-2">
          <Box
            className="flex space-x-12"
            component="form"
            sx={{
              "& > :not(style)": { width: "226px" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Typography className="text-sm font-medium text-gray-800 mb-4">
                First Name
              </Typography>
              <TextField
                fullWidth
                InputProps={{ className: "rounded-8 h-44 " }}
                placeholder="First Name"
              />
            </div>
            <div>
              <Typography className="text-sm font-medium text-gray-800 mb-4">
                Last Name
              </Typography>
              <TextField
                fullWidth
                InputProps={{ className: "rounded-8 h-44" }}
                placeholder="Last Name"
              />
            </div>
          </Box>
          <Box
            className=""
            component="form"
            sx={{
              "& > :not(style)": { width: "466px" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20  ">
              Enter Email Address
            </Typography>
            <FormControl fullWidth>
              <TextField
                InputProps={{ className: "rounded-8 h-44 w-full " }}
                placeholder="abc@gmail.com"
              />
            </FormControl>

            <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">
              Phone Number
            </Typography>
            <FormControl>
              <TextField
                InputProps={{ className: "rounded-8 h-44 w-full" }}
                placeholder="+92 | 3524584205"
              />
            </FormControl>

            <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">
              Street Address
            </Typography>
            <FormControl>
              <TextField
                InputProps={{ className: "rounded-8 h-44 w-full" }}
                placeholder="House# 26, St. 14, DHA"
              />
            </FormControl>

            <Box>
              <FormControl fullWidth>
                <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">
                  Select City
                </Typography>
                <Select
                  className="rounded-8 h-44 w-full"
                  value={City}
                  onChange={handleChange}
                  placeholder="Select City"
                  IconComponent={() => (
                    <KeyboardArrowDownIcon
                      className="mr-10"
                      style={{ color: "rgba(16, 24, 40, 1)" }}
                    />
                  )}
                >
                  <MenuItem value={1}>Lahore</MenuItem>
                  <MenuItem value={2}>Karachi</MenuItem>
                  <MenuItem value={3}>Islamabad</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth>
                <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">
                  Gender
                </Typography>
                <Select
                  className="rounded-8 h-44 w-full"
                  value={Gender}
                  IconComponent={() => (
                    <KeyboardArrowDownIcon
                      className="mr-10"
                      style={{ color: "rgba(16, 24, 40, 1)" }}
                    />
                  )}
                  onChange={GenderChange}
                  placeholder="Select Gender"
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                  <MenuItem value={3}>Others</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default GuestAccount;
