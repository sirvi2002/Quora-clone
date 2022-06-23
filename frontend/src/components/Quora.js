import React from 'react'
import QuoraHeader from './QuoraHeader'
import './css/Quora.css'
import QuestionDetails from './QuestionDetails'

import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";
import Home from './Home'
import LoginReg from './Auth/LoginReg';

function Quora() {
    return (
        <BrowserRouter>
            <div className='quora'>
                <QuoraHeader />
                <div className='quora__contents'>
                    <div className='quora__content'>
                    <Routes>
                        <Route path="/" element={<Home/>}>
                        </Route>
                        <Route path="/questionDetails" element={<QuestionDetails/>}>
                        </Route>
                        <Route path='/loginReg' element={<LoginReg/>}>    
                        </Route>
                    </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )   
}

export default Quora