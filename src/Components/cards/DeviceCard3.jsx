import React from 'react'
import img1 from '../../images/img1.png';
import edit from '../../images/edit.png';
import heart from '../../images/heart.png';
import option from '../../images/option.png';
import trash_2 from '../../images/trash-2.png';
import verified_user from '../../images/verified-user.png';
import cloud_download from '../../images/cloud-download.png';
import { Link } from 'react-router-dom';


const DeviceCard3 = ({deviceCard,deleteDevice,msg}) => {
  
  return (
    <>
    <div className="device_card_section mt-5">
    <div className="container">   
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between mb-3">
                <div className="position-relative">
                  <span className="status on position-absolute top-50 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </div>
                <div className="text-center">
                  <span className="device_time d-block">Device Time: {(deviceCard.deviceName===msg.device_name)?msg.datetime.slice(10,19):'00'}</span>
                  <span className="location d-block">Kolkata, India</span>
                </div>
                <div className="p-2 bd-highlight">
                  <div className="dropdown">
                    <img src={option} alt="" data-bs-toggle="dropdown" aria-expanded="false"/>                      
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#"> <img src={cloud_download} alt=""/> Download config</a></li>
                      <li><a className="dropdown-item" href="#"><img src={edit} alt=""/> Edit device</a></li>
                      <li> <a className="dropdown-item text-danger" href="#" onClick={()=>deleteDevice(deviceCard.deviceName)}><img src={trash_2} alt=""/>Delete device</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link to = {`${deviceCard.deviceUid}`}  className='link'> 
              <div className="d-flex justify-content-center">
                <div className="device-img position-relative">
                  <img src={img1} width="202"  className="img" alt="..." />
                  <img className="position-absolute bottom-0 end-0 translate-middle" src={verified_user} width="32px" alt=""/>
                </div>                  
              </div>
              <div className="title d-flex justify-content-between">
                <h5 className="card-title mt-2">{deviceCard.deviceName}</h5>
                <span className="favourite"><img src={heart} alt=""/></span>
              </div>               
              
                
              <p className="card-text">{deviceCard.description}</p>
              </Link>
              <hr className="devider" />

              <div className="half_circle_progressbar d-flex justify-content-center">
                <div className="progress">
                  <div className="barOverflow">
                    <div className="bar"></div>
                  </div>
                  <span>{(deviceCard.deviceName===msg.device_name)?msg.cpu:'40'}</span>%
                  <h6 className="pro-title">Cpu</h6>
                </div>                 
                
                <div className="progress">
                  <div className="barOverflow">
                    <div className="bar"></div>
                  </div>
                  <span>{(deviceCard.deviceName===msg.device_name)?msg.temperature:'60'}</span>%
                  <h6 className="pro-title">Temp</h6>
                </div>
                
                <div className="progress">
                  <div className="barOverflow">
                    <div className="bar"></div>
                  </div>
                  <span>{(deviceCard.deviceName===msg.device_name)?msg.memory:80}</span>%
                  <h6 className="pro-title">Memory</h6>
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


