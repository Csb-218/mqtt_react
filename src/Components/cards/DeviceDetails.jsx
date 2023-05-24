import React from 'react'
import {useParams} from 'react-router-dom';

const DeviceDetails = () => {
  
   const params = useParams();
   const id = params.id; 

  return (
    <>
    <h2>DeviceDetails</h2>
    <div>
        Device uid : {id}
    </div>
    </>
    
  )
}

export default DeviceDetails