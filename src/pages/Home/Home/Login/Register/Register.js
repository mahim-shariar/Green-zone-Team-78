import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../../../Shared/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import './Register.css'
import { Google } from '@mui/icons-material';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { user, registerUser, signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2} sx={{ my: 10 }} className='shadow-lg' >
                    <Grid item xs={12} md={6} style={{ borderRadius: '5px', marginTop: '50px', color: 'white' }}>
                        <Typography variant="h4" gutterBottom sx={{ color: '#574437' }} >Please create an account</Typography> <hr />
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                style={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />
                            <TextField
                                style={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />
                            <TextField
                                style={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />
                            <TextField
                                style={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />
                                { loginData.password !== loginData.password2 ? <Alert className='mx-auto' sx={{width:'75%',m:1}} severity="error">Passwords did not match</Alert> : <div className='mb-3' ></div>}
                                {authError && <Alert className='mx-auto' sx={{width:'75%',m:1}} severity="error">{authError.slice(9,100).split('(auth/weak-password).')}</Alert>}
                            <Button style={{ width: '75%', m: 1 }} className='btn-style' type="submit" variant="outlined" sx={{ backgroundColor: 'rgb(167, 19, 36)', color: 'white', border: 'solid 1px rgb(167, 19, 36)' }}>Register</Button> <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                            <p style={{ color: '#574437' }} >------------OR-------------</p>
                            <Button onClick={handleGoogleSignIn} className='btn-style' variant="outlined" sx={{ backgroundColor: 'rgb(167, 19, 36)', color: 'white', border: 'solid 1px #574437', marginY: 5, marginTop: 0 }}>
                                <Google></Google>
                            </Button>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', marginTop: '5%' }} src='https://img.freepik.com/free-vector/messenger-concept-illustration_114360-860.jpg?size=626&ext=jpg' alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;