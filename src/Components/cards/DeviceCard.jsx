import { Paper,Grid,Typography,Box,IconButton,MenuItem,Menu } from "@mui/material";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import CircleIcon from "@mui/icons-material/Circle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
// import mqtt from 'mqtt';


const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"caption"
                    },
                    style:{
                        fontSize:9
                    }
                },
                {
                    props:{
                        variant:"body3"
                    },
                    style:{
                        fontSize:9
                    }
                }
            ]
        }
    },
});


export default function DeviceCard({deviceCard,deleteDevice}){

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//   const [connectionStatus, setConnectionStatus] = React.useState(false);
//   const [messages, setMessages] = React.useState([]);

//   useEffect(() => {
//     const client = mqtt.connect('mqtt://3.109.62.128:8000:1883/');
//     client.on('connect', () => setConnectionStatus(true));
//     client.on('message', (topic, payload, packet) => {
//       setMessages(messages.concat(payload.toString()));
//     });
//   }, []);

const [CPU,setCPU] = React.useState(80);
const [Temp,setTemp] = React.useState(30);
const [Memory,setMemory] = React.useState(60);



  //Extracting time from ISOdateTime format
  const time = new Date(deviceCard.lastModifiedOn);
  const hours = time.getHours();
  const minutes = time.getMinutes();



    return (
        <Grid item >
            <ThemeProvider theme={theme}>

                <Paper sx={{
                    padding: 2.5,
                    width: 302,
                    boxShadow: 8,
                    
                    
                }}>
                    {/* card header */}
                    <Box
                        sx={{
                            display: 'flex',
                            marginBottom: 3,
                            gap:2,
                            justifyContent: 'center',
                        }}>
                        {/* Activity indicator */}
                        <CircleIcon sx={{
                            color: '#4caf50',
                            maxWidth: 15
                        }} />

                        <Box sx={{
                            width:'80%',
                            textAlign:'center',
                        }}>

                            <Box>
                                <Typography variant='caption'>Device Time: {hours}:{minutes} </Typography>
                            </Box>
                            <Box marginY={-1}>
                                <Typography variant='caption'>Kolkata, India</Typography>
                            </Box>

                        </Box>


                        <Box>
                            <IconButton
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            size='small'
                             >
                                <MoreVertIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                        
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Download Config</MenuItem>
                            <MenuItem onClick={handleClose}>Edit device</MenuItem>
                            <MenuItem onClick={()=>{
                                handleClose();
                                deleteDevice(deviceCard.deviceName);
                                }}>Delete device</MenuItem>
                        </Menu>
                    </Box>

                    
                   <div className=' h-44'>
                     <img src="https://assets.bizclikmedia.net/668/3750f5a096ad2679e0276921d4f8d1d3:6e2c97dcf186610b0892d4a99a19d780/gettyimages-1361008761.jpg" className=" w-40 h-40 rounded-full ml-14 " ></img>
                     <img src='/images/verified-user.png' className='w-8 relative bottom-7 left-40'></img>

                   </div>
                   
                   <Box sx={{textOverflow:"clip" }}>
                    <Typography variant='h6' sx={{ marginY: 1, marginLeft:1 , }}>
                        {deviceCard.deviceName}
                    </Typography>
                    <Typography variant='subtitle2' sx={{ marginTop: -1, marginLeft:1, textOverflow:"clip" ,backgroundColor:"cornflowerblue"}}>
                        {deviceCard.description}
                    </Typography>
                   </Box>
                    

                   {/* <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap:0,
                            marginY:2
                        }}
                    >
                        
                         <Box sx={{
                            display:'flex', 
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginX:3, 
                            }}>
                            <Paper elevation={1} sx={{borderRadius:10,maxHeight:40,background:'#f7fafa'}}>
                                    <CircularStatic/>
                            </Paper>
                            <Typography variant='subtitle2' paddingTop={1}>CPU</Typography>
                        </Box>

                    </Box>*/}

                    <div className='flex gap-4 mx-1  mt-3  '>
                        <div className='w-20 text-center'>
                            <CircularProgressbar circleRatio={0.5} value={CPU} 
                                styles={buildStyles({
                                    rotation: 1 / 1.6 + 1 / 8,
                                    trailColor: "#eee",
                                    pathColor: `rgba(62, 152, 199, ${CPU / 100})`,
                                    strokeLinecap: 'round'
                                })} />
                            <p className='text-xs -mt-12'>{`${CPU}%`}</p>
                            <p className=' text-sm'>CPU</p>
                        </div>
                        <div className='w-20  text-center'>
                            <CircularProgressbar circleRatio={0.5} value={Temp} 
                                styles={buildStyles({
                                    rotation: 1 / 1.6 + 1 / 8,
                                    trailColor: "#eee",
                                    pathColor: `rgba(62, 152, 199, ${Temp / 100})`,
                                    strokeLinecap: 'round'
                                })} />
                            <p className='text-xs -mt-12'>{`${Temp}%`}</p>
                            <p className='text-sm'>Temp</p>
                        </div>
                        <div className='w-20 text-center'>
                            <CircularProgressbar circleRatio={0.5} value={Memory} 
                                styles={buildStyles({
                                    rotation: 1 / 1.6 + 1 / 8,
                                    trailColor: "#eee",
                                    pathColor: `rgba(62, 152, 199, ${Memory / 100})`,
                                    strokeLinecap: 'round'
                                })} />
                            <p className='text-xs -mt-12'>{`${Memory}%`}</p>
                            <p className=' text-sm '>Memory</p>
                        </div>
                    </div>

                </Paper>

            </ThemeProvider>
        </Grid>
    )
}