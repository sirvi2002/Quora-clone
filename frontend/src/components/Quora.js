import React from 'react'
import QuoraHeader from './QuoraHeader'
import './css/Quora.css'
import QuestionDetails from './QuestionDetails'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home'
import LoginReg from './Auth/LoginReg';

function Quora() {
    return (
        <Router>
            <div className='quora'>
                <QuoraHeader />
                
                <div className='quora__contents'>
                    <div className='quora__content'>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/questionDetails">
                            <QuestionDetails />
                        </Route>
                        <Route path='/loginReg' >
                            <LoginReg/>    
                        </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )   
}

export default Quora