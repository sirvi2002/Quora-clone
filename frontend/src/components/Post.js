import { Avatar, IconButton } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './css/Post.css'
import 'react-responsive-modal/styles.css'
import Modal from 'react-responsive-modal'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ReactTimeAgo from "react-time-ago";
import axios from 'axios';
import { Provider, UpdownButton } from "@lyket/react";
import Stack from '@mui/material/Stack';
import {
    useNavigate
  } from "react-router-dom";
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Tooltip from '@mui/material/Tooltip';
function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    );
  }

function Post({ post }) {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState("");

    const handleQuill = (value) => {
        setAnswer(value);
    }

    const handleSubmit = async() =>
    {
        if (post?._id && answer !== "")
        {
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
            };
            const body = {
                answer: answer,
                questionId: post?._id
            };
            await axios
                .post("http://localhost:5000/api/answers", body, config)
                .then((res) => {
                console.log(res.data);
                alert("Answer added succesfully");
                setOpen(false);
                navigate('/');
            })
            .catch((e) => {
                console.log(e);
            });
        }
    }

    

    return (
    
        <div className='post'>
            <div className='post__info'>
                <Stack direction="row" spacing={35} mb={3}>
                    <Stack direction="row" spacing={2}>
                        <Avatar/>
                        <Stack direction="column" spacing={-1}>
                            <h6>User Name</h6>
                            <small>
                            <LastSeen date={post?.createdAt}/>
                            </small>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
            <div className='post__body'>
                <div className='post__question'>
                        <p>{post?.questionName}</p>
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
                    <h1>{ post?.questionName}</h1>
                    <p>
                        asked by
                        <span className="name">{post?.user?.userName}
                        </span> on{" "}
                        <span className="name">
                        {new Date(post?.createdAt).toLocaleString()}
                        </span>
                    </p>
                </div>
                <div className='modal__answer'>
                    <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer'/>
                </div>
                <div className='modal__button'>
                    <button className='cancel' onClick={()=>setOpen(false)}>Cancel</button>
                    <button onClick={handleSubmit} type="submit" className='add'>Add Answer</button>
                </div>
            </Modal>

            {
               post.questionUrl!=="" && <img src = {post?.questionUrl} alt="Question URL"></img>
            }

            <div className='post__footer'>
                

            <div className='post__footer'>
                <MdThumbUp className='like'/>
                <MdThumbDown  className='dislike'/>
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
                {post?.allAnswers.length} Answer(s)
            </p>
            </div>
        
    )
}

export default Post