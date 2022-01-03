import React from 'react';
import './Footer.css'
// import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="l-footer mx-auto ">
        <div className='mx-auto d-flex  ' >
          <img className='img-fluid' src='https://i.ibb.co/tchrvZM/depositphotos-63913959-stock-illustration-wave-in-house-logo-removebg-preview.png' alt="" />
        </div>
        <div>
          <p className='text-center' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.</p>
        </div>
      </div>
      <ul className="r-footer">
        <li>
          <h2 className='fw-bold' >
            Social</h2>
          <ul className="box">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
        </li>
        <li className="features">
          <h2 className='fw-bold' >
            Information</h2>
          <ul className="box h-box">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Certifications</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </li>
        <li>
          <h2 className='fw-bold'>
            Legal</h2>
          <ul className="box">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contract</a></li>
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