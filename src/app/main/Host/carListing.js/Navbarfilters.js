import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';





const Navbarfilters = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-20 shadow-lg bg-white mb-3 md:flex-row flex-col ">
                <div className="flex md:ml-96 md:space-x-12 md:flex-row  flex-col md:space-y-0 space-y-14 ml-55 md:w-md lg:w-2xl">
                    {/* <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start ml-96"> */}
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 155 }}
                        renderInput={(params) => <TextField {...params} label="Make" className=""  />}
                        />

                     <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 155 }}
                        renderInput={(params) => <TextField {...params} label="Model" />}
                        />
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 155 }}
                        renderInput={(params) => <TextField {...params} label="Price" />}
                        />
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 155}}
                        renderInput={(params) => <TextField {...params} label="Type" />}
                        />
                         <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 155}}
                        renderInput={(params) => <TextField {...params} label="Ratings" />}
                        />
                        <Button size="large" variant="contained" style={{backgroundColor: '#D22A8F'}}>
                         All Filters
                        </Button>
                         
                         <div className="mx-auto">
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 100}}
                        renderInput={(params) => <TextField {...params} label="Sort by" variant="standard"
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <KeyboardArrowDownIcon />
                                </InputAdornment>
                            )
                        }}
                        
                        />}
                        />
                        
                        
                        
                        
                        </div>
                        {/* <IconButton
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <MenuIcon />
                            <i className="fas fa-bars"></i>
                        </IconButton> */}
                     
                    {/* </div> */}
                   
                </div>
                
                <div className="flex items-center justify-center md:mr-96 mx-auto md:mt-0 mt-28 ">
                            <Typography>View</Typography>
                           <div className="border rounded-20 p-8 ml-12">
                           <MenuIcon />
                           </div>
                     
                </div>
              
            </nav>
            {/* //--------------------------------------------------------------------------// */}
            
        </>
    );
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
];

export default Navbarfilters;