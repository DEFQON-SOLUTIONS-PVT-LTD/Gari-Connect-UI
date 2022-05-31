import React,{ useState }  from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RecieptPaymentDetails from '../../Host/sharedComponents/RecieptPaymentDetails';

function Receipt() {
  const [showdetailsstatus, setstatus] = useState(false);


  const showdetails = () => {
      setstatus(true);



  }
  const childToParent = (childdata) => {
      setstatus(childdata);
  }

  return (
    
    <div>
      {showdetailsstatus &&
                <RecieptPaymentDetails childToParent={childToParent} />


            }
      <Navbar />
      <div className="flex flex-row justify-center">
        <Card
          style={{
            marginTop: "150px",
            width: "524px",
            height: "250px",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <CardContent>
            <div className="flex flex-row justify-center ">
              <img width="48" src="assets/images/logos/popup.svg" alt="logo" />
            </div>
            <div>
              <Typography
                className="text-lg font-medium flex justify-center"
                style={{ color: "#101828" }}
              >
                Thanks Danish for booking
              </Typography>
              <Typography
                className="font-normal text-sm flex justify-center"
                style={{ color: "#667085" }}
              >
                Your car is listed successfully, please wait for
                <br/> approval, Thanks
              </Typography>
            </div>
            <div className="sm:mt-28 mt-16">
              <Button
               onClick={showdetails}
                style={{
                  backgroundColor: "rgba(210, 42, 143, 1)",
                  height: "44px",
                  fontSize: "16px",
                }}
                className="w-full text-white rounded-lg"
              >
                View receipt
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row justify-center ">
        <Typography
          className="absolute bottom-0 text-16 font-normal pb-10"
          style={{ color: "#98A2B3" }}
        >
          © 2022 GariConnect. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}
export default Receipt;
