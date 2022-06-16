import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Typography from "@mui/material/Typography";
import Hostheader from "../../Home/Hostheader/Hostheader";
import Footer from "../../Home/Footer/Footer";
import Button from "@mui/material/Button";
import Cardetail from "../sharedComponents/carListing/CarDetails";
import CarLocation from "../sharedComponents/carListing/CarLocation";
import Features from "../sharedComponents/carListing/Features";
import Guidelines from "../sharedComponents/carListing/Guidelines";
import Availability from "../sharedComponents/carListing/Availability";
import AddImages from "../sharedComponents/carListing/AddImages";
import AddPrice from "../sharedComponents/carListing/AddPrice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";

function getSteps() {
  return [
    "Car details",
    "Location",
    "Features",
    "Guideline",
    "Set availability",
    "Add image",
    "Set prices",
  ];
}

function getStepContent(steps) {
  switch (steps) {
    case 0:
      return <Cardetail />;
    case 1:
      return <CarLocation />;
    case 2:
      return <Features />;
    case 3:
      return <Guidelines />;
    case 4:
      return <Availability />;
    case 5:
      return <AddImages />;
    case 6:
      return <AddPrice />;
  }
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 5,
    left: "calc(-50% + 7px)",
    right: "calc(50% + 7px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgba(210, 42, 143, 1) 0%,rgba(210, 42, 143, 1) 50%,rgba(210, 42, 143, 1) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgba(210, 42, 143, 1) 0%,rgba(210, 42, 143, 1) 50%,rgba(210, 42, 143, 1) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 14,
  height: 14,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "end",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgba(210, 42, 143, 1) 0%, rgba(210, 42, 143, 1) 50%, rgba(210, 42, 143, 1)100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgba(210, 42, 143, 1) 0%, rgba(210, 42, 143, 1) 50%, rgba(210, 42, 143, 1)100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {};

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function ListSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = getSteps();

  return (
    <div>
      <Hostheader />
      <div className="flex justify-center">
        <div className="text-center mt-56">
          <Typography
            style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
          >
            List your car
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "400px",
              color: "#667085",
            }}
          >
            Please enter your detail to list your car
          </Typography>
        </div>
      </div>
      <Stack sx={{ width: "100%" }}>
        <Stepper
        className="mt-40"
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* <Button onClick={handleNext} disabled={activeStep === 6}>Next</Button>
      <Button onClick={handleBack} disabled={activeStep === 0}>Back</Button> */}

        <div>
          {activeStep === steps.length ? (
            <div>
              All steps completed
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div className="flex flex-row justify-center">
                <Card
                  style={{
                    className: "w-full px-5",
                    marginTop: "40px",
                    width: "1001px",
                    border: "1px solid rgba(195, 203, 205, 0.42)",
                  }}
                >
                  <CardContent>{getStepContent(activeStep)}</CardContent>
                  <div className="mt-36 flex mb-24 justify-end">
                  <CardActions>
                    <Button className="w-72 h-44 rounded-lg" style={{border:"1px solid #C3CBCD"}} disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="w-72 h-44 rounded-lg"
                      style={{color:"#FFFFFF",backgroundColor:"#D22A8F"}}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </CardActions>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </Stack>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}
