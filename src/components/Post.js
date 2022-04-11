import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './css/Post.css'
import 'react-responsive-modal/styles.css'
import Modal from 'react-responsive-modal'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Post() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className='post'>
            <div className='post__info'>
                <Avatar/>
                <h4>User Name</h4>
                <small>
                    Time Stamp
                </small>
            </div>
            <div className='post__body'>
                <div className='post__question'>

                    <p>This is Test Question</p>
                    <button onClick={()=>setOpen(true)} className='post__btnAnswer'>Answer</button>
                </div>
            </div>

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

                <div className='modal__question'>
                    <h1>This is the Test Question</h1>
                    <p>Asked by {" "}</p><span>Username</span>{" "}on{" "}timestamp
                </div>
                <div className='modal__answer'>
                    <ReactQuill placeholder='Enter your answer'/>
                </div>
                <div className='modal__button'>
                    <button className='cancel' onClick={()=>setOpen(false)}>Cancel</button>
                    <button type="submit" className='add'>Add Answer</button>
                </div>
            </Modal>


            <div className='post__footer'>
                <div className='post__footerAction'>
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined/>
                </div>
                <RepeatOneOutlined />
                <ChatBubbleOutlined />
                <div className='post__footerRight'>
                    <ShareOutlined />
                    <MoreHorizOutlined/>
                </div>
            </div>
        
            <p
                style=
                {{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "12px",
                    fontWeight: "bold",
                    margin: "10px 0"
                }}>
                1 Answer
            </p>

            <div style=
                {{
                    margin: "5px 0px 0px 0px",
                    padding: "5px 0px 0px 20px",
                    borderTop: "1px solid lightgray"
                }} className='post__answer'>
                
                <div style=
                    {{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        padding: "10px 5px",
                        borderTop : "1px solid lightgray"

                    }} className='post-answer-container'>
                    <div
                        style=
                        {{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                            fontSize: "12px",
                            fontWeight: 600,
                            color:"#888"
                        }}
                        className='post-answered'>
                        <Avatar />
                        <div
                            style=
                            {{
                                margin :"0px 10px",
                            }}
                            className='post-info'>
                            <p>
                                Username 
                            </p>
                            <span>Time Stamp</span>
                        </div>
                    </div>
                    <div className='post-answer'>
                        This is test answer
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post