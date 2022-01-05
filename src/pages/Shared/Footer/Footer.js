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
            <span style={{ color: '#0d620d' }} >Green</span> <span style={{ color: 'rgb(72 55 42)' }} > Zone </span>
          </h4>
        </div>
        <div>
          <p className='text-center text-light' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.</p>
        </div>
      </div>
      <ul className="r-footer">
        <li>
          <h2 className='fw-bold' >
            Social</h2>
          <ul className="box">
            <li><a className='btn  m-1 text-light ' href="https://www.facebook.com/">Facebook</a></li>
            <li><a className='btn  m-1 text-light  ' href="https://twitter.com/?lang=en">Twitter</a></li>
            <li><a className='btn  m-1 text-light ' href="https://www.pinterest.com/">Pinterest</a></li>
            <li><a className='btn  m-1 text-light ' href="https://dribbble.com/">Dribbble</a></li>
          </ul>
        </li>
        <li className="features">
          <h2 className='fw-bold' >
            Information</h2>
          <ul className="box h-box">
            <li>Blog</li>
            <li>Pricing</li>
            <li>Sales</li>
            <li>Certifications</li>
            <li>Customer Service</li>
          </ul>
        </li>
        <li>
          <h2 className='fw-bold'>
            Legal</h2>
          <ul className="box">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Contract</li>
          </ul>
        </li>
      </ul>
      <div className="b-footer">
        <p>
          All rights reserved by ©Move-n-Settle {new Date().getFullYear()}
        </p>
      </div>
    </footer>

  );
};
export default Footer;