import React, { useState } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function SimpleDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose(true);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle className="mx-auto">
                <img src="/assets/images/icons/Featuredicon.svg" alt="logo" />
            </DialogTitle>
            <DialogContent>
                <Typography className="text-18 font-medium text-center mb-10">Cancel booking</Typography>
                <Typography className="text-13 font-normal text-gray-500 text-center mb-24">
                    Are you sure you want to booking? Cancellation<br /> charges PKR 500 will applied, for more information<br /> read <span style={{ color: '#D22A8F' }}>cancallation policy</span>
                </Typography>
                <div className="flex items-center justify-center space-x-12">
                    <Button variant="outlined" size="large" className="w-160 min-h-28 rounded-md">Yes Cancel</Button>
                    <Button variant="contained" size="large" className="w-160 min-h-28 rounded-md" style={{ backgroundColor: '#D22A8F' }}>No</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

function OTPDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose(true);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle className="mx-auto">
                <Typography className="text-18 font-medium text-center">OPT code sent to your phone</Typography>
            </DialogTitle>
            <DialogContent>
                <Typography className="text-14 font-normal text-gray-500 text-center mb-24">Please give the OPT code sent to your phone<br /> number to your host to get your car.</Typography>
                <Button fullWidth variant="contained" size="large" className="rounded-md" style={{ backgroundColor: '#D22A8F' }}>Resend</Button>
            </DialogContent>
        </Dialog>
    );
}

OTPDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

const Upcoming = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4">
                <TableContainer>
                    <Table sx={{ minWidth: 1300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className="border-t bg-gray-50">
                                <TableCell className="text-12 font-medium ">Host</TableCell>
                                <TableCell className="text-12 font-medium">
                                    <div className='flex flex-row items-center ml-9'>
                                        Date
                                        <div className=' flex flex-col items-center px-5'>
                                            <img src="/assets/images/icons/polygonup.svg" className='p-2 w-12' alt="Up" />
                                            <img src="/assets/images/icons/polygondown.svg" className='p-2 w-12' alt="Down" />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-12 font-medium">
                                    Booking ID
                                </TableCell>
                                <TableCell className="text-12 font-medium">Car</TableCell>
                                <TableCell className="text-12 font-medium">
                                    <div className='flex flex-row items-center ml-9'>
                                        Booking dates
                                        <div className=' flex flex-col items-center px-5'>
                                            <img src="/assets/images/icons/polygonup.svg" className='p-2 w-12' alt="Up" />
                                            <img src="/assets/images/icons/polygondown.svg" className='p-2 w-12' alt="Down" />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-12 font-medium">
                                    <div className='flex flex-row items-center ml-9'>
                                        Price
                                        <div className=' flex flex-col items-center px-5'>
                                            <img src="/assets/images/icons/polygonup.svg" className='p-2 w-12' alt="Up" />
                                            <img src="/assets/images/icons/polygondown.svg" className='p-2 w-12' alt="Down" />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                                <TableCell>
                                    <Button onClick={handleClickOpen} variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Cancel booking</Button>
                                    <SimpleDialog
                                        open={open}
                                        onClose={handleClose}
                                    />
                                    <Button onClick={handleClickOpen1} variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Get your car</Button>
                                    <OTPDialog
                                        open={open1}
                                        onClose={handleClose1}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                                <TableCell>
                                    <Button variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Cancel booking</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Get your car</Button>
                                </TableCell>
                            </TableRow>


                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                                <TableCell>
                                    <Button variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Cancel booking</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Get your car</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Upcoming