import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import { Avatar, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import './Nav.css'
import useAuth from './../../hooks/useAuth';
// import { Navbar } from 'react-bootstrap';

const style = {
  textDecoration: 'none',
  marginRight: '10px',
  fontSize: '17px',
  color: 'black'
}

const Navigation = () => {
  const { user, logout } = useAuth();

  const theme = useTheme()
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    navIconContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      }
    }
  })
  // const { navIcon, navIconContainer } = useStyle();

  // const [state, setState] = React.useState(false);

  return (
    // <> <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //         className={navIcon}
    //       >
    //         <MenuIcon sx={{ color: 'black' }} />
    //       </IconButton>
    //       <div style={{ padding: '12px' }}>

    //       </div>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       </Typography>

    //       
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    //   <div>

    //     <React.Fragment>
    //       <Button onClick={() => setState(true)}>Click</Button>
    //       <Drawer
    //         open={state}
    //         onClose={() => setState(false)}
    //       >
    //       </Drawer>
    //     </React.Fragment>

    //   </div> </>
    <Navbar bg="light" variant="light" className='mx-2' collapseOnSelect expand="lg" style={{ backgroundColor: '#0a1735',}}>
      <Navbar.Brand href="#home">
        <h5>
          <img
            // className='img-fluid'
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
// className='text-black fw-bold navbar'