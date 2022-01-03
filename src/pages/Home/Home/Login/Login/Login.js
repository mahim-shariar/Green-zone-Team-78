import useAuth from '../../../../hooks/useAuth';
import loginBanner from '../../../../../image/login.jpg';
import { useState } from 'react';
import Navigation from '../../../../Shared/Navigation/Navigation';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './Login.css'
import { Google } from '@mui/icons-material';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Navigation></Navigation>
            <Grid container spacing={2} sx={{ mt: 10 }} >
                    <Grid item sx={{ mt: 8 }} xs={12} md={6} style={{ borderRadius:'5px', marginTop: '50px', backgroundColor: '#f9d66f', color: '#14539a', padding: '20px' }}>
                        <Typography variant="h4" gutterBottom sx={{color:'white'}} >Please Login</Typography> <hr />
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                style={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" /> <br />
                            <TextField
                                style={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" /> <br /> <br />

                            <Button sx={{backgroundColor:'#574437',color:'white',border:'solid 1px #574437',width:'75%'}} type="submit" className='btn-style' variant="outlined">Login</Button> <br /><br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New to Barhouse? Please Click SignUp</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success"> Successfully Login!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <p style={{color:'#574437'}} >------------OR-------------</p>
                        <Button onClick={handleGoogleSignIn} className='btn-style'  variant="outlined" sx={{backgroundColor:'#574437',color:'white',border:'solid 1px #574437' ,marginY:5 , marginTop:0}}>
                            <Google></Google>
                        </Button>
                    </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginBanner} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;