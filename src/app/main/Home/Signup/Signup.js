import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Signupheader from "../Signupheader/Signupheader";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AvatarUploader from "react-avatar-uploader";

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

function Signup() {
  const [values, setValues] = React.useState({
    password: "",
    confirmpassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowconfirmPassword = () => {
    setValues({
      ...values,
      showconfirmPassword: !values.showconfirmPassword,
    });
  };
  const handleMouseDownconfirmPassword = (event) => {
    event.preventDefault();
  };
  const [gender, setGender] = React.useState("");

  const genderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <Signupheader />
      <div>
        <div className="flex flex-row justify-center">
          <Card
            style={{
              marginTop: "150px",
              width: "524px",
              height: "auto",
              borderRadius: "4px",
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
                Welcome
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "400px",
                  color: "#667085",
                }}
              >
                To make account Please enter your details.
              </p>
            </div>
            <div className="mt-20">
              <hr style={{ width: "100%" }} />
            </div>
            <CardContent>
              <div style={{ marginTop: "26px" }}>
                <Button
                  style={{
                    height: "44px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    border: "1px solid #D0D5DD",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Google.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Google
                </Button>
              </div>
              <div style={{ marginTop: "6px" }}>
                <Button
                  style={{
                    border: "1px solid #D0D5DD",
                    fontSize: "16px",
                    height: "44px",
                    borderRadius: "8px",
                  }}
                  className="w-full"
                >
                  {" "}
                  <img
                    width="25px"
                    style={{ marginRight: "5px" }}
                    src="assets/images/GariConnect/Vector.png"
                    alt="logo"
                  ></img>{" "}
                  Sign up with Facebook
                </Button>
              </div>
              <div
                className="flex flex-row justify-center"
                style={{ marginTop: "28px" }}
              >
                <hr
                  style={{
                    width: "45%",
                    marginTop: "8px",
                    marginRight: "12px",
                  }}
                />
                <p
                  style={{
                    color: "#98A2B3",
                  }}
                >
                  or
                </p>
                <hr
                  style={{
                    width: "45%",
                    marginTop: "8px",
                    marginLeft: "12px",
                  }}
                />
              </div>
              <div className="flex space-x-10">
                <FormControl fullWidth variant="outlined">
                  <Typography
                    style={{
                      marginTop: "14px",
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    First name
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    placeholder="First name"
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
                    Last name
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    placeholder="Last name"
                    style={{ marginTop: "6px", height: "44px" }}
                  />
                </FormControl>
              </div>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Enter email address
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11"
                  placeholder="abc@gmail.com"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  Phone number
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11"
                  placeholder="+92 | 3524584205"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <FormControl fullWidth>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                    marginTop: "17px",
                  }}
                >
                  City
                </Typography>
                <Autocomplete
                  popupIcon={
                    <KeyboardArrowDownIcon
                      style={{ color: "rgba(16, 24, 40, 1)" }}
                    />
                  }
                  className="mt-6"
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ height: 44 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="medium"
                      placeholder="Honda"
                      sx={{
                        "& fieldset": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  )}
                />
              </FormControl>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginTop: "17px",
                    }}
                  >
                    Gender
                  </Typography>
                  <Select
                    className="mt-6"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    onChange={genderChange}
                    sx={{ borderRadius: "8px", height: "44" }}
                    IconComponent={() => (
                      <KeyboardArrowDownIcon
                        className="mr-10"
                        style={{ color: "rgba(16, 24, 40, 1)" }}
                      />
                    )}
                  >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div style={{ marginTop: "25px" }}>
                <FormControl fullWidth variant="outlined">
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    Enter password
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange("password")}
                    style={{ marginTop: "6px", height: "44px" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div style={{ marginTop: "10px" }}>
                <FormControl fullWidth variant="outlined">
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginTop: "8px",
                    }}
                  >
                    Re-enter password
                  </Typography>
                  <OutlinedInput
                    className="rounded-lg"
                    id="outlined-adornment-confirmPassword"
                    type={values.showconfirmPassword ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={values.confirmpassword}
                    onChange={handleChange("confirmpassword")}
                    style={{ marginTop: "6px", height: "44px" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirmpassword visibility"
                          onClick={handleClickShowconfirmPassword}
                          onMouseDown={handleMouseDownconfirmPassword}
                          edge="end"
                        >
                          {values.showconfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <Typography
                className="font-medium text-sm mt-16"
                style={{ color: "#344054" }}
              >
                Upload profile photo
              </Typography>
              <div className="flex mt-12">
                <AvatarUploader size={59} uploadURL="http://localhost:3000" />
                <Typography
                  className="mt-16 ml-12 font-medium text-sm"
                  style={{ color: "#D22A8F" }}
                >
                  Browse
                </Typography>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button
                  component={Link}
                  to="/Verifyaccount"
                  style={{
                    height: "44px",
                    background: "#D22A8F",
                    color: "#FFFFFF",
                    fontSize: "16px",
                  }}
                  className="w-full rounded-lg"
                >
                  Sign up
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
                  Already have an acount?
                  <a
                    href="/Signin"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#D22A8F",
                      textAlign: "center",
                      marginTop: "24px",
                      textDecoration: "none",
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-60">
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

export default Signup;
