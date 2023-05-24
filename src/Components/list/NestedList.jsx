import * as React from 'react';
import {Modal,Collapse,ListSubheader,List,Box,Typography,ListItemButton,ListItemIcon,ListItemText,} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import FormikContainer from '../FormComponents/FormikContainer';


export default function NestedList({addDevice}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  //Modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const submitted = (res) =>{ res && handleClose()}
  //modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0 solid #000',
    borderRadius:3,
    boxShadow: 24,
    p: 4,
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Menu Item" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HorizontalSplitIcon />
        </ListItemIcon>
        <ListItemText primary="Suites" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <DevicesIcon />
        </ListItemIcon>
        <ListItemText primary="Devices" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Device" onClick={handleOpen}/>
            <Modal
              open={openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                 <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add a device
                </Typography>
                {/*<Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography> */}
                <FormikContainer addDevice={addDevice} submitted={submitted} />
              </Box>
            </Modal>

          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}