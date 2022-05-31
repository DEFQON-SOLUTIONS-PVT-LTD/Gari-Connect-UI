import React from 'react';
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CarLocation = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const defaultProps = {
        center: {
            lat: 31.5204,
            lng: 74.3587
        },
        zoom: 14
    };

    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-16'>
                <div className='mt-12'>
                    <div style={{ height: '45vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyAGQbucY82Bx3X6CJCItNb-2dyHi1Ovuyk" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>


                </div>

                <div className=''>


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

                            style={{ marginTop: "6px", height: "44px" }}

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

                            style={{ marginTop: "6px", height: "44px" }}

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
                </div>


            </div>
        </div>
    )
}

export default CarLocation