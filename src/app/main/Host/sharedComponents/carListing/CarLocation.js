import React from 'react';
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

const CarLocation = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
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
    )
}

export default CarLocation