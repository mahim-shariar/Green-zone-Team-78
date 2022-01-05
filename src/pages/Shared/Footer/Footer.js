import { Facebook, GitHub, Pinterest, Twitter } from '@mui/icons-material';
import React from 'react';
import './Footer.css'
// import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="l-footer mx-auto ">
        <div className='mx-auto d-flex  ' >
          <h4>
            <img className='img-fluid' src='https://i.ibb.co/XSMK67z/7889330123150814d3e25a9dfd47b9f7-removebg-preview-1.png' alt="" />
            <span style={{ color: '#0d620d' }} >Green</span> <span style={{ color: 'white' }} > Zone </span>
          </h4>
        </div>
        <div>
          <p className='text-start text-light' >
          Wooden houses are a more ecological and economic alternative than homes made of traditional brick and concrete. ... These wooden homes are made from natural, non-petroleum materials that are recyclable and biodegradable and are also considered 'ecological'.</p>
        </div>
      </div>
      <ul className="r-footer">
        <li>
          <h2 className='fw-bold' >
            Social</h2>
          <ul className="box">
            <li><a className='btn  m-1 text-light ' href="https://www.facebook.com/"><Facebook></Facebook> Facebook </a></li>
            <li><a className='btn  m-1 text-light ' href="https://github.com/"> <GitHub></GitHub> GitHub </a></li>
            <li><a className='btn  m-1 text-light  ' href="https://twitter.com/?lang=en"><Twitter></Twitter> Twitter</a></li>
            <li><a className='btn  m-1 text-light ' href="https://www.pinterest.com/"><Pinterest></Pinterest> Pinterest </a></li>
          </ul>
        </li>
        <li className="features">
          <h2 className='fw-bold' >
            Information</h2>
          <ul className="box h-box">
            <li className='mt-2' >Blog</li>
            <li className='mt-2' >Pricing</li>
            <li className='mt-2' >Sales</li>
            <li className='mt-2' >Certifications</li>
            <li className='mt-2' >Customer Service</li>
          </ul>
        </li>
        <li>
          <h2 className='fw-bold'>
            Legal</h2>
          <ul className="box">
            <li className='mt-4' >Privacy Policy</li>
            <li className='mt-4' >Terms of Use</li>
            <li className='mt-4' >Contract</li>
          </ul>
        </li>
      </ul>
      <div className="b-footer ">
        <p className='text-light' >
          All rights reserved by ©Team-78 {new Date().getFullYear()}
        </p>
      </div>
    </footer>

  );
};
export default Footer;