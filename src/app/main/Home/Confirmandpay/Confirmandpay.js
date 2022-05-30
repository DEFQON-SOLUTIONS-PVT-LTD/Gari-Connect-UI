import { Button, Card, CardContent, Typography, Rating, Divider } from '@mui/material'
import Footer from 'app/main/Home/Footer/Footer'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import IconButton from "@mui/material/IconButton";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { Link} from "react-router-dom";
import Radio from "@mui/material/Radio";
import Navbar from "../Navbar/Navbar";


export default function Confirmandpay() {
    const [value, setValue] = React.useState(4);

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [selectedValue, setSelectedValue] = React.useState("a");
    const radioChange = (event) => {
        setSelectedValue(event.target.value);
      };

    return (
        <div>
        <Navbar/>
        <div>
            <div className="mt-32">
                    <div className="flex flex-row items-center px-24 py-24 ml-96">
                        <ArrowBackIcon size="large" className="mr-20 ml-44"/>
                        <Typography className="text-2xl font-normal font-Gilroy-Medium">Confirm and pay</Typography>
                    </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20" style={{marginLeft:"10%"}}>
                            <div className="col-span-1">
                            <Typography className="font-normal text-2xl">
                            Your trip
                        </Typography>
                        <div className="w-10/12">
                                <div className="flex justify-between mt-36 mb-32">
                                    <div>
                                    <Typography className="text-18 font-medium mb-6">Dates</Typography>
                                    <Typography className="text-sm font-normal" color="text.secondary">May 13 – 20</Typography>
                                    </div>
                                     <div>
                                    <Typography component={Link} to="#" className="text-base font-normal" style={{color:"#D22A8F"}}>Edit</Typography>
                                    </div>
                                </div>
                <div className="flex justify-between mt-32">
                  <div>
                    <Typography
                      className="text-sm font-medium mt-7"
                      style={{ color: "#101828" }}
                    >
                      Life insurance
                    </Typography>
                    <Typography className="text-sm font-normal" style={{color:"#667085"}}>PKR 200 will be charge for insurance</Typography>
                  </div>
                  <div className="flex">
                    <div className="flex">
                      <Radio
                        style={{ color: "#D22A8F" }}
                        checked={selectedValue === "a"}
                        onChange={radioChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                        size="small"
                      />
                      <Typography
                        className="text-sm font-medium mt-12"
                        style={{ color: "#101828" }}
                      >
                        Yes
                      </Typography>
                    </div>
                    <div className="flex">
                      <Radio
                        style={{ color: "#D22A8F" }}
                        checked={selectedValue === "b"}
                        onChange={radioChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "B" }}
                        size="small"
                      />
                      <Typography
                        className="text-sm font-medium mt-12"
                        style={{ color: "#101828" }}
                      >
                        No
                      </Typography>
                    </div>
                  </div>
                </div>
                <hr className="mt-20"/>
                         </div>
                                <div className="mt-28">
                                    <Card className="shadow-none rounded-md border mb-24 w-7/12" sx={{minHeight: 133 }}>
                                        <div className="border-b">
                                            <Typography className="text-12 font-medium px-20 py-10" style={{color:"#101828"}}>Hosted By</Typography>
                                        </div>
                                        <CardContent>
                                            <div className="flex flex-row">
                                                <div className="flex sm:flex-col md:flex-row flex-col md:items-center">
                                                    <img className="mr-12" style={{ maxWidth: 70, maxHeight: 70 }} src="assets/images/profile/HassanAli.png" alt="" />
                                                    <div className="flex flex-col">
                                                        <Typography className="text-16 font-600 font-Manrope">Hassan Ali</Typography>
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
                                                            <Typography className="text-12 font-normal ml-8" color="text.secondary">4.0</Typography>
                                                        </div>
                                                        <Typography className="text-12" color="text.secondary">487 trips - Joined Sep 2020</Typography>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-start ml-auto">
                                                    <Typography className="text-12 mr-4" color="text.secondary">Verified</Typography>
                                                    <Checkbox
                                                        icon={<RadioButtonUncheckedIcon />}
                                                        checkedIcon={<CheckCircleIcon />}
                                                        checked={checked}
                                                        onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        style={{ padding: 0 }}
                                                        sx={{
                                                            '& .MuiSvgIcon-root': { fontSize: 14, color: '#D22A8F' },
                                                            '& .MuiTouchRipple-root': { display: 'none' },
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex mt-24">
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
                To protect your payment, never transfer money or
                communicate<br></br> outside os the Gari Connect website or app.
              </Typography>
            </div>
                            </div>
                            <div className="col-span-1" style={{marginRight:"25%"}}>
                                <Card className="shadow-none rounded-md border ml-auto" sx={{ maxWidth: '533px',minHeight:"544px" }}>
                                    <CardContent>
                                    <div className="flex flex-row">
                                                <div className="flex sm:flex-col md:flex-row flex-col md:items-center">
                                                    <img className="mr-12" src="assets/images/logos/Honda.svg" alt="" />
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
                                                            <Typography className="text-sm font-normal ml-8" color="text.black">4.0</Typography>
                                                            <Typography className="text-sm pl-8" style={{ color:"#667085"}}>15 trips</Typography>
                                                        </div>
                                                        <Typography className="text-16 font-600 font-Manrope">Honda Afb 8895-19</Typography>
                                                       
                                                        <Typography className="text-12" color="text.secondary">Gulberg 3</Typography>
                                                    </div>
                                                </div>
                                                </div>

                                        <hr className="pt-20"/>
                                        <div className="mt-16">
                                            <Typography className="text-xl">Price details</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Rate per day</Typography>
                                            <Typography className="text-base">Rs 4000/day</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Booked for</Typography>
                                            <Typography className="text-base">5 days</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Life insurance</Typography>
                                            <Typography className="text-base">Rs 200/day</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Subtotal</Typography>
                                            <Typography className="text-base">Rs 8200/-</Typography>
                                        </div>

                                        <Divider className="my-16" />

                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Total price</Typography>
                                            <Typography className="text-base font-semibold">Rs 8200/-</Typography>
                                        </div>

                                        <div className="flex flex-row justify-end space-x-10 mt-44 mb-10">
                                            <Button variant="contained" className="rounded-4 text-white w-full" style={{ backgroundColor: '#D22A8F' }}>Pay now</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
            </div>

            <Footer />
        </div >
        </div>
    )
}
