import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
// import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    //     const user = { email };
    //     fetch('http://localhost:5000/users/admin', {
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
        fetch('http://localhost:5000/users/admin', {
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
        <div>
            <h2>Make an admin</h2>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Email")}
                    type="email"
                    placeholder="Email"
                />
            <input type="submit" placeholder="Make Admin"/>
             </form> */}
             <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br /> <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
          </div>
    );
};

export default MakeAdmin;