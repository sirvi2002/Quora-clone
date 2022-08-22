import { Alert, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

function Registration() {

    const [error, setError] = useState({
        status: false, 
        msg : "",
        type : ""
    });

    const handleSubmit = async (e) => {
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

        if (actualData.password !== actualData.confirm_password)
        {
            setError({
                status: true, msg: "Password does not match", type:
                "error"
            })
            return;
        }
        
       

        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }
        const body = {
            username: actualData.username ,
            email: actualData.email, 
            password : actualData.password
        }
        await axios.post('http://localhost:5000/api/users/register', body, config).then((res) =>
        {
            if (res.data.status === false)
            {
                setError({
                    status: true, msg: res.data.message, type:
                    "error"
                })
            }
            else
            {
                setError({
                    status: true, msg: res.data.message, type:
                    "success"
                })
            }
        }).catch((e) => {
            console.log("Error :- ", e);
        })
    };

    return (
        <Box component='form'sx={{width : 450 , mt:3}} novalidate id="register-form" onSubmit={handleSubmit}>
            <TextField sx={{width : 400}} margin='normal' fullWidth id='username' name='username' label='Name'/>
            <TextField margin='normal' sx={{width : 400}} id='email' name='email' label='Email Address' />
            <TextField margin='normal' sx={{width : 400}} id='password' name='password' label='Password' type='password'/>
            <TextField margin='normal' sx={{width : 400}} id='confirm_password' name='confirm_password' label='Confirm Password' type='password'/>
            
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