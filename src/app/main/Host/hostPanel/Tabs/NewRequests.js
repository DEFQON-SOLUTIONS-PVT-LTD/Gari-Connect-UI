import React from 'react';
import { Button, Typography, Rating } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const NewRequests = () => {
    const [value, setValue] = React.useState(4);

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4">
                <TableContainer className="">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className="border-t bg-gray-50">
                                <TableCell className="text-12 text-gray-500 font-medium">Guest</TableCell>
                                <TableCell className="text-12 text-gray-500 font-medium">Booking ID</TableCell>
                                <TableCell className="text-12 text-gray-500 font-medium">Car</TableCell>
                                <TableCell className="text-12 text-gray-500 font-medium">Location</TableCell>
                                <TableCell className="text-12 text-gray-500 font-medium">Booking dates</TableCell>
                                <TableCell className="text-12 text-gray-500 font-medium">Price</TableCell>
                                <TableCell className="text-12 text-gray-500 font-medium">Rating</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-0.svg" />
                                    <Typography className="text-xs font-medium ml-12">Olivia Rhye</Typography>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Honda Afb 8895- 19</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Gulberg</TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
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
                                <TableCell className="flex space-x-12">
                                    <Button variant="outlined" size="medium" className="text-10 rounded" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Accept</Button>
                                </TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-1.svg" />
                                    <Typography className="text-xs font-medium ml-12">Phoenix Baker</Typography>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Honda Afb 8895- 19</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Gulberg</TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
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
                                <TableCell className="flex space-x-12">
                                    <Button variant="outlined" size="medium" className="text-10 rounded" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Accept</Button>
                                </TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-2.svg" />
                                    <Typography className="text-xs font-medium ml-12">Lana Steiner</Typography>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Honda Afb 8895- 19</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Gulberg</TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
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
                                <TableCell className="flex space-x-12">
                                    <Button variant="outlined" size="medium" className="text-10 rounded" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Accept</Button>
                                </TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-3.svg" />
                                    <Typography className="text-xs font-medium ml-12">Demi Wilkinson</Typography>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Honda Afb 8895- 19</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Gulberg</TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
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
                                <TableCell className="flex space-x-12">
                                    <Button variant="outlined" size="medium" className="text-10 rounded" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Accept</Button>
                                </TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className="flex flex-row items-center">
                                    <img src="assets/images/profile/Avatar-4.svg" />
                                    <Typography className="text-xs font-medium ml-12">Natali Craig</Typography>
                                </TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">5156151dd</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Honda Afb 8895- 19</TableCell>
                                <TableCell className="text-12 text-gray-500 font-normal">Gulberg</TableCell>
                                <TableCell className="">
                                    <div className="flex flex-row">
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
                                            <span className="text-12 text-gray-500 font-normal">7 Pm</span>
                                        </Typography>
                                        <img className="mx-12" src="assets/images/icons/Arrow6.svg" alt="" />
                                        <Typography className="flex flex-col">
                                            <span className="text-sm font-normal text-gray-900">21 March 2022</span>
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
                                <TableCell className="flex space-x-12">
                                    <Button variant="outlined" size="medium" className="text-10 rounded" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Decline</Button>
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