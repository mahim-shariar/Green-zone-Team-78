import useAuth from '../../../../hooks/useAuth';
import loginBanner from '../../../../../image/login.jpg';
import { useState } from 'react';
import Navigation from '../../../../Shared/Navigation/Navigation';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './Login.css'
import { Google } from '@mui/icons-material';
import React from 'react';

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
        <>
            <Navigation></Navigation>
            <Container>
                {isLoading ? <CircularProgress sx={{color:'rgb(167, 19, 36)'}} /> : <Grid container spacing={2} sx={{ my: 10 }} className='shadow-lg' >
                    <Grid item sx={{ mt: 8 }} xs={12} md={6} style={{ borderRadius: '5px', marginTop: '50px', backgroundColor: '#f8f9fa', color: '#14539a', padding: '20px' }}>
                        <Typography variant="h4" gutterBottom sx={{ color: '#574437' }} >Please Login</Typography> <hr />
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
                                variant="standard" /> <br />
                            {authError ? <Alert className="mx-auto" sx={{width:'75%',m:1}} severity="error">{authError.slice(22,100).split(').')}</Alert> : <div className='mb-3' ></div> }
                            <Button sx={{ backgroundColor: 'rgb(167, 19, 36)', color: 'white', border: 'solid 1px #574437', width: '75%' }} type="submit" className='btn-style' variant="outlined">Login</Button> <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New to Green Zone? Please Click SignUp</Button>
                            </NavLink>
                            {/* {isLoading && <CircularProgress />} */}
                            {user?.email && <Alert severity="success"> Successfully Login!</Alert>}
                        </form>
                        <p style={{ color: '#574437' }} >------------OR-------------</p>
                        <Button onClick={handleGoogleSignIn} className='btn-style' variant="outlined" sx={{ backgroundColor: 'rgb(167, 19, 36)', color: 'white', border: 'solid 1px #574437', marginY: 5, marginTop: 0 }}>
                            <Google></Google>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={loginBanner} alt="" />
                    </Grid>
                </Grid>}
            </Container>
        </>
    );
};

export default Login;