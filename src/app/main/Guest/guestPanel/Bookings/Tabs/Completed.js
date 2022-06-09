import React, { useState } from 'react';
import { FormControl, TextField, Button, Typography, Dialog, DialogTitle, DialogContent, IconButton, Collapse, Box } from '@mui/material';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import TripDateRange from '../../../../Host/sharedComponents/TripDateRange';

function SimpleDialog(props) {
    const { onClose, open } = props;

    const handleClose1 = () => {
        onClose(true);
    };

    return (
        <Dialog onClose={handleClose1} open={open}>
            <DialogTitle className="mx-auto">
                <img src="/assets/images/icons/requestSendicon.svg" alt="logo" />
            </DialogTitle>
            <DialogContent>
                <Typography className="text-18 font-medium text-center mb-10">Request sent to host</Typography>
                <Typography className="text-12 font-normal text-gray-500 text-center mb-24">Your booking dates will be updated after confirmation <br /> from your host.</Typography>
                <Button fullWidth variant="contained" size="large" className="rounded-md" style={{ backgroundColor: '#D22A8F' }}>Okay</Button>
            </DialogContent>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

function EditDialog(props) {
    const { onClose, open } = props;

    const [openAlert, setOpenAlert] = React.useState(true);

    const handleClose = () => {
        onClose(true);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle className="flex justify-between items-center border-b">
                <Typography className="text-20 font-medium">Edit trip dates</Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon className="text-black" />
                </IconButton>
            </DialogTitle>
            <DialogContent className="space-y-12">
                <TripDateRange />

                <div>
                    <FormControl fullWidth>
                        <TextField
                            sx={{
                                '& fieldset': {
                                    borderRadius: '8px',
                                    border: '1px solid #D0D5DD'
                                }
                            }}
                            id="outlined-multiline-static"
                            multiline
                            rows={5}
                            placeholder="Write your problem"
                        />
                    </FormControl>
                </div>

                <div className="space-y-12">
                    <Box sx={{ width: '100%' }}>
                        <Collapse in={openAlert}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpenAlert(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                className="flex flex-row items-center rounded-8"
                                icon={<div className="flex items-center justify-center w-28 h-28 rounded-full" style={{ backgroundColor: 'rgba(4, 106, 243, 0.08)' }}><img src="/assets/images/icons/boltIcon.svg" alt="logo" /></div>} severity="info"
                            >
                                <Typography className="text-14" sx={{ color: '#046AF3' }}>Additional charges of cost PKR 3600 will be added</Typography>
                            </Alert>
                        </Collapse>
                    </Box>

                    <Button disabled={openAlert} onClick={() => { setOpenAlert(true) }} fullWidth variant="contained" size="large" className="rounded-md" style={{ backgroundColor: '#D22A8F' }}>Send request</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

EditDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

const Completed = () => {
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
                                    <Button onClick={handleClickOpen1} variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Edit</Button>
                                    <EditDialog
                                        open={open1}
                                        onClose={handleClose1}
                                    />
                                    <Button onClick={handleClickOpen} variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Handover car</Button>
                                    <SimpleDialog
                                        open={open}
                                        onClose={handleClose}
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
                                    <Button variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Edit</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Handover car</Button>
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
                                    <Button variant="outlined" size="medium" className="text-10 rounded mr-12" style={{ color: '#667085', borderColor: '#C3CBCD' }}>Edit</Button>
                                    <Button variant="contained" size="medium" className="text-10 rounded" style={{ backgroundColor: '#D22A8F' }}>Handover car</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Completed