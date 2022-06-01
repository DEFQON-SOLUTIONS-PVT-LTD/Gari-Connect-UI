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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function Payment() {
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
              height: "523px",
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
                  value={100}
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
              Add payment method
            </h3>
            <CardContent>
              <FormControl fullWidth>
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  Choose card
                </Typography>
                <Select
                  className="rounded-lg"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  placeholder="Select a car make"
                  onChange={handleChange}
                  style={{ marginTop: "6px", height: "44px" }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  Enter card number
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="155485541554"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <div className="flex space-x-10">
                <div className="mt-16">
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginBottom: "6px",
                    }}
                  >
                    Expiry date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <FormControl className="w-1/2" variant="outlined">
                  <Typography
                    style={{
                      marginTop: "14px",
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    CSV
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg mb-11"
                    placeholder="849"
                    style={{ marginTop: "6px", height: "44px" }}
                  />
                </FormControl>
              </div>
              <div className="flex flex-row justify-between mt-28">
                <div>
                  <Button
                    component={Link}
                    to=""
                    className="ml-10"
                    style={{
                      width: "127px",
                      height: "44px",
                      background: "#FFFFFF",
                      color: "#101828",
                      fontSize: "16px",
                      fontWeight: "500px",
                      borderRadius: "8px",
                      border: "1px solid #D22A8F",
                    }}
                  >
                    Skip for now
                  </Button>
                </div>
                <div
                  className="flex"
                >

                  <Button
                    component={Link}
                    to="/Attachments"
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
                   
                    className="ml-10"
                    style={{
                      width: "80px",
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
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Payment;