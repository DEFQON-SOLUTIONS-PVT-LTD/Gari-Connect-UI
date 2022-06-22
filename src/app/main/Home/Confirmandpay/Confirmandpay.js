import {
  Button,
  Card,
  CardContent,
  Typography,
  Rating,
  Divider,
} from "@mui/material";
import Footer from "app/main/Home/Footer/Footer";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import Navbar from "../Navbar/Navbar";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#D22A8F",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#D22A8F",
  },
});

function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function Confirmandpay() {
  const [expanded, setExpanded] = React.useState(false);

  const confirmChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [value, setValue] = React.useState(4);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [alert, setAlert] = React.useState(false);
  const verifyClickAlert = () => {
    setAlert(true);
  };

  const verifyClose = () => {
    setAlert(false);
  };
  const [card, setCard] = React.useState("");

  const paymentChange = (event) => {
    setCard(event.target.value);
  };

  const [pay, setPay] = React.useState(null);

  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-32">
          <div className="flex flex-row  px-24 py-24 sm:ml-28 md:ml-28 lg:ml-96">
            <ArrowBackIcon size="large" className="mr-20 sm:ml-44 ml-0" />
            <Typography className="text-2xl font-normal font-Gilroy-Medium">
              Confirm and pay
            </Typography>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20"
            style={{ marginLeft: "10%" }}
          >
            <div className="col-span-1">
            <div>
      <Accordion expanded={expanded === 'panel1'} onChange={confirmChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={confirmChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={confirmChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={confirmChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
              <div className="w-10/12">
                {/* <div className="flex justify-between mt-32">
                  <div>
                    <Typography
                      className="text-sm font-medium mt-7"
                      style={{ color: "#101828" }}
                    >
                      Life insurance
                    </Typography>
                    <Typography
                      className="text-sm font-normal"
                      style={{ color: "#667085" }}
                    >
                      PKR 200 will be charge for insurance
                    </Typography>
                  </div>
                  <RadioGroup
                    defaultValue="female"
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                  >
                    <div className="flex space-x-10">
                      <div className="flex">
                        <FormControlLabel
                          value="female"
                          control={<BpRadio />}
                          label=""
                        />
                        <Typography className="mt-8 text-sm font-medium">
                          Yes
                        </Typography>
                      </div> */}
                {/* <div className="flex">
                        <FormControlLabel
                          value="male"
                          control={<BpRadio />}
                          label=""
                        />
                        <Typography className="mt-8 text-sm font-medium">
                          NO
                        </Typography>
                      </div>
                    </div>
                  </RadioGroup>
                </div> */}
                {/* <hr className="mt-20" /> */}
              </div>
              <div
                className="flex mt-24 rounded-lg h-64"
                style={{
                  backgroundColor: "rgba(4, 106, 243, 0.07)",
                  border: "1px solid #046AF3",
                  width: "489px",
                }}
              >
                <ShieldOutlinedIcon
                  className="my-auto ml-24"
                  fontSize="large"
                  style={{ color: "#046AF3" }}
                />
                <Typography
                  className="text-xs font-normal my-auto ml-20"
                  style={{ color: "#101828" }}
                >
                  To protect your payment, never transfer money or communicate
                  <br></br> outside os the Gari Connect website or app.
                </Typography>
              </div>
              
            </div>
            <div className="col-span-1" style={{ marginRight: "25%" }}>
              <Card
                className="shadow-none rounded-md border ml-auto"
                sx={{ maxWidth: "533px", minHeight: "510px" }}
              >
                <CardContent>
                  <div className="flex flex-row">
                    <div className="flex sm:flex-col md:flex-row flex-col md:items-center">
                      <div className="flex">
                        <div>
                        <img
                        width="180"
                        className="mr-12"
                        src="assets/images/logos/HondaAfb.svg"
                        alt=""
                      />
                        </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-4">
                          <Rating
                            className="text-16"
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            max={4}
                          />
                          <Typography
                            className="text-sm font-normal ml-8"
                            color="text.black"
                          >
                            4.0
                          </Typography>
                          <Typography
                            className="text-sm pl-8"
                            style={{ color: "#667085" }}
                          >
                            15 trips
                          </Typography>
                        </div>
                        <Typography className="text-16 font-600 font-Manrope">
                          Honda Afb 8895-19
                        </Typography>

                        <Typography className="text-12" color="text.secondary">
                          Gulberg 3
                        </Typography>
                      </div>
                    </div>
                  </div>
                  </div>

                  <hr className="mt-20" />
                  <div className="flex justify-between">
                    <div className="mt-24">
                    <Typography className="text-lg font-medium">Sat, Oct 12</Typography>
                    <Typography className="text-sm" style={{color:'#667085'}}>10:00 AM</Typography>
                    </div>
                    <div className="mt-48">
                    <img
                        className="mr-12"
                        src="assets/images/logos/Arrow 12.svg"
                        alt=""
                      />
                    </div>
                    <div className="mt-24">
                    <Typography className="text-lg font-medium">Sat, Oct 19</Typography>
                    <Typography className="text-sm" style={{color:'#667085'}}>10:00 AM</Typography>
                    </div>
                    <div className="mt-48">
                      <IconButton className="w-44 h-44" style={{border: "1px solid #D0D5DD"}}><EditOutlinedIcon style={{color:"#D22A8F"}}/></IconButton>
                    </div>
                  </div>
                  <hr className="mt-20" />
                  <div className="mt-16">
                    <Typography className="text-xl">Price details</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Trip price
                    </Typography>
                    <Typography className="text-base">Rs 4000/day</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Trip fee
                    </Typography>
                    <Typography className="text-base">5 days</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Life insurance
                    </Typography>
                    <Typography className="text-base">Rs 200/day</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Pick / Drop off
                    </Typography>
                    <Typography className="text-base">Rs 8200/-</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Total per day
                    </Typography>
                    <Typography className="text-base">Rs 8200/-</Typography>
                  </div>

                  <Divider className="my-16" />

                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Total 7 day price
                    </Typography>
                    <Typography className="text-xl font-semibold" style={{color:"#373F41"}}>
                      Rs 8200/-
                    </Typography>
                  </div>

                  <div className="flex flex-row justify-end space-x-10 mt-44 mb-10">
                    <Button
                      variant="contained"
                      className="rounded-4 text-white w-full"
                      style={{ backgroundColor: "#D22A8F" }}
                    >
                      Pay now
                    </Button>
                  </div>

                  <Dialog
                    style={{ borderRadius: "12px", height: "90%" }}
                    open={alert}
                    onClose={verifyClose}
                  >
                    <div className="flex flex-row justify-center">
                      <Card
                        style={{
                          width: "524px",
                          height: "350px",
                          border: "1px solid rgba(195, 203, 205, 0.42)",
                        }}
                      >
                        <div style={{ marginTop: "21px", textAlign: "center" }}>
                          <h1
                            style={{
                              fontSize: "24px",
                              fontWeight: "600",
                              color: " #101828",
                            }}
                          >
                            Verify
                          </h1>
                          <p
                            style={{
                              fontSize: "14px",
                              fontWeight: "400px",
                              color: "#667085",
                              marginTop: "10px",
                            }}
                          >
                            Please enter 6 digit code send on your phone
                            034******59
                          </p>
                        </div>
                        <div className="w-full mt-20 ">
                          <hr />
                        </div>
                        <CardContent>
                          <div className="flex space-x-10">
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                              <OutlinedInput className="rounded-lg sm:mt-24 mt-16 text-2xl font-medium sm:h-64 h-48 sm:w-64 w-48" />
                            </FormControl>
                          </div>
                          <div className="sm:mt-28 mt-16">
                            <Button
                              component={Link}
                              to="/Receipt"
                              style={{
                                backgroundColor: "rgba(210, 42, 143, 1)",
                                height: "44px",
                                fontSize: "16px",
                              }}
                              className="w-full text-white rounded-lg"
                            >
                              Submit
                            </Button>
                          </div>
                          <div className="sm:mt-20 mt-24">
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                textAlign: "center",
                                marginTop: "24px",
                              }}
                            >
                              Didn't receive code?
                              <b
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#D22A8F",
                                  textAlign: "center",
                                  marginTop: "24px",
                                }}
                              >
                                Resend Code
                              </b>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
}
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
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
