import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActionArea } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";

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

const Features = () => {
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
        <FormControl fullWidth variant="outlined">
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500px",
              color: "#344054",
            }}
          >
            MPG
          </Typography>
          <TextField
            placeholder="28"
            className="mt-6"
            sx={{
              "& fieldset": {
                borderRadius: "8px",
              },
            }}
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
          <TextField
            placeholder="4"
            className="mt-6"
            sx={{
              "& fieldset": {
                borderRadius: "8px",
              },
            }}
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
