import React from 'react'
import Navbar  from '../hostPanel/Navbar'
import { Typography, TextField, FormControl, Button, DialogTitle, DialogContent, DialogActions, Dialog } from '@mui/material';
import Icon from '@mui/material/Icon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RecieptPaymentDetails = () => {
    const [open, setOpen] = React.useState(true);
 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        <Navbar />
        <Dialog open={open} onClose={handleClose} className="" sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}>
                <DialogTitle className="border-b mb-16 flex flex-row justify-between items-center">
                    <Typography className="text-xl">
                        Report a problem
                    </Typography>
                    <Icon className="cursor-pointer" onClick={handleClose}>close</Icon>
                </DialogTitle>
                <DialogContent className="flex flex-col">
                    <FormControl>
                        <TextField
                            sx={{
                                width: 530,
                                maxWidth: '100%',
                            }}
                            className="rounded-none"
                            margin="dense"
                            id="name"
                            label="Your name"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            sx={{
                                width: 530,
                                maxWidth: '100%',
                            }}
                            className="rounded-none"
                            margin="dense"
                            id="email"
                            label="Email address"
                            type="email"
                            fullWidth
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            sx={{
                                width: 530,
                                maxWidth: '100%',
                            }}
                            className="rounded-none"
                            margin="dense"
                            id="detail"
                            label="Write your problem"
                            type="text"
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={6}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button fullWidth onClick={handleClose} size="large" className="mx-14 mb-20 rounded-md text-white" style={{ backgroundColor: '#D22A8F' }}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
         </>

    )
}

export default RecieptPaymentDetails