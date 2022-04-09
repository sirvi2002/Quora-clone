import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import { NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons'
import { Avatar, Button } from '@material-ui/core'
import "./css/QuoraHeader.css";

function QuoraHeader() {
    return (
        <div className='qHeader'>
            <div className='qHeader-content'>
                <div className='qHeader__logo'>
                    <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt='logo'></img>

                    

                </div>
                <div className='qHeader__icons'>
                        <div className='qHeader__icon'> <HomeIcon/> </div>
                        <div className='qHeader__icon'> <FeaturedPlayListOutlinedIcon/> </div>
                        <div className='qHeader__icon'> <AssignmentTurnedInOutIcon/> </div>
                        <div className='qHeader__icon'> <PeopleAltOutlined/></div>
                        <div className='qHeader__icon'> <NotificationsOutlined/></div>
                    </div>

                    <div className='qHeader__input'>
                        <Search />
                        <input type='text' placeholder="Search Question"></input>
                    </div>

                    <div className='qHeader__Rem'>
                        <Avatar/>
                    </div>

                    <Button>Add Question</Button>
            </div>
        </div>
        
  )
}

export default QuoraHeader