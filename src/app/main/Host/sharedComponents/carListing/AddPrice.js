import React from 'react';
import { Typography } from '@mui/material';
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";

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

// Inspired by blueprintjs
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

const AddPrice = () => {
    return (
        <div>
            <div className="mt-10">
                <Typography
                    className="text-lg font-semibold"
                    style={{ color: "#101828" }}
                >
                    Add price
                </Typography>
            </div>
            <div>
                <Typography
                    style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "#344054",
                        marginTop: "35px",
                    }}
                >
                    Price per day
                </Typography>
                <FormControl className="sm:w-3/5 w-full" variant="outlined">
                    <OutlinedInput
                        className="rounded-lg"
                        placeholder="Add price"
                        type="number"
                        style={{ marginTop: "6px", height: "44px" }}
                    />
                </FormControl>
                <Typography
                    className="text-xs font-normal mt-10"
                    style={{ color: "#737B7D" }}
                >
                    Suggestion: Minimmum price should be amount x and max is amount
                    x
                </Typography>
                <hr
                    className="sm:w-3/5 w-full"
                    style={{
                        marginTop: "25px",
                    }}
                />
                <div className="w-3/5">
                    <div className="sm:flex flex-row justify-between mt-32">
                        <div>
                            <Typography
                                className="text-sm font-medium mt-7"
                                style={{ color: "#101828" }}
                            >
                                With driver
                            </Typography>
                        </div>
                        <div>
                            <RadioGroup
                                defaultValue="female"
                                aria-labelledby="demo-customized-radios"
                                name="customized-radios"
                            >
                                <div className="flex space-x-12">
                                    <div className="flex">
                                        <FormControlLabel
                                            value="female"
                                            control={<BpRadio />}
                                            label=""
                                        />
                                        <Typography className="font-medium text-sm pt-6">
                                            Yes
                                        </Typography>
                                    </div>
                                    <div className="flex">
                                        <FormControlLabel
                                            value="male"
                                            control={<BpRadio />}
                                            label=""
                                        />
                                        <Typography className="font-medium text-sm pt-6">
                                            No
                                        </Typography>
                                    </div>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                <Typography
                    style={{
                        fontSize: "14px",
                        fontWeight: "500px",
                        color: "#344054",
                        marginTop: "35px",
                    }}
                >
                    Add driver price
                </Typography>
                <FormControl className="sm:w-3/5 w-full" variant="outlined">
                    <OutlinedInput
                        className="rounded-lg"
                        placeholder="Add price"
                        type="number"
                        style={{ marginTop: "6px", height: "44px" }}
                    />
                </FormControl>
                <div className="w-3/5">
                    <div className="flex flex-row justify-between mt-20">
                        <Typography
                            className="text-sm font-medium"
                            style={{ color: "#101828" }}
                        >
                            Total price:
                        </Typography>
                        <Typography
                            className="text-sm font-medium"
                            style={{ color: "#101828" }}
                        >
                            PKR 8500
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPrice