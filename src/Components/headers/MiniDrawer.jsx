import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NestedList from '../list/NestedList';
import DeviceCard3 from '../cards/DeviceCard3';
import Grid  from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function MiniDrawer({deviceCards,deleteDevice,addDevice,msg}) {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' , borderWidth:1, height:800}}>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? <><Typography>The Open Factory</Typography><IconButton onClick={handleDrawerClose}> <ChevronLeftIcon /></IconButton></> : <IconButton onClick={handleDrawerOpen}>  <MenuIcon /></IconButton>}
        </DrawerHeader>

        <Divider />
        <NestedList addDevice={addDevice}/>
        <Divider />

      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 ,backgroundColor:'#f0f5f1' }}>
        
        <Box sx={{
          height:50,
          backgroundColor:'inherit',
          display: 'flex',
          justifyContent:'space-between'
          
        }}>
          
          <Box
           sx={{
            backgroundColor:'inherit',
            display: 'flex',
          }}>
            <Typography variant='h5' component='h1'>Device</Typography>
            <Typography mt={1.5} ml={2} variant='caption' component='h1'>Home/Device</Typography>
          </Box>

          <Box
          sx={{
            justifyContent:'end'
          }}>
             <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
    
        </Box>

        <Grid container spacing={2} marginTop={1}>
        {
          deviceCards.map(deviceCard => <DeviceCard3 key={deviceCard.deviceId} deviceCard={deviceCard} deleteDevice={deleteDevice} msg={msg}/>)
        }
        </Grid>
     
      </Box>
    </Box>
  );
}


