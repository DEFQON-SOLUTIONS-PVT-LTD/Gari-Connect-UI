import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActionArea } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

// const defaultFeaturesFlags =  {   bluetooth:falsae      }

// --------------------------------------------------------------

const schema = yup.object().shape({
  door: yup.string().required("Please select the doors"),
  fuel: yup.string().required("You must select fuel type"),
  kmpl: yup.string().required("Please select KMPL "),
  seats: yup.string().required("You must enter number of seats"),
});

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

const Features = () => {
  const { handleSubmit, register, reset, control, watch, formState } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  const features = {
    blueTooth: {
      id: 1,
      availability: false,
    },
    keylessEntry: {
      id: 2,
      availability: false,
    },
    appleCar: {
      id: 3,
      availability: false,
    },
    USB: {
      id: 4,
      availability: false,
    },
    backupCamera: {
      id: 5,
      availability: false,
    },
    auxInput: {
      id: 6,
      availability: false,
    },
    tollPass: {
      id: 7,
      availability: false,
    },
    heatedSeat: {
      id: 8,
      availability: false,
    },
    sunRoof: {
      id: 9,
      availability: false,
    },
    wheelDriver: {
      id: 10,
      availability: false,
    },
    GPS: {
      id: 11,
      availability: false,
    },
    auxInput2: {
      id: 12,
      availability: false,
    },
  };

  const [flags, setFlags] = useState(features);

  const handleCardClick = (key, value, identity) => {
    setFlags({ ...flags, [key]: { id: identity, availability: !value } });
  };
  return (
    <div>
      <Typography className="font-semibold text-sm mt-10">
        Mandatory features
      </Typography>
      <div className="sm:flex sm:space-x-10 space-x-0 mt-20">
        <FormControl fullWidth>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            Fuel type
          </Typography>
          <Controller
            name="fuel"
            render={({ field }) => (
              <FormControl error={!!errors.fuel} required fullWidth>
                <Select
                  className="mt-6 rounded-8 h-52 w-full"
                  IconComponent={() => (
                    <KeyboardArrowDownIcon
                      className="mr-10"
                      style={{ color: "rgba(16, 24, 40, 1)" }}
                    />
                  )}
                  {...field}
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="Auto">Auto</MenuItem>
                  <MenuItem value="Manual">Manual</MenuItem>
                </Select>
                <FormHelperText>{errors?.fuel?.message}</FormHelperText>
              </FormControl>
            )}
            control={control}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            KMPL
          </Typography>
          <Controller
            name="kmpl"
            control={control}
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 "
                placeholder="28"
                {...field}
                error={!!errors.kmpl}
                required
                helperText={errors?.kmpl?.message}
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />
        </FormControl>
      </div>
      <div className="sm:flex sm:space-x-10 space-x-0 mt-20">
        <FormControl fullWidth>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            Doors
          </Typography>
          <Controller
            name="door"
            render={({ field }) => (
              <FormControl error={!!errors.door} required fullWidth>
                <Select
                  className="mt-6 rounded-8 h-52 w-full"
                  IconComponent={() => (
                    <KeyboardArrowDownIcon
                      className="mr-10"
                      style={{ color: "rgba(16, 24, 40, 1)" }}
                    />
                  )}
                  {...field}
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="Auto">Auto</MenuItem>
                  <MenuItem value="Manual">Manual</MenuItem>
                </Select>
                <FormHelperText>{errors?.door?.message}</FormHelperText>
              </FormControl>
            )}
            control={control}
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            Seats
          </Typography>
          <Controller
            name="seats"
            control={control}
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 "
                placeholder="4"
                {...field}
                error={!!errors.seats}
                required
                helperText={errors?.seats?.message}
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
          />
        </FormControl>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-10 mt-16 sm:ml-0 ml-80">
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.blueTooth.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[0],
                flags.blueTooth.availability,
                flags.blueTooth.id
              );
            }}
          >
            {flags.blueTooth.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}

            <CardContent>
              <img
                className="mx-auto"
                style={{ marginTop: "35px" }}
                width="40%"
                src="assets/images/logos/fbluetooth.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{
                  fontSize: "14px",
                  fontWeight: "500px",
                }}
              >
                Bluetooth
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.keylessEntry.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[1],
                flags.keylessEntry.availability,
                flags.keylessEntry.id
              );
            }}
          >
            {flags.keylessEntry.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <div>
                <img
                  className="mt-40 mx-auto"
                  width="40%"
                  src="assets/images/logos/keylessentry.svg"
                  alt="logo"
                />
                <Typography
                  className="text-center mt-20"
                  style={{ fontSize: "14px", fontWeight: "500px" }}
                >
                  Keyless entry
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.appleCar.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[2],
                flags.appleCar.availability,
                flags.appleCar.id
              );
            }}
          >
            {flags.appleCar.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}

            <CardContent>
              <img
                className="mx-auto mt-48"
                width="30%"
                src="assets/images/logos/fapplecarplay.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Apple Carplay
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.USB.availability ? "#FDF4F9" : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[3],
                flags.USB.availability,
                flags.USB.id
              );
            }}
          >
            {flags.USB.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}

            <CardContent>
              <img
                className="mx-auto mt-48"
                width="70%"
                src="assets/images/logos/fusbcharge.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                USB charger
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.backupCamera.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[4],
                flags.backupCamera.availability,
                flags.backupCamera.id
              );
            }}
          >
            {flags.backupCamera.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-40"
                width="20%"
                src="assets/images/logos/fbackupcamera.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-10"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Backup camera
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.auxInput.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[5],
                flags.auxInput.availability,
                flags.auxInput.id
              );
            }}
          >
            {flags.auxInput.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-40"
                width="40%"
                src="assets/images/logos/fauxinput.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                AUX input
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 md:grid-cols-6 mt-16 sm:ml-0 ml-80">
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.tollPass.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[6],
                flags.tollPass.availability,
                flags.tollPass.id
              );
            }}
          >
            {flags.tollPass.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="40%"
                src="assets/images/logos/ftollpass.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Toll pass
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.heatedSeat.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[7],
                flags.heatedSeat.availability,
                flags.heatedSeat.id
              );
            }}
          >
            {flags.heatedSeat.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="35%"
                src="assets/images/logos/fheatedseat.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Heated seats
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.sunRoof.availability ? "#FDF4F9" : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[8],
                flags.sunRoof.availability,
                flags.sunRoof.id
              );
            }}
          >
            {flags.sunRoof.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="50%"
                src="assets/images/logos/fsunroof.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                Sunroof
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.wheelDriver.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[9],
                flags.wheelDriver.availability,
                flags.wheelDriver.id
              );
            }}
          >
            {flags.wheelDriver.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="40%"
                src="assets/images/logos/fwheeldriver.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                All-Wheel drive
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.GPS.availability ? "#FDF4F9" : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[10],
                flags.GPS.availability,
                flags.GPS.id
              );
            }}
          >
            {flags.GPS.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-44"
                width="40%"
                src="assets/images/logos/fgps.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                GPS
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: flags.auxInput2.availability
              ? "#FDF4F9"
              : "#FFFFFF",
          }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(
                Object.keys(features)[11],
                flags.auxInput2.availability,
                flags.auxInput2.id
              );
            }}
          >
            {flags.auxInput2.availability ? (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            ) : null}
            <CardContent>
              <img
                className="mx-auto mt-40"
                width="40%"
                src="assets/images/logos/fauxinput.svg"
                alt="logo"
              />
              <Typography
                className="text-center mt-20"
                style={{ fontSize: "14px", fontWeight: "500px" }}
              >
                AUX input
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Features;
