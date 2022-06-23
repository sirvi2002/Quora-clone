import { Box, Card, Grid, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'

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

    const [value, setValue] = useState(0);

    

    const handleChange = (event , newValue) => {
        setValue(newValue);
    }


    return (
        <Grid container sx={{height:'90vh'}}>
        <Grid item  >
            <Card sx={{ width: '100%', height: '100%' }}>
                <Box>
                    <Box sx={{borderBottom : 1 , borderColor : 'divider'}}>

                        <Tabs value={value} textColor='#fff' onChange={handleChange} >
                            <Tab label='Login' sx={{textTransform : 'none'}}>
                                Login
                            </Tab>
                            <Tab label='Register'>
                                Register
                            </Tab>
                        </Tabs>
                    </Box>

                    <TabPanel value ={value} index={0}>User Login</TabPanel>
                    <TabPanel value ={value} index={1}>Registraion</TabPanel>
                </Box>
            </Card>
        </Grid>
        </Grid>
    )
}

export default LoginReg