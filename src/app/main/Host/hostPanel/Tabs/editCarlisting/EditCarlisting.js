import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from 'prop-types';
import { Typography, Tabs, Tab, Box, Card, Divider } from '@mui/material';
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
                                <Tab label="Discription" {...a11yProps(1)} />
                                <Divider className="mx-12" />
                                <Tab label="Features" {...a11yProps(2)} />
                                <Divider className="mx-12" />
                                <Tab label="Guildlines" {...a11yProps(3)} />
                                <Divider className="mx-12" />
                                <Tab label="Location" {...a11yProps(4)} />
                                <Divider className="mx-12" />
                                <Tab label="Photos" {...a11yProps(5)} />
                                <Divider className="mx-12" />
                                <Tab label="Price" {...a11yProps(6)} />
                                <Divider className="mx-12" />
                                <Tab label="Availibility" {...a11yProps(7)} />
                            </Tabs>

                            <TabPanel className={classes.panel} value={value} index={0}>
                                <Cardetails />
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={1}>
                                <Typography>Item Two</Typography>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={2}>
                                <Features />
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={3}>
                                <Typography>Item Two</Typography>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={4}>
                                <CarLocation />
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={5}>
                                <AddImages />
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={6}>
                                <AddPrice />
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={7}>
                                <Availability />
                            </TabPanel>
                        </Box>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default EditCarlisting