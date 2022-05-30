import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from 'prop-types';
import { Typography, Tabs, Tab, Box, Card, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Cardetails from './Tabs/Cardetails';
// import CarDetails from '../../../sharedComponents/carListing/CarDetails';
import CarLocation from '../../../sharedComponents/carListing/CarLocation';
import Features from '../../../sharedComponents/carListing/Features';
import Availability from '../../../sharedComponents/carListing/Availability';
import AddImages from '../../../sharedComponents/carListing/AddImages';
import AddPrice from '../../../sharedComponents/carListing/AddPrice';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0, }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function EditCarlisting() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles({
        container: {
            display: "flex",
            height: "100%",
            width: "100%"
        },
        panel: {
            width: "100%",
        },
        head: {
            width: "20%",
        }
    });

    const classes = useStyles();

    return (
        <div>
            <div className="">
                <div className="flex flex-row items-center mx-auto w-full py-24">
                    <ArrowBackIcon size="large" className="mr-20" />
                    <Typography className="text-2xl font-normal font-Gilroy-Medium">Edit car listing</Typography>
                </div>

                <div className="mx-auto w-full">
                    <Card className="rounded-md border border-gray-300 shadow-none">
                        <Box
                            className={classes.container}
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                        >
                            <Tabs
                                className={classes.head}
                                orientation="vertical"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: "#D22A8F"
                                    },
                                    sx: {
                                        width: 3,
                                        left: 0,
                                    }
                                }}
                            >
                                <Tab label="Car details" {...a11yProps(0)} />
                                <Divider className="mx-12" />
                                <Tab label="Features" {...a11yProps(1)} />
                                <Divider className="mx-12" />
                                <Tab label="Guildlines" {...a11yProps(2)} />
                                <Divider className="mx-12" />
                                <Tab label="Location" {...a11yProps(3)} />
                                <Divider className="mx-12" />
                                <Tab label="Photos" {...a11yProps(4)} />
                                <Divider className="mx-12" />
                                <Tab label="Price" {...a11yProps(5)} />
                                <Divider className="mx-12" />
                                <Tab label="Availibility" {...a11yProps(6)} />
                            </Tabs>

                            <TabPanel className={classes.panel} value={value} index={0}>
                                <Cardetails />
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={2}>
                                <div>
                                    <div className="flex flex-row justify-between items-center border-b">
                                        <div className="">
                                            <Typography className="text-lg font-medium text-gray-900 ml-24">Features</Typography>
                                        </div>
                                        <div className="flex flex-row space-x-10 mr-10">
                                            <Button variant="outlined" className="rounded-4">Discard</Button>
                                            <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                        </div>
                                    </div>
                                    <Features />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={3}>
                                <div>
                                    <div className="flex flex-row justify-between items-center border-b">
                                        <div className="">
                                            <Typography className="text-lg font-medium text-gray-900 ml-24">Guidelines</Typography>
                                        </div>
                                        <div className="flex flex-row space-x-10 mr-10">
                                            <Button variant="outlined" className="rounded-4">Discard</Button>
                                            <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                        </div>
                                    </div>
                                    <Features />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={4}>
                                <div>
                                    <div className="flex flex-row justify-between items-center border-b">
                                        <div className="">
                                            <Typography className="text-lg font-medium text-gray-900 ml-24">Location</Typography>
                                        </div>
                                        <div className="flex flex-row space-x-10 mr-10">
                                            <Button variant="outlined" className="rounded-4">Discard</Button>
                                            <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                        </div>
                                    </div>
                                    <CarLocation />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={5}>
                                <div>
                                    <div className="flex flex-row justify-between items-center border-b">
                                        <div className="">
                                            <Typography className="text-lg font-medium text-gray-900 ml-24">Car details</Typography>
                                        </div>
                                        <div className="flex flex-row space-x-10 mr-10">
                                            <Button variant="outlined" className="rounded-4">Discard</Button>
                                            <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                        </div>
                                    </div>
                                    <AddImages />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={6}>
                                <div>
                                    <div className="flex flex-row justify-between items-center border-b">
                                        <div className="">
                                            <Typography className="text-lg font-medium text-gray-900 ml-24">Car details</Typography>
                                        </div>
                                        <div className="flex flex-row space-x-10 mr-10">
                                            <Button variant="outlined" className="rounded-4">Discard</Button>
                                            <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                        </div>
                                    </div>
                                    <AddPrice />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={7}>
                                <div>
                                    <div className="flex flex-row justify-between items-center border-b">
                                        <div className="">
                                            <Typography className="text-lg font-medium text-gray-900 ml-24">Car details</Typography>
                                        </div>
                                        <div className="flex flex-row space-x-10 mr-10">
                                            <Button variant="outlined" className="rounded-4">Discard</Button>
                                            <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                        </div>
                                    </div>
                                    <Availability />
                                </div>
                            </TabPanel>
                        </Box>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default EditCarlisting