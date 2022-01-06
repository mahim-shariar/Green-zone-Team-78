import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    //     const user = { email };
    //     fetch('https://stormy-wave-87937.herokuapp.com/users/admin', {
    //         method: 'put',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // };

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://stormy-wave-87937.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    
    return (
        <div style={{border:'1px solid black',padding:'10px'}}>
            <Typography variant='h4' sx={{fontWeight:'800',backgroundColor:'gray'}}>Make an Admin</Typography> <hr />
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Email")}
                    type="email"
                    placeholder="Email"
                />
            <input type="submit" placeholder="Make Admin"/>
             </form> */}
             <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br /> <br />
                <Button type="submit" variant="contained" size='large' color='success'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
          </div>
    );
};

export default MakeAdmin;