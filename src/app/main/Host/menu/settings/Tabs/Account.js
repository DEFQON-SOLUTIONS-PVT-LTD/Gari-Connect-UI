import { Button, FormControl, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';


function Account() {

    const [image, setimage] = useState("assets/images/profile/Hassan.png");

 

    const setImage = (e) => {

        const [file] = e.target.files;
        setimage(URL.createObjectURL(file));
    }

    const Input = styled('input')({
        display: 'none',
    });

    return (
        <div className="">
            <div className="flex flex-row justify-between items-center border-b">
                <div className="">
                    <Typography className="text-lg font-medium text-gray-900 ml-24">Account settings</Typography>
                </div>
                <div className="flex flex-row space-x-10 mr-10">
                    <Button variant="outlined" className="rounded-4">Discard</Button>
                    <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                </div>
            </div>

            <div className="w-full flex-row py-12 grid grid-cols-3 mb-96">
                <div className="flex flex-col justify-end text-center space-y-20 col-span-1">
                    <div>
                        <img className="mx-auto w-224 h-224" src={image} alt="" />
                    </div>

                    <label htmlFor="contained-button-file">
                        <Input id="contained-button-file" multiple onChange={setImage} type="file" />
                        <Button variant="outlined" className="rounded-4" component="span">
                            Change photo
                        </Button>
                    </label>
                </div>

                <div className="flex flex-col col-span-2">
                    <Typography className="text-sm font-medium text-gray-800 mb-4">Name</Typography>
                    <FormControl>
                        <TextField
                            sx={{ maxWidth: '64ch' }}
                            size="small"
                            placeholder="Hassan Ali"
                        />
                    </FormControl>

                    <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">Phone number</Typography>
                    <FormControl>
                        <TextField
                            sx={{ maxWidth: '64ch' }}
                            size="small"
                            placeholder="03456805566"
                        />
                    </FormControl>

                    <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">Email</Typography>
                    <FormControl>
                        <TextField
                            sx={{ maxWidth: '64ch' }}
                            size="small"
                            placeholder="abcd@gmail.com"
                        />
                    </FormControl>

                    <Typography className="text-sm font-medium text-gray-800 mb-4 mt-20">Address</Typography>
                    <FormControl>
                        <TextField
                            sx={{ maxWidth: '64ch' }}
                            size="small"
                            placeholder="31 street, Gulberg 2, Lahore"
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    )
}

export default Account