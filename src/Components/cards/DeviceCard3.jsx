import React from 'react'
import img1 from '../../images/img1.png';
import edit from '../../images/edit.png';
import heart from '../../images/heart.png';
import option from '../../images/option.png';
import trash_2 from '../../images/trash-2.png';
import verified_user from '../../images/verified-user.png';
import cloud_download from '../../images/cloud-download.png';
import { Link } from 'react-router-dom';


const DeviceCard3 = ({deviceCard,deleteDevice}) => {
  
  return (
    <>
    <div class="device_card_section mt-5">
    <div class="container">   
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-body p-4">
              <div class="d-flex justify-content-between mb-3">
                <div class="position-relative">
                  <span class="status on position-absolute top-50 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </div>
                <div class="text-center">
                  <span class="device_time d-block">Device Time: 22:22</span>
                  <span class="location d-block">Kolkata, India</span>
                </div>
                <div class="p-2 bd-highlight">
                  <div class="dropdown">
                    <img src={option} alt="" data-bs-toggle="dropdown" aria-expanded="false"/>                      
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#"> <img src={cloud_download} alt=""/> Download config</a></li>
                      <li><a class="dropdown-item" href="#"><img src={edit} alt=""/> Edit device</a></li>
                      <li> <a class="dropdown-item text-danger" href="#" onClick={()=>deleteDevice(deviceCard.deviceName)}><img src={trash_2} alt=""/>Delete device</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to = {`${deviceCard.deviceUid}`}  className='link'> 
              <div class="d-flex justify-content-center">
                <div class="device-img position-relative">
                  <img src={img1} width="202"  class="img" alt="..." />
                  <img class="position-absolute bottom-0 end-0 translate-middle" src={verified_user} width="32px" alt=""/>
                </div>                  
              </div>
              <div class="title d-flex justify-content-between">
                <h5 class="card-title mt-2">{deviceCard.deviceName}</h5>
                <span class="favourite"><img src={heart} alt=""/></span>
              </div>               
              
                
              <p class="card-text">{deviceCard.description}</p>
              </Link>
              <hr class="devider" />

              <div class="half_circle_progressbar d-flex justify-content-center">
                <div class="progress">
                  <div class="barOverflow">
                    <div class="bar"></div>
                  </div>
                  <span>10</span>%
                  <h6 class="pro-title">Cpu</h6>
                </div>                 
                
                <div class="progress">
                  <div class="barOverflow">
                    <div class="bar"></div>
                  </div>
                  <span>100</span>%
                  <h6 class="pro-title">Temp</h6>
                </div>
                
                <div class="progress">
                  <div class="barOverflow">
                    <div class="bar"></div>
                  </div>
                  <span>34</span>%
                  <h6 class="pro-title">Memory</h6>
                </div>                
                
              </div>
            </div>
          </div>
        </div>
        
      </div>      
    </div>
    </div>
    </>
  
  )
}



export default DeviceCard3


