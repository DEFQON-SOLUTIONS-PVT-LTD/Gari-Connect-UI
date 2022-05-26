import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Footer from "../Footer/Footer";
import Hostheader from "../Hostheader/Hostheader";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function features() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
      <Hostheader />
      <div className="flex flex-col items-center">
        <Card
          style={{
            marginTop: "40px",
            width: "70%",
            height: "auto",
            border: "1px solid rgba(195, 203, 205, 0.42)",
          }}
        >
          <div className="ml-20 mt-10">
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: " #101828" }}
            >
              List your car
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400px",
                color: "#667085",
              }}
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
                value={45}
              />
            </Box>
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "10px",
              marginLeft: "20px",
            }}
          >
            Select features
          </h3>
          <CardContent>
         
            <div className="sm:flex flex-row justify-center sm:space-x-20 sm:ml-0 ml-32">
              <Card
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: status ? event : bg,
                }}
              >
                <CardActionArea onClick={change}>
               { !status &&<img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>

                    <img
                      className="mx-auto"
                      style={{ marginTop: "35px" }}
                      width="40%"
                      src="assets/images/logos/fbluetooth.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-28"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        marginTop: "21px",
                      }}
                    >
                      Bluetooth
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: stat ? event : ba,
                }}
              >
                <CardActionArea onClick={b}>
                { !stat && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <div>
                      <img
                        className="mt-40 mx-auto"
                        width="40%"
                        src="assets/images/logos/keylessentry.svg"
                        alt="logo"
                      />
                      <Typography
                        className="mt-24 ml-24"
                        style={{ fontSize: "14px", fontWeight: "500px" }}
                      >
                        Keyless entry
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: statb ? event : bb,
                }}
              >
                <CardActionArea onClick={a}>
                { !statb && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-48"
                      width="30%"
                      src="assets/images/logos/fapplecarplay.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-20 mt-28"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      Apple Carplay
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: statc ? event : bc,
                }}
              >
                <CardActionArea onClick={c}>
                { !statc && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-48"
                      width="70%"
                      src="assets/images/logos/fusbcharge.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-24 mt-24"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      USB charger
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: statd ? event : bd,
                }}
              >
                <CardActionArea onClick={d}>
                { !statd && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-40"
                      width="20%"
                      src="assets/images/logos/fbackupcamera.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-12 mt-16"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      Backup camera
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: state ? event : be,
                }}
              >
                <CardActionArea onClick={e}>
                { !state && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-40"
                      width="40%"
                      src="assets/images/logos/fauxinput.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-32 mt-32"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      AUX input
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="sm:flex flex-row justify-center sm:space-x-20 sm:ml-0 ml-32">
              <Card
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: statf ? event : bf,
                }}
              >
                <CardActionArea onClick={f}>
                { !statf && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-44"
                      width="40%"
                      src="assets/images/logos/ftollpass.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-32 mt-28"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      Toll pass
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: stath ? event : bh,
                }}
              >
                <CardActionArea onClick={h}>
                { !stath && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent >
                    <img
                      className="mx-auto mt-44"
                      width="35%"
                      src="assets/images/logos/fheatedseat.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-20 mt-28"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      Heated seats
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: stati ? event : bi,
                }}
              >
                <CardActionArea onClick={i}>
                { !stati && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-44"
                      width="50%"
                      src="assets/images/logos/fsunroof.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-32 mt-40"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      Sunroof
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: statj ? event : bj,
                }}
              >
                <CardActionArea onClick={j}>
                { !statj && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-44"
                      width="40%"
                      src="assets/images/logos/fwheeldriver.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-12 mt-28"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      All-Wheel driver
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: statk ? event : bk,
                }}
              >
                <CardActionArea onClick={k}>
                { !statk && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-44"
                      width="40%"
                      src="assets/images/logos/fgps.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-52 mt-20"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      GPS
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                className="mr-16"
                style={{
                  marginTop: "15px",
                  width: "164px",
                  height: "164px",
                  border: "1px solid rgba(195, 203, 205, 0.42)",
                  backgroundColor: statl ? event : bl,
                }}
              >
                <CardActionArea onClick={l}>
                { !statl && <img
                       className="mt-10 mr-10"
                      style={{float:"right"}}
                      width="16"
                      src="assets/images/logos/Checkbox.svg"
                      alt="logo"
                    /> }
                  <CardContent>
                    <img
                      className="mx-auto mt-40"
                      width="40%"
                      src="assets/images/logos/fauxinput.svg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-32 mt-32"
                      style={{ fontSize: "14px", fontWeight: "500px" }}
                    >
                      AUX input
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="flex flex-row justify-end sm:mr-28 mr-16 mt-36 mb-20">
              <div>
                <Button
                  component={Link}
                  to="/Carlocation"
                  style={{
                    width: "99px",
                    height: "44px",
                    background: "#FFFFFF",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "500px",
                    borderRadius: "8px",
                    border: "1px solid #D0D5DD",
                  }}
                >
                  Back
                </Button>
              </div>
              <div>
                <Button
                  component={Link}
                  to="/guideline"
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
            </div>
          </CardContent>
        </Card>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default features;
