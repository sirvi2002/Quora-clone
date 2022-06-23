import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import {  ExpandMoreOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons'
import { Avatar, Button, Input} from '@material-ui/core'
import "./css/QuoraHeader.css";
import 'react-responsive-modal/styles.css'
import Modal from 'react-responsive-modal'
import axios from 'axios'

function QuoraHeader() {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const [inputUrl , setInputUrl] = useState("")
    const [question, setQuestion] = useState("");

    const handleSubmit = async() => {
        console.log("QUestion" ,question);
        if (question !== "")
        {
            const config = {
                headers: {
                    "Content-Type":"application/json"
                }
            }
            const body = {
                questionName: question,
                questionUrl : inputUrl 
            }
            await axios.post('http://localhost:5000/api/questions', body, config).then((res) =>
            {
                console.log(res.data);
                alert(res.data.message);
                window.location.href = '/';
            }).catch((e) => {
                console.log("Error :- ", e);
            })
        }
    }

    const loginReg = () => {
        window.location.href = '/loginReg';
    };

    return (
        <div className='qHeader'>
            <div className='qHeader-content'>
                <div className='qHeader__logo'>
                    <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt='logo'></img>

                </div>
                <div className='qHeader__icons'>
                        <div className='qHeader__icon'> <HomeIcon/> </div>
                     
                        <div className='qHeader__icon'> <NotificationsOutlined /></div>
                        
                    </div>

                    <div className='qHeader__input'>
                        <Search />
                        <input type='text' placeholder="Search Question"></input>
                    </div>

                    <div className='qHeader__Rem'>
                        <Avatar/>
                    </div>

                
                <Button style={{backgroundColor: "#000", 
                    color: "white",
                    margin: "20px"
                }}
                    onClick={onOpenModal}>Add Question</Button>
                
                <Button style={{backgroundColor: "#000", 
                    color: "white",
                    margin: "20px"
                }} onClick={loginReg}>Login / Sign Up</Button>

                


                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    center
                    closeOnOverlayClick={false}
                    styles=
                    {{
                        overlay: {
                            height :"auto",
                        }
                    }}
                >
                    <div className='modal__title'>
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className='modal__info'>
                        <Avatar className='avatar'/>
                        <div className='modal__scope'>
                            <PeopleAltOutlined />
                            <p>Public</p>
                            <ExpandMoreOutlined/>
                        </div>
                    </div>
                    <div className='modal__field'>
                        <Input
                            value = {question}
                            onChange={(e)=> setQuestion(e.target.value)}
                            type='text' placeholder="Start your question 'What', 'How', 'Why', etc."
                        fullWidth/>
                        <div style=
                        {{
                            display: "flex",
                            flexDirection : "column"
                        }}>
                            <input type="text"
                                onChange={(e)=>setInputUrl(e.target.value)}
                                style={{
                                    margin: "5px 0",
                                    border: "1px solid lightgray",
                                    padding: "10px",
                                    outline : "2px solid black #000"
                                }}
                                placeholder='Optional: include a link that gives context'>
                                
                            </input>
                            {
                                inputUrl !== "" && <img style={{
                                    height: "40vh",
                                    objectFit : "contain"
                                }} 
                                src={inputUrl} alt='displayImage' />
                            }
                        </div>
                    </div>
                    
                    <div className='modal__buttons'>
                        <button className='cancel' onClick={()=>setOpen(false)}>Cancel</button>
                        <button onClick={handleSubmit} type="submit" className='add'>Add Question</button>
                    </div>

                </Modal>
            </div>
        </div>
        
    )
}

export default QuoraHeader