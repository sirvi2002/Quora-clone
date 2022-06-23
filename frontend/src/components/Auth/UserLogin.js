import { Alert, Box, Button } from '@mui/material'
import { TextField } from '@mui/material'
import React, { useState } from 'react'

function UserLogin() {

    const [error, setError] = useState({
        status: false, 
        msg : "",
        type : ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);

        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }

        if (actualData.email && actualData.password)
        { 
            console.log(actualData);
            setError({
                status: true, msg: "Login Success", type:
                "success"
            })
            document.getElementById('login-form').reset();
        }
        else 
        {
            setError({
                status: true, msg: "All Fields are Required", type:
                "error"
            })
        }
    };

    return (
        <Box component='form' novalidate sx={{mt : 3}} id="login-form" onSubmit={handleSubmit}>
            <TextField margin='normal'  fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal'  fullWidth id='password' name='password' label='Password' type='password'/>
        
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{mt:2}}>
                    Login
                </Button>
            </Box>

            <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert>

        </Box>
    )
}

export default UserLogin