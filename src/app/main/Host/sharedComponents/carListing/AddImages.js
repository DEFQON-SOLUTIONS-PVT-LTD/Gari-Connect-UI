import React from 'react';
import { styled } from "@mui/material/styles";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Card, CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const AddImages = () => {
    const Input = styled("input")({
        display: "none",
    });

    return (
        <div>
            <Card
                className="sm:w-3/12 w-11/12 sm:ml-20 ml-10 mt-20"
                style={{
                    height: "161px",
                    border: "1px solid rgba(195, 203, 205, 0.42)",
                }}
            >
                <CardContent>
                    <label
                        className="flex flex-row justify-center mt-24"
                        htmlFor="icon-button-file"
                    >
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >
                            <CloudUploadOutlinedIcon />
                        </IconButton>
                    </label>
                    <div className="ml-16">
                        <p className="text-xs font-normal" style={{ color: "#667085" }}>
                            <b
                                className="text-sm font-medium"
                                style={{ color: "#D22A8F" }}
                            >
                                Click to upload
                            </b>
                            or drag and drop SVG,PNG,JPG or GIF (max,800*400px)
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddImages