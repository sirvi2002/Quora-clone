import { Alert, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

function Registration() {

    const [error, setError] = useState({
        status: false, 
        msg : "",
        type : ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);

        const actualData = {
            username: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
            confirm_password: data.get('confirm_password')
        }

        if (actualData.email === '' || actualData.password === '' || actualData.email === '' || actualData.confirm_password === '')
        {
            setError({
                status: true, msg: "All Fields are Required", type:
                "error"
            })
            return;
        }

        if (actualData.password != actualData.confirm_password)
        {
            setError({
                status: true, msg: "Password does not match", type:
                "error"
            })
            return;
        }
        
        setError({
            status: true, msg: "Registration successful", type:
            "success"
        })
    };

    return (
        <Box component='form' novalidate sx={{mt : 3}} id="register-form" onSubmit={handleSubmit}>
            <TextField margin='normal' fullWidth id='username' name='username' label='Name'/>
            <TextField margin='normal' fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' fullWidth id='password' name='password' label='Password' type='password'/>
            <TextField margin='normal' fullWidth id='confirm_password' name='confirm_password' label='Confirm Password' type='password'/>
            
            <Box textAlign='center'>
                <Button type='submit' variant='contained'>
                    Register
                </Button>
            </Box>
            <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert>

        </Box>
    )
}

export default Registration