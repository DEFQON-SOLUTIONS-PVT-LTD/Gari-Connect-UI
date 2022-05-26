import React from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Hostheader from '../Hostheader/Hostheader';
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";



const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#D22A8F',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export default function () {
  return (
    <div>
      <Hostheader/>
      <Card
      className="mx-auto mt-40 w-3/4"
      style={{height:"750px"}}
      >
      <div style={{marginBottom:"250px"}}>
        <div className="mt-20 ml-10">
          <Typography
          
            style={{ fontSize: "24px", fontWeight: "600", color: " #101828"}}
          >
            List your car
          </Typography>
        </div>
        <div className="ml-10">
          <Typography
            style={{ fontSize: "14px", fontWeight: "400px", color: "#667085" }}
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
                  value={75}
                />
              </Box>
            </div>
        <div className="ml-10">
          <Typography
            className="text-lg font-semibold"
            style={{ color: "#101828",}}
          >
            Set availability
          </Typography>
        </div>
        <CardContent>
        <div className="flex flex-row justify-between mt-24">
        <div >
          <Typography className="text-sm font-medium ">Monday</Typography>
        </div>
        <div style={{float:"right"}}>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          </div>
        <hr
        className="w-full mt-20"
        />
          <div className="flex flex-row justify-between mt-24">
        <div >
          <Typography className="text-sm font-medium ">Tuesday</Typography>
        </div>
        <div style={{float:"right"}}>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          </div>
        <hr
        className="w-full mt-20"
        />
           <div className="flex flex-row justify-between mt-24">
        <div >
          <Typography className="text-sm font-medium ">Wednesday</Typography>
        </div>
        <div style={{float:"right"}}>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          </div>
        <hr
        className="w-full mt-20"
        />
           <div className="flex flex-row justify-between mt-24">
        <div >
          <Typography className="text-sm font-medium ">Thursday</Typography>
        </div>
        <div style={{float:"right"}}>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          </div>
        <hr
        className="w-full mt-20"
        />
            <div className="flex flex-row justify-between mt-24">
        <div >
          <Typography className="text-sm font-medium ">Friday</Typography>
        </div>
        <div style={{float:"right"}}>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          </div>
        <hr
        className="w-full mt-20"
        />
            <div className="flex flex-row justify-between mt-24">
        <div >
          <Typography className="text-sm font-medium ">Saturday</Typography>
        </div>
        <div style={{float:"right"}}>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          </div>
        <hr
        className="w-full mt-20"
        />
            <div className="flex flex-row justify-between mt-24">
        <div >
          <Typography className="text-sm font-medium ">Sunday</Typography>
        </div>
        <div style={{float:"right"}}>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
          </div>
          </div>
        <hr
        className="w-full mt-20"
        />
        
        
         <div className="flex flex-row"style={{marginTop:"34px",float:"right"}}>
                <Button
                component={Link}
                to="/guideline"
                className="ml-10 w-96"
                  style={{
                    
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
                to="/image"
                className="ml-5 w-96"
                  style={{
                    
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
      </div>
      
      </Card>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
      
    </div>
  );
}
