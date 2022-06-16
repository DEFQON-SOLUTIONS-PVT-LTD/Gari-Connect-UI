import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? '200' : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <div className='mt-28 ml-32'>
     <Typography className='font-semibold text-xl ' >Filters</Typography>
     </div>
     <Divider className='mt-28'/>
     <div className='mt-20 ml-32'>
     <Typography className='font-normal text-lg'style={{color:"#667085"}} >Transmission</Typography> 
     </div>
     <Divider className='mt-20'/>
     <div className='mt-20 ml-32'>
     <Typography className='font-normal text-lg'style={{color:"#667085"}} >Features</Typography> 
     </div>
     <Divider className='mt-20'/>
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className='font-normal text-lg'style={{color:"#667085"}}>
           Seats
          </Typography> 
        </AccordionSummary>
        <AccordionDetails>
<<<<<<< HEAD
           <div>
             <div className='flex'>
      <Checkbox {...label}  />
      <Typography style={{color:"#667085"}} className='font-normal text-lg'>2</Typography>
      </div>
      <div className='flex'>
      <Checkbox {...label} />
      <Typography style={{color:"#667085"}} className='font-normal text-lg'>3</Typography>
      </div>
      </div>
      <div className='flex'>
      <Checkbox {...label}  />
      <Typography style={{color:"#667085"}} className='font-normal text-lg'>4</Typography>
=======
           <div className='flex flex-col justify-start'>
      <Checkbox {...label}  />
      <Checkbox {...label} />
      <Checkbox {...label}  />
>>>>>>> 8b57caa (drawer)
    </div>
        </AccordionDetails>
      </Accordion>
     <div className='mt-20 ml-32'>
     <Typography className='font-normal text-lg'style={{color:"#667085"}} >Green Vehicles</Typography> 
     </div>
     <Divider className='mt-20'/>
     
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} size="large"
            variant="contained"
            style={{ backgroundColor: "#D22A8F", borderRadius: "8px" }}>All Filters{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{ style: { height: "auto",marginTop:"5%",width:"30%" } }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
