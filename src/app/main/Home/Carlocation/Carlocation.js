import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import Hostheader from '../Hostheader/Hostheader';
import { Link} from "react-router-dom";
import Footer from "../Footer/Footer";
import LinearProgress from "@mui/material/LinearProgress";



function Carlocation() {
 
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Hostheader/>
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              className: "w-full",
              marginTop: "40px",
              width: "1000px",
              height: "600px",
              border: "1px solid rgba(195, 203, 205, 0.42)",
            }}
          >
              <div className="mt-10 ml-10">
          <h1
            style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
          >
            List your car
          </h1>
          <p
            style={{ fontSize: "14px", fontWeight: "400px", color: "#667085" }}
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
                  value={30}
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
            
          Select location
        </h3>
            <CardContent>
              <FormControl fullWidth>
              
                <Typography
                className="mt-20"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  City
                </Typography>
                <Select
                className="rounded-lg"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  placeholder="Select a car make"
                  onChange={handleChange}
                  
                  style={{marginTop: "6px", height: "44px" }}
                  
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
              
              <Typography
                style={{
                    marginTop: "14px",
                  fontSize: "14px",
                  fontWeight: "500px",
                  color: "#344054",
                }}
              >
                Area
              </Typography>
              <Select
              className="rounded-lg"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                placeholder="Select a car make"
                onChange={handleChange}
                
                style={{marginTop: "6px", height: "44px" }}
                
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
                  Street address
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="House# 15, St.58"
                  style={{ marginTop: "6px", height: "44px" }}
                />
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
                  Zip code
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="5400"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
             
              <div className="flex" style={{marginTop: "27px",position:"right",float:"right"}}>
                <Button
                 component={Link}
                 to="/Cardetail"
                  style={{
                    width: "99px",
                    height: "44px",
                    background: "#FFFFFF",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "500px",
                    borderRadius: "8px",
                    border:"1px solid #D0D5DD",
                  }}
                >
                  Back
                </Button>
                <Button
                component={Link}
                to="/features"
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
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Carlocation;
