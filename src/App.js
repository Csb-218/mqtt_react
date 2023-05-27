
import MiniDrawer from './Components/headers/MiniDrawer';
import DeviceDetails from './Components/cards/DeviceDetails';
import axios from 'axios';
import './App.css';
import {useState,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import mqtt from 'mqtt-browser';


function App() {
  
//Device cards 
 const [deviceCards,setDeviceCards] = useState([]);

 const [msg,setMsg] = useState({
  datetime: '2023-05-27 00:00:00',
  device_name: 'raspberryPi',
  cpu:'...',
  temperature:'...',
  memory:'...'
 });

 const host = 'ws://3.109.62.128:8000/mqtt';
 const options = {
  // Clean session
  clean: true,
  keepalive: 0,
  clientId: 'mqttjs_5c32dc7e',
}

useEffect(()=>{
  const client = mqtt.connect(host, options);
  client.subscribe('admin/heartbeat');
  let note;
  client.on("message", function (topic, message) {
  note = JSON.parse(message.toString());
  // Updates React state with message
  setMsg(note);
  console.log(note);
}) 
},[]);

  
  //Fetching device cards
  useEffect(() => {
     
        axios.get(process.env.REACT_APP_SERVER)
         .then(response => {
           setDeviceCards(response.data)
         })
         .catch(err => console.error(err))
   },
     [deviceCards])

 //Delete device card
   const deleteDevice = (deviceName) =>{
     axios.delete(`${process.env.REACT_APP_SERVER}/${deviceName}`)
     .then(res=> res.status===200?console.log('Device deleted'):null)
     .catch(error => alert(error.response.data.message));
 
   }
   //Add device card
   const addDevice = (device) =>{
     axios.post(process.env.REACT_APP_SERVER,device)
     .then(res=> res.status===200?console.log('Device added'):null)
     .catch(error => alert(error.response.data.message));
   }

  return (
   <>  
         <div>
         </div>
         <Routes>
            <Route path='/' element={<MiniDrawer deviceCards={deviceCards} deleteDevice={deleteDevice} addDevice={addDevice} msg={msg} /> }/>
            <Route path='/:id' element={<DeviceDetails/>}/>
       </Routes>
   </>
  );
}

export default App;
