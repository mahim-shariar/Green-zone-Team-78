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
import { Avatar,useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Nav.css'

const style = {
    textDecoration:'none',
    marginRight: '10px',
    fontSize: '17px',
    color:'black'   
}

const Navigation = () => {
  const { user, logout } = useAuth();

  const theme=useTheme()
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display:'none'
      }
    },
    navIconContainer: {
      [theme.breakpoints.down('sm')]: {
        display:'none'
      }
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign:'center'
      }
    }
  })
  const { navIcon,navIconContainer,navLogo } = useStyle();
  
  const [state, setState] = React.useState(false);
    <Box
    sx={{ width:250 }}
    role="presentation"
   >
  <List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
  <Divider />
  <List>
    {['All mail', 'Trash', 'Spam'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Box>

    return (
       <> <Box sx={{ flexGrow: 1}}>
        <AppBar position="fixed" sx={{backgroundColor:'white' }}>
          <Toolbar>
            <IconButton         
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
            >
            <MenuIcon sx={{ color: 'black' }}/>
              </IconButton>
             <div style={{backgroundColor:'#e1c265',padding:'12px'}}>
            <img
             src="https://i.ibb.co/B3nYkvY/logo-small.png"
             alt=""
             className={navLogo}
              />
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Box className={navIconContainer}>
            <Link to='/home' style={style}><Button color="inherit">Home</Button></Link>
            <Link to='/meetBenefit' style={style}><Button color="inherit">About</Button></Link> 
              <Link to='/explores' style={style}><Button color="inherit">Explore</Button></Link>                  
              <Link to='/reviews' style={style}><Button color="inherit">Reviews</Button></Link>      
            {
              user.email &&<Link to='/dashboard' style={style}><Button color="inherit">Dashboard</Button></Link>  
              }    
            {
              user.email?<Button onClick={logout} style={{backgroundColor: '#e1c265',fontSize:'15px',color:'white'}}>Log Out</Button>:
              <Link to='/login' style={style}>
            <Button style={{backgroundColor: '#e1c265',fontSize:'15px',color:'white'}}>Login</Button>
            </Link>
            }
              </Box>
            {
              user.email && <Avatar
              alt="Remy Sharp"
              src={user?.photoURL}
              sx={{ width: 45, height: 45,m:1 }}
            />
            }
          </Toolbar>
        </AppBar>
      </Box>
        <div>
     
          <React.Fragment>
            <Button onClick={()=>setState(true)}>Click</Button>
            <Drawer
              open={state}
              onClose={()=>setState(false)}
            >
            </Drawer>
          </React.Fragment>
      
      </div> </>
    );
};
export default Navigation;