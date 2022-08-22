import { Alert, Box, Button } from '@mui/material'
import { TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserLogin() {

    const navigate = useNavigate();

    const [error, setError] = useState({
        status: false, 
        msg : "",
        type : ""
    });

    const saveLoginToLocalStorage = (userName) => {
        localStorage.setItem('userName', userName);
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);

        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }

        if (actualData.email && actualData.password)
        { 
            const config = {
                headers: {
                    "Content-Type":"application/json"
                }
            }
            const body = {
                email: actualData.email, 
                password : actualData.password
            }
            await axios.post('http://localhost:5000/api/users/login', body, config).then((res) =>
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
                    saveLoginToLocalStorage(res.data.userName);
                    
                    navigate('/');
                }
            }).catch((e) => {
                console.log("Error :- ", e);
            })
            
            console.log(actualData);
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
        <Box component='form' sx={{width : 450 , mt : 3}} novalidate  id="login-form" onSubmit={handleSubmit}>
            <TextField margin='normal'  sx={{width : 400}} id='email' name='email' label='Email Address' />
            <TextField margin='normal'  sx={{width : 400}} id='password' name='password' label='Password' type='password'/>
        
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