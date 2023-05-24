
import MiniDrawer from './Components/headers/MiniDrawer';
import DeviceDetails from './Components/cards/DeviceDetails';
import axios from 'axios';
import './App.css';
import {useState,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';


function App() {

  //Device cards 
 const [deviceCards,setDeviceCards] = useState([]);
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
      
       <Routes>
            <Route path='/' element={<MiniDrawer deviceCards={deviceCards} deleteDevice={deleteDevice} addDevice={addDevice} /> }/>
            <Route path='/:id' element={<DeviceDetails/>}/>
       </Routes>


   
   </>
  );
}

export default App;
