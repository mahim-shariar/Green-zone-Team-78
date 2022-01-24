import React from 'react';
import Button from '@mui/material/Button';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar} from '@mui/material';
import './Nav.css'
import useAuth from './../../hooks/useAuth';

const style = {
  textDecoration: 'none',
  marginRight: '10px',
  fontSize: '17px',
  color: 'black'
}

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar bg="light" variant="light" className='mx-2' collapseOnSelect expand="lg" style={{ backgroundColor: '#0a1735',}}>
      <Navbar.Brand href="#home">
        <h5>
          <img
            src="https://i.ibb.co/bRh1L8w/rsz-7889330123150814d3e25a9dfd47b9f7-removebg-preview.png"
            alt=""
            className='navLogo img-fluid '
          />
          <span style={{ color: '#0d620d' }} >Green</span> <span style={{ color: '#6e5543' }} >  Zone </span>
        </h5>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Nav className='text-primary align-items-center ms-auto'>
          <Link to='/home' style={style}><Button color="inherit">Home</Button></Link>
          <Link to='/explores' style={style}><Button color="inherit">Explore</Button></Link>
          <Link to='/reviews' style={style}><Button color="inherit">Reviews</Button></Link>
          <Link to='/meetBenefit' style={style}><Button color="inherit">About</Button></Link>
          <Link to='/demo' style={style}><Button color="inherit">Demo</Button></Link>
          <Link to='/services' style={style}><Button color="inherit">Services</Button></Link>
          {
            user.email && <Link to='/dashboard' style={style}><Button color="inherit">Dashboard</Button></Link>
          }
          {
            user.email ? <Button onClick={logout} style={{ backgroundColor: '#a71324', fontSize: '11px', color: 'white' }}>Log Out</Button> :
              <Link to='/login' style={style}>
                <Button style={{ backgroundColor: '#a71324', fontSize: '15px', color: 'white' }}>Login</Button>
              </Link>
          }
          {
            user.email && <Avatar
              alt="Remy Sharp"
              src={user?.photoURL}
              sx={{ width: 45, height: 45, m: 1 }}
            />
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
};
export default Navigation;