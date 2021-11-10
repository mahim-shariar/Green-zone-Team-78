import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Avatar } from '@mui/material';

const style = {
    textDecoration:'none',
    marginRight: '10px',
    fontSize: '17px',
    color:'black'   
}

const Navigation = () => {
  const { user,logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="fixed" sx={{backgroundColor:'white' }}>
          <Toolbar>
            <IconButton         
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <MenuIcon sx={{ color: 'black' }}/>
              </IconButton>
             <div style={{backgroundColor:'#e1c265',padding:'12px'}}>
            <img
            src="http://barhouse.like-themes.com/wp-content/uploads/2018/05/logo-small.png"
            alt="" />
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
              <Link to='/home' style={style}><Button color="inherit">Home</Button></Link>      
              <Link to='/about' style={style}><Button color="inherit">About</Button></Link>      
              <Link to='/products' style={style}><Button color="inherit">Products</Button></Link>      
              <Link to='/reviews' style={style}><Button color="inherit">Reviews</Button></Link>      
            {
              user.email?<Button onClick={logout} style={{backgroundColor: '#e1c265',fontSize:'15px'}}>Log Out</Button>:
              <Link to='/login' style={style}>
            <Button style={{backgroundColor: '#e1c265',fontSize:'15px'}}>Login</Button>
            </Link>
            }
            {
              user.email && <Avatar
              alt="Remy Sharp"
              src={user.photoURL}
              sx={{ width: 45, height: 45,m:1 }}
            />
            }
          </Toolbar>
        </AppBar>
      </Box>
    );
};
export default Navigation;