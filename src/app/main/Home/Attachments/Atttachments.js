import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import Hostheader from "../Hostheader/Hostheader";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import LinearProgress from "@mui/material/LinearProgress";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

function Attachments() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(null);
  return (
    <div>
      <Hostheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              className: "w-full",
              marginTop: "40px",
              width: "524px",
              height: "650px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
            <div className="mt-10 ml-10 text-center">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: " #101828",
                }}
              >
                Create account
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                Please enter details to create account
              </p>
            </div>
            <div>
              <Box sx={{ color: "#D22A8F" }}>
                <LinearProgress
                  color="inherit"
                  className="mt-32"
                  variant="determinate"
                  value={60}
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
              Attachments
            </h3>
            <CardContent>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  CNIC number
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="34605 2012136 9"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <div className="flex mt-36">
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginBottom: "6px",
                    }}
                  >
                    Valid till
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Basic example"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            "& fieldset": {
                              borderRadius: "8px",
                              height:"48px"
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="mt-44 ml-28">
                  <img src="assets/images/logos/filepicker.svg" alt="logo" />
                </div>
                <div className="mt-44 ml-8">
                  <Typography
                    className="text-sm font-medium"
                    style={{ color: "#D22A8F" }}
                  >
                    Attach CNIC
                  </Typography>
                </div>
              </div>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  Driving license
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="34605 2012136 9"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <div className="flex mt-36">
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginBottom: "6px",
                    }}
                  >
                    Valid till
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Basic example"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params}
                      sx={{
                        "& fieldset": {
                          borderRadius: "8px",
                          height:"48px"
                        },
                      }} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className="mt-44 ml-28">
                  <img src="assets/images/logos/filepicker.svg" alt="logo" />
                </div>
                <div className="mt-44 ml-8">
                  <Typography
                    className="text-sm font-medium"
                    style={{ color: "#D22A8F" }}
                  >
                    Attach CNIC
                  </Typography>
                </div>
              </div>
              <div
                className="flex"
                style={{ marginTop: "27px", position: "right", float: "right" }}
              >
                <Button
                  component={Link}
                  to="Personaldetails"
                  className="ml-10"
                  style={{
                    width: "73px",
                    height: "44px",
                    background: "#FFFFFF",
                    color: "#101828",
                    fontSize: "16px",
                    fontWeight: "500px",
                    borderRadius: "8px",
                    border: "1px solid #C3CBCD",
                  }}
                >
                  Back
                </Button>
                <Button
                  component={Link}
                  to="/Payment"
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
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Attachments;
