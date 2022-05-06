import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer text-white'>
            <div className='d-xl-flex d-xxl-flex d-lg-flex justify-content-evenly'>
                <div>
                <h4 className='text-warning'>Information</h4>
                 <h5>About us</h5>
                 <h5>Refund Policy</h5>
                 <h5>Terms & Condition</h5>
                 <h5>Privacy Policy</h5>
                </div>
            
            <div>
                <h4 className='text-warning'>Follow us on</h4>
                <div className='d-flex align-item-center justify-content-between'>
                    <img height={40} width={40} src="https://i.ibb.co/FHB3WBb/download.png" alt="" />
                    <img className='ms-4 ' height={40} width={40} src="https://i.ibb.co/f2zDJCW/download-2.png" alt="" />
                    <img className='ms-4 ' height={40} width={40} src="https://i.ibb.co/tLCFjH5/download.png" alt="" />
                </div>
            </div>
            <div>
                <h4 className='text-warning'>Payment Method</h4>
                <div className='d-flex align-item-center justify-content-between'>
                    <img height={40} width={40} src="https://i.ibb.co/HtDrhV9/download.webp" alt="" srcset="" />
                    <img height={40} width={40} src="https://i.ibb.co/8jjsCLG/images-1.jpg" alt="" />
                    <img height={40} width={70} src="https://i.ibb.co/vVRsvDb/download-1.jpg" alt="" />
                </div>
            </div>
            </div>
        <p>Copyright 2022 by TechMania. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;