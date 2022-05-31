import React from 'react';
import { Button, Typography, Rating } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";


const NewRequests = () => {
    const [value, setValue] = React.useState(4);

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4">
                <TableContainer>
                    <Table sx={{ minWidth: 1300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className="border-t bg-gray-50">
                                <TableCell className="text-12 font-medium ">Guest</TableCell>
                                <TableCell className="text-12 font-medium">Date</TableCell>

                                <TableCell className="text-12 font-medium">
                                    Booking ID
                                </TableCell>
                                <TableCell className="text-12 font-medium">Car</TableCell>
                                <TableCell className="text-12 font-medium">
                                    Booking dates
                                </TableCell>
                                <TableCell className="text-12 font-medium">Price</TableCell>
                                <TableCell className="text-12 font-medium">Guest Ratings</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow component={Link} to="/BookingDetails" style={{ textDecoration: 'none' }} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-0.svg" alt="" />
                                    <div>
                                        <Typography className="text-10 font-medium ml-8">Olivia Rhye</Typography>
                                        <Typography className="text-10 font-normal ml-8" style={{ color: '#D22A8F' }}>5156151dd</Typography>
                                    </div>
                                </TableCell>
                                <TableCell className="text-10 text-gray-500 font-normal">21 March 2022</TableCell>
                                <TableCell className="text-12 font-normal" style={{ color: '#D22A8F' }}>5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">
                                    Honda Afb 8895- 19
                                </TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-10 font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-10 font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">15000 PKR</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        max={4}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Accept</Button>
                                </TableCell>
                            </TableRow>


                            <TableRow component={Link} to="/BookingDetails" style={{ textDecoration: 'none' }} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-0.svg" alt="" />
                                    <div>
                                        <Typography className="text-10 font-medium ml-8">Olivia Rhye</Typography>
                                        <Typography className="text-10 font-normal ml-8" style={{ color: '#D22A8F' }}>5156151dd</Typography>
                                    </div>
                                </TableCell>
                                <TableCell className="text-10 text-gray-500 font-normal">21 March 2022</TableCell>
                                <TableCell className="text-12 font-normal" style={{ color: '#D22A8F' }}>5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">
                                    Honda Afb 8895- 19
                                </TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-10 font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-10 font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">15000 PKR</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        max={4}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Accept</Button>
                                </TableCell>
                            </TableRow>


                            <TableRow component={Link} to="/BookingDetails" style={{ textDecoration: 'none' }} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-0.svg" alt="" />
                                    <div>
                                        <Typography className="text-10 font-medium ml-8">Olivia Rhye</Typography>
                                        <Typography className="text-10 font-normal ml-8" style={{ color: '#D22A8F' }}>5156151dd</Typography>
                                    </div>
                                </TableCell>
                                <TableCell className="text-10 text-gray-500 font-normal">21 March 2022</TableCell>
                                <TableCell className="text-12 font-normal" style={{ color: '#D22A8F' }}>5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">
                                    Honda Afb 8895- 19
                                </TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-10 font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-10 font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">15000 PKR</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        max={4}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Accept</Button>
                                </TableCell>
                            </TableRow>






                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default NewRequests