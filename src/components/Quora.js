import React from 'react'
import QuoraHeader from './QuoraHeader'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './css/Quora.css'

function Quora() {
    return (
        <div className='quora'>
            <QuoraHeader />
            <div className='quora__contents'>
                <div className='quora__content'>
                    <Sidebar />
                    <Feed />
                    <Widget/>
                </div>
            </div>
        </div>
    )   
}

export default Quora