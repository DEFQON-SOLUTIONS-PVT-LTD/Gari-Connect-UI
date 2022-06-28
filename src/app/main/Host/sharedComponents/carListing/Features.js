import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActionArea } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const schema = yup.object().shape({
  Autocomplete: yup.array().required("Select a make."),
  TextField: yup.string().required("You must enter a value"),
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

  const data = watch();
  const event = "#FFFFFF";
  const [bg, setBg] = useState(null);
  const [status, setstatus] = useState(true);

  const change = () => {
    let newBg = "#FDF4F9";
    setBg(newBg);
    setstatus(!status);
  };
  const [ba, setBa] = useState(null);
  const [stat, setstat] = useState(true);
  const b = () => {
    let newBa = "#FDF4F9";
    setBa(newBa);
    setstat(!stat);
  };
  const [bb, setBb] = useState(null);
  const [statb, setstatb] = useState(true);
  const a = () => {
    let newBb = "#FDF4F9";
    setBb(newBb);
    setstatb(!statb);
  };
  const [bc, setBc] = useState(null);
  const [statc, setstatc] = useState(true);
  const c = () => {
    let newBc = "#FDF4F9";
    setBc(newBc);
    setstatc(!statc);
  };
  const [bd, setBd] = useState(null);
  const [statd, setstatd] = useState(true);
  const d = () => {
    let newBd = "#FDF4F9";
    setBd(newBd);
    setstatd(!statd);
  };
  const [be, setBe] = useState(null);
  const [state, setstate] = useState(true);
  const e = () => {
    let newBe = "#FDF4F9";
    setBe(newBe);
    setstate(!state);
  };
  const [bf, setBf] = useState(null);
  const [statf, setstatf] = useState(true);
  const f = () => {
    let newBf = "#FDF4F9";
    setBf(newBf);
    setstatf(!statf);
  };
  const [bh, setBh] = useState(null);
  const [stath, setstath] = useState(true);
  const h = () => {
    let newBh = "#FDF4F9";
    setBh(newBh);
    setstath(!stath);
  };
  const [bi, setBi] = useState(null);
  const [stati, setstati] = useState(true);
  const i = () => {
    let newBi = "#FDF4F9";
    setBi(newBi);
    setstati(!stati);
  };
  const [bj, setBj] = useState(null);
  const [statj, setstatj] = useState(true);
  const j = () => {
    let newBj = "#FDF4F9";
    setBj(newBj);
    setstatj(!statj);
  };
  const [bk, setBk] = useState(null);
  const [statk, setstatk] = useState(true);
  const k = () => {
    let newBk = "#FDF4F9";
    setBk(newBk);
    setstatk(!statk);
  };
  const [bl, setBl] = useState(null);
  const [statl, setstatl] = useState(true);
  const l = () => {
    let newBl = "#FDF4F9";
    setBl(newBl);
    setstatl(!statl);
  };

  return (
    <div>
      <Typography className="font-semibold text-sm mt-10">
        Mandatory features
      </Typography>
      <div className="flex space-x-10 mt-20">
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
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <Autocomplete
                popupIcon={<KeyboardArrowDownIcon />}
                className="mt-6"
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ height: 44 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="medium"
                    placeholder="Petrol"
                    sx={{
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
            )}
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
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 "
                placeholder="28"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="kmpl"
            control={control}
          />
        </FormControl>
      </div>
      <div className="flex space-x-10 mt-20">
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
            name="doors"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <Autocomplete
                popupIcon={<KeyboardArrowDownIcon />}
                className="mt-6"
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ height: 44 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="medium"
                    placeholder="4"
                    sx={{
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                )}
              />
            )}
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
            render={({ field }) => (
              <TextField
                className="rounded-lg mb-11 "
                placeholder="4"
                style={{ marginTop: "6px", height: "44px" }}
                sx={{
                  "& fieldset": {
                    borderRadius: "8px",
                  },
                }}
              />
            )}
            name="seats"
            control={control}
          />
        </FormControl>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-10 mt-16">
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: status ? event : bg,
          }}
        >
          <CardActionArea onClick={change}>
            {!status && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: stat ? event : ba,
          }}
        >
          <CardActionArea onClick={b}>
            {!stat && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: statb ? event : bb,
          }}
        >
          <CardActionArea onClick={a}>
            {!statb && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: statc ? event : bc,
          }}
        >
          <CardActionArea onClick={c}>
            {!statc && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: statd ? event : bd,
          }}
        >
          <CardActionArea onClick={d}>
            {!statd && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: state ? event : be,
          }}
        >
          <CardActionArea onClick={e}>
            {!state && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
        {/* </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 md:grid-cols-6"> */}
        <Card
          className="col-span-1 rounded-md shadow-sm"
          style={{
            maxWidth: "164px",
            maxHeight: "164px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
            backgroundColor: statf ? event : bf,
          }}
        >
          <CardActionArea onClick={f}>
            {!statf && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: stath ? event : bh,
          }}
        >
          <CardActionArea onClick={h}>
            {!stath && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: stati ? event : bi,
          }}
        >
          <CardActionArea onClick={i}>
            {!stati && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: statj ? event : bj,
          }}
        >
          <CardActionArea onClick={j}>
            {!statj && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: statk ? event : bk,
          }}
        >
          <CardActionArea onClick={k}>
            {!statk && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
            backgroundColor: statl ? event : bl,
          }}
        >
          <CardActionArea onClick={l}>
            {!statl && (
              <img
                className="mt-10 mr-10"
                style={{ float: "right" }}
                width="16"
                src="assets/images/logos/Checkbox.svg"
                alt="logo"
              />
            )}
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
