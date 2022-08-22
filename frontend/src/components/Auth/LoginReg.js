import { Box, Card, Grid, Tab, Tabs, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserLogin from './UserLogin';
import SwipeableViews from 'react-swipeable-views';
import Registration from './Registration';
import lottie from "lottie-web";
import reactLogo from "../qa5.json";
import '../css/LoginReg.css'

const TabPanel = (props) => 
    {
        const { children, value, index } = props; 
        return (
            <div role='tabpanel' hidden={value !== index}>
                {
                    value === index && (
                        <Box>{children}</Box>
                    )
                }
            </div>
        )
    }

function LoginReg() {
    const theme = useTheme();

    const [value, setValue] = useState(0);

    const handleChange = (event , newValue) => {
        setValue(newValue);
    }

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#qa"),
            animationData: reactLogo,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
            
        })
    }, []);

    return (
        <div className='rowC'>
            <div className='colC'>
                <div id="qa" style={{ width: 300, height: 300 }}></div>
                <div className="text">A place to share knowledge and ideas</div>
                <div className="text">Ask, Answer and Discuss</div>
                
            </div>
            <div className='right'>
            <Box sx={{borderBottom : 1 , borderColor : 'divider'}}>

                <Tabs value={value} textColor='#fff' onChange={handleChange} centered>
                    <Tab label='Login' variant='fullWidth'>
                        Login
                    </Tab>
                    <Tab label='Register'>
                        Register
                    </Tab>
                </Tabs>
            </Box>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChange}
            >

                <TabPanel value ={value} index={0} dir={theme.direction}><UserLogin/> </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}><Registration/></TabPanel>
                </SwipeableViews>
                </div>
        </div>
    )
}

export default LoginReg