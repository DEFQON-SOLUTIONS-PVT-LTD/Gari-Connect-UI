import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Footer from "../Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import IconButton from "@mui/material/IconButton";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Navbar from "../Navbar/Navbar";

export default function Carddetail() {
  const [value, setValue] = React.useState(4);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center mt-24">
        <div>
          <img
            width="540"
            src="assets/images/logos/Carddetail1.svg"
            alt="logo"
          />
        </div>
        <div className="ml-20">
          <img src="assets/images/logos/Carddetail2.svg" alt="logo" />
          <img src="assets/images/logos/Carddetail4.svg" alt="logo" />
        </div>
        <div className="ml-20">
          <img src="assets/images/logos/Carddetail3.svg" alt="logo" />
          <img
            width="235"
            src="assets/images/logos/Carddetail5.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className="sm:flex flex-row justify-between">
        <div style={{marginLeft:"18%"}}>
          <div className="sm:flex" >
            <Typography className="font-normal text-2xl">
              Toyota Corolla Altis-2020
            </Typography>
            <Typography className="font-normal text-2xl sm:ml-68 ml-0">
              PKR 5000
              <b className="font-normal text-sm" style={{ color: "#667085" }}>
                per day
              </b>
            </Typography>
          </div>
          <div className="sm:flex space-x-96" >
            <Typography
              className="font-normal text-sm"
              style={{ color: "#667085" }}
            >
              Gulberg 3, Lahore
            </Typography>
            <Typography
              className="font-normal text-sm"
              style={{ marginLeft: "57%", color: "#667085" }}
            >
              est,total 15000*
            </Typography>
          </div>
          <div className="sm:flex" >
            <Rating name="read-only" value={value} max={4} readOnly />{" "}
            <Typography className="text-sm font-normal ml-6">
              <b>4.0</b>
              <b
                className="text-sm font-normal ml-6"
                style={{ color: "#667085" }}
              >
                (15 Trips)
              </b>
            </Typography>
            <div style={{ marginLeft:"43%"}}>
              <IconButton>
                <FavoriteBorderTwoToneIcon />
              </IconButton>
              <IconButton>
                <ContentCopyOutlinedIcon />
              </IconButton>
              <IconButton>
                <SendOutlinedIcon />
              </IconButton>
            </div>
          </div>
          <div className="w-full" >
            <hr />
            <div>
              <Typography className="text-base font-semibold mt-8">
                Descripton
              </Typography>
              <Typography style={{ color: "#667085" }}>
                Extremely comfortable and sporty at the same time: You can go<br></br>
                wrong with an AMG. You will not regret renting this amazing car.<br></br>
                Great drive around the city and throught the coast. Extremely<br></br>
                comfortable and sporty at the same time: You can go wrong with<br></br>
                an AMG.You will not regret renting this amazing car.Great drive<br></br>
                around the city and through the coast.
                <b style={{ color: "#D22A8F" }}>Read more</b>
              </Typography>
            </div>
            <hr className="mt-32" />
            <div>
              <Typography className="text-base font-semibold mt-8">
                Features
              </Typography>
              <div className="flex flex-row justify-between">
                <div>
                  <div className="flex space-x-4 mt-16">
                    <img
                      width="18px"
                      src="assets/images/logos/keylessentry.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Keylessentry
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/fapplecarplay.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Applecarplay
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/keylessentry.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Keylessentry
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/fapplecarplay.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Applecarplay
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/keylessentry.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Keylessentry
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="18px"
                      src="assets/images/logos/fapplecarplay.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Applecarplay
                    </Typography>
                  </div>
                </div>
                <div>
                  <div className="flex space-x-4 mt-16">
                    <img
                      width="20px"
                      src="assets/images/logos/fbluetooth.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Bluetooth
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="28px"
                      src="assets/images/logos/fusbcharge.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      USBcharge
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="20px"
                      src="assets/images/logos/fbluetooth.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Bluetooth
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="28px"
                      src="assets/images/logos/fusbcharge.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      USBcharge
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="20px"
                      src="assets/images/logos/fbluetooth.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      Bluetooth
                    </Typography>
                  </div>
                  <div className="flex space-x-4 mt-28">
                    <img
                      width="28px"
                      src="assets/images/logos/fusbcharge.svg"
                      alt="logo"
                    />
                    <Typography className="font-medium text-xs">
                      USBcharge
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-32" >
            <hr />
            <div>
              <Typography className="text-base font-semibold mt-8">
                Guidelines
              </Typography>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="flex space-x-4 mt-16">
                  <img
                    width="18px"
                    src="assets/images/logos/keylessentry.svg"
                    alt="logo"
                  />
                  <Typography className="font-medium text-xs">
                    Keylessentry
                  </Typography>
                </div>
                <div className="flex space-x-4 mt-28">
                  <img
                    width="18px"
                    src="assets/images/logos/fapplecarplay.svg"
                    alt="logo"
                  />
                  <Typography className="font-medium text-xs">
                    Applecarplay
                  </Typography>
                </div>
                <div className="flex space-x-4 mt-28">
                  <img
                    width="18px"
                    src="assets/images/logos/keylessentry.svg"
                    alt="logo"
                  />
                  <Typography className="font-medium text-xs">
                    Keylessentry
                  </Typography>
                </div>
                <div className="flex space-x-4 mt-28">
                  <img
                    width="18px"
                    src="assets/images/logos/fapplecarplay.svg"
                    alt="logo"
                  />
                  <Typography className="font-medium text-xs">
                    Applecarplay
                  </Typography>
                </div>
              </div>
              <div>
                <div className="flex space-x-4 mt-16">
                  <img
                    width="20px"
                    src="assets/images/logos/fbluetooth.svg"
                    alt="logo"
                  />
                  <Typography className="font-medium text-xs">
                    Bluetooth
                  </Typography>
                </div>
                <div className="flex space-x-4 mt-28">
                  <img
                    width="28px"
                    src="assets/images/logos/fusbcharge.svg"
                    alt="logo"
                  />
                  <Typography className="font-medium text-xs">
                    USBcharge
                  </Typography>
                </div>
                <div className="flex space-x-4 mt-28">
                  <img
                    width="20px"
                    src="assets/images/logos/fbluetooth.svg"
                    alt="logo"
                  />
                  <Typography className="font-medium text-xs">
                    Bluetooth
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-32" >
            <hr />
            <div className="flex mt-8">
              <Typography className="text-base font-semibold mt-8">
                Review and rating
              </Typography>
              <div className="mt-8 flex ml-8">
                <Rating name="read-only" value={value} max={4} readOnly />{" "}
                <Typography className="text-sm font-normal ml-8">
                  <b>4.0</b>
                </Typography>
              </div>
            </div>
          </div>

          <div
            className="flex w-full mt-32"
            
          >
            <img
              className="mt-8"
              src="assets/images/logos/Profile.svg"
              alt="logo"
            />
            <div>
              <div className="flex mt-8 ml-8">
                <Rating name="read-only" value={value} max={4} readOnly />{" "}
                <Typography className="text-sm font-normal ml-8">
                  <b>4.0</b>
                </Typography>
              </div>
              <div className="ml-8">
                <Typography className="font-medium text-xs">
                  Hassan Ali{" "}
                  <b
                    className="text-xs font-normal"
                    style={{ color: "#667085" }}
                  >
                    10-5-2022
                  </b>
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-24" >
            <Typography className="font-normal text-sm">
              thank you for every thing i appreciate you!
            </Typography>
          </div>
          <hr
            className="flex w-full mt-28"
            
          />
          <div
            className="flex w-full mt-28"
            
          >
            <img
              className="mt-8"
              src="assets/images/logos/Profile.svg"
              alt="logo"
            />
            <div>
              <div className="flex mt-8 ml-8">
                <Rating name="read-only" value={value} max={4} readOnly />{" "}
                <Typography className="text-sm font-normal ml-8">
                  <b>4.0</b>
                </Typography>
              </div>
              <div className="ml-8">
                <Typography className="font-medium text-xs">
                  Hassan Ali{" "}
                  <b
                    className="text-xs font-normal"
                    style={{ color: "#667085" }}
                  >
                    10-5-2022
                  </b>
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-24" >
            <Typography className="font-normal text-sm">
              thank you for every thing i appreciate you!
            </Typography>
          </div>
          <hr
            className="flex w-full mt-28"
            
          />
          <div
            className="flex w-full mt-28"
            
          >
            <img
              className="mt-8"
              src="assets/images/logos/Profile.svg"
              alt="logo"
            />
            <div>
              <div className="flex mt-8 ml-8">
                <Rating name="read-only" value={value} max={4} readOnly />{" "}
                <Typography className="text-sm font-normal ml-8">
                  <b>4.0</b>
                </Typography>
              </div>
              <div className="ml-8">
                <Typography className="font-medium text-xs">
                  Hassan Ali{" "}
                  <b
                    className="text-xs font-normal"
                    style={{ color: "#667085" }}
                  >
                    10-5-2022
                  </b>
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-24" >
            <Typography className="font-normal text-sm">
              thank you for every thing i appreciate you!
            </Typography>
          </div>
          <hr
            className="flex w-full mt-28"
            
          />
          <div
            className="flex w-full mt-28"
          >
            <img
              className="mt-8"
              src="assets/images/logos/Profile.svg"
              alt="logo"
            />
            <div>
              <div className="flex mt-8 ml-8">
                <Rating name="read-only" value={value} max={4} readOnly />{" "}
                <Typography className="text-sm font-normal ml-8">
                  <b>4.0</b>
                </Typography>
              </div>
              <div className="ml-8">
                <Typography className="font-medium text-xs">
                  Hassan Ali{" "}
                  <b
                    className="text-xs font-normal"
                    style={{ color: "#667085" }}
                  >
                    10-5-2022
                  </b>
                </Typography>
              </div>
            </div>
          </div>
          <div className="mt-24" >
            <Typography className="font-normal text-sm">
              thank you for every thing i appreciate you!
            </Typography>
          </div>
        </div>
        <div style={{marginRight:"16%"}}>
          <div>
            <Card className="sm:w-11/12 w-11/12 sm:ml-0 ml-40" style={{ height: "417px" }}>
              <Typography className="text-lg font-semibold ml-10 mt-10">
                Book your car
              </Typography>
              <hr />
              <CardContent>
                <div
                  className="sm:w-4/5 w-4/5 flex justify-center"
                  style={{ marginTop: "19px" }}
                >
                  <Button
                    fullWidth
                    style={{
                      backgroundColor: "rgba(210, 42, 143, 1)",
                      fontSize: "16px",
                    }}
                    className="h-11 text-white rounded-lg"
                  >
                    Sign in
                  </Button>
                </div>
                <div
                  className="sm:w-4/5 w-4/5 rounded-lg mt-96"
                  style={{ backgroundColor: "#EDF5FE" }}
                >
                  <div className="flex pt-10">
                    <img
                      className="pl-6"
                      src="assets/images/logos/Cancelationthunder.svg"
                      alt="logo"
                    />
                    <Typography
                      className="mt-6 ml-10  font-normal text-sm"
                      style={{ color: "#046AF3" }}
                    >
                      Free Cancellation
                    </Typography>
                  </div>
                  <div className="ml-48">
                    <Typography
                      className="font-normal text-xs"
                      style={{ color: "#667085" }}
                    >
                      Free cancellation, you can cancel you booking within
                      <br></br> 1 hour otherwise cancellation charges may apply.
                      <br></br> For more information go to{" "}
                      <a
                        href="#"
                        style={{ color: "black" }}
                        className="text-sm font-light"
                      >
                        Cancellation Policy
                      </a>
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10">
            <Card className="sm:w-11/12 11/12 sm:ml-0 ml-40">
              <Typography className="text-lg font-semibold ml-10 mt-10">
                Hosted By
              </Typography>
              <hr />
              <CardContent>
                <div className="flex">
                  <div className="flex w-full">
                    <img
                      className="mt-8"
                      width="69"
                      src="assets/images/logos/Profile.svg"
                      alt="logo"
                    />

                    <div>
                      <div className="ml-8">
                        <Typography className="font-semibold text-base mt-12">
                          Hassan Ali{" "}
                          <b
                            className="text-xs font-normal"
                            style={{ color: "#667085" }}
                          >
                            10-5-2022
                          </b>
                        </Typography>
                      </div>
                      <div className="flex ml-8">
                        <Rating
                          name="read-only"
                          value={value}
                          max={4}
                          readOnly
                        />{" "}
                        <Typography className="text-sm font-normal ml-8">
                          <b
                            className="font-normal text-xs"
                            style={{ color: "#667085" }}
                          >
                            4.0
                          </b>
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          className="font-normal text-xs"
                          style={{ color: "#667085" }}
                        >
                          487 trips- Joined Sep 2020
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start ml-auto">
                    <Typography className="text-12 mr-4" color="text.secondary">
                      Verified
                    </Typography>
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                      style={{ padding: 0 }}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 14,
                          color: "#D22A8F",
                        },
                        "& .MuiTouchRipple-root": { display: "none" },
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex mt-24 sm:ml-0 ml-28">
              <IconButton>
                <ShieldOutlinedIcon
                  fontSize="large"
                  style={{ color: "#D22A8F" }}
                />
              </IconButton>
              <Typography
                className="text-xs font-normal mt-10"
                style={{ color: "#667085" }}
              >
                To protect your payment, never transfer money or<br></br> communicate
                outside os the Gari Connect website or app.{" "}
              </Typography>
            </div>
            <div className="sm:ml-0 ml-68">
              <hr className="mt-20"/>
            </div>
            <Typography className="text-sm font-normal flex justify-center mt-20" style={{color:"#F04438"}}>
              Reportlisting
            </Typography>
          </div>
        </div>
      </div>
      
      <div>
        <img
          style={{ marginTop: "152px" }}
          className="w-full"
          src="assets/images/logos/Detailmap.svg"
          alt="logo"
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
