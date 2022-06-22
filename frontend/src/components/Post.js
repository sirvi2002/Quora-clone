import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './css/Post.css'
import 'react-responsive-modal/styles.css'
import Modal from 'react-responsive-modal'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ReactTimeAgo from "react-time-ago";
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    );
  }

function Post({ post }) {
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
                window.location.href = "/";
            })
            .catch((e) => {
                console.log(e);
            });
        }
    }

    

    return (
        <Link to={{
            pathname: '/questionDetails',
            state : post 
        }} style={{ color: '#000', 'text-decoration': 'none' }} >
        <div className='post'>
            <div className='post__info'>
                <Avatar/>
                <h4>User Name</h4>
                <small>
                    <LastSeen date={post?.createdAt}/>
                </small>
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
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined/>
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
        </Link>
    )
}

export default Post