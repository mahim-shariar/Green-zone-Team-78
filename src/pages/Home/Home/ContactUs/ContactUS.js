import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Navigation from './../../../Shared/Navigation/Navigation';
import Footer from './../../../Shared/Footer/Footer';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jd2vut8', 'template_bg4eths', form.current, 'user_NRf7diQwuUv2Bb08KfTHH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };

    return (
        <>
            <Container id="contact" data-aos="zoom-out-down" className='py-5'>
                <Navigation></Navigation>
                <Grid container spacing={2} sx={{ marginY: 10 }} >
                    <Grid item xs={12} md={6} lg={6} className='my-auto' >
                        <form ref={form} onSubmit={sendEmail} className='mx-auto d-flex flex-column w-100 '>
                            <h1 className='abouts-color text-start' > Contact me </h1>
                            <label className='text-dark text-start fw-bold' >Name</label>
                            <input type="text" name="user_name" />
                            <label className='text-dark text-start fw-bold' >Email</label>
                            <input type="email" name="user_email" />
                            <label className='text-dark text-start fw-bold' >Message</label>
                            <textarea name="message" />
                            <input className='back-color btn' type="submit" value="Send" />
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <div>
                            <img className='img-fluid' src="https://whiteroseng.com/wp-content/uploads/2021/02/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};