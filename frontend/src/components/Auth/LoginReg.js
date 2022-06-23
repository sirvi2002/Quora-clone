import { Box, Card, Grid, Tab, Tabs, useTheme } from '@mui/material'
import React, { useState } from 'react'
import UserLogin from './UserLogin';
import SwipeableViews from 'react-swipeable-views';
import Registration from './Registration';

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

    return (
        <Box>
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
        </Box>
    )
}

export default LoginReg