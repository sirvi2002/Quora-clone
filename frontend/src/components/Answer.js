import { Avatar, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ReactHtmlParser from "html-react-parser";
import ReactTimeAgo from "react-time-ago";
import './css/Answer.css'
import axios from 'axios';
import Reply from './Reply'
import { Stack } from '@mui/material';

function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    );
  }

function Answer({ _a }) {

    // console.log(_a);
    const [replies, setReplies] = useState([]);
    
    useEffect(() => {
         axios.get('http://localhost:5000/api/replies', {
            params: {
                id: _a._id
            }
        }).then((res) => {
            setReplies(res.data);
        });
    },[]);
    
    const [switchToggled, setSwitchToggled] = useState(false);
    const [switchName, setSwitchName] = useState(true);
    const [reply, setReply] = useState("");
    

    //toggle the state for hiding the reply div
    const handleReply = () => {
        switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    };

    const handleReplyName = async () => {
        switchName ? setSwitchName(false) : setSwitchName(true);
        console.log(switchName);
        
    }
    
    const handleChangeReply = (e) => {
        setReply(e.target.value);
    }

    const handleReplySubmit = async () => {
        if (_a._id && reply !== "")
        {
            const body = {
                _id: _a._id,
                replies: reply
            }
            await axios.post('http://localhost:5000/api/replies', body)
                .then((res) => {
                    console.log("Reply Added");
                    alert("Reply Added");
                    handleReply();
                    window.location.href = '/questionDetails';
                })
                .catch((e) => {
                    console.log("Error :- ", e);
                    console.log("Reply Not Added");
                });
        }
    };

    return (
        <div className="post-answer-container">
            <div className='post-answer-detail'>
                <div className="post-answered">
                    <Avatar src={_a?.user?.photo} />
                    <div className="post-info">
                        <Stack direction="column" ml={1} spacing={-1.5}>
                            <p>UserName</p>
                            <span>
                                <LastSeen date={_a?.createdAt} />
                            </span>
                        </Stack>
                        {/* <p>{_a?.user?.userName}</p> */}
                        
                    </div>
                </div>
                <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
                <div className='reply-div'>
                    <span className='show-reply'  onClick={handleReplyName}> {switchName ? 'Show all replies' : 'Hide all replies'}</span>
                    <span className='reply' onClick={handleReply}>Reply</span>
                </div>
                <div className= {switchToggled ? 'd-flex':'d-none'}>
                    <input type='text' className='form-control' onChange={handleChangeReply}></input>
                    <Button style={{backgroundColor: "#000", 
                    color: "white",
                    margin: "20px"
                }} onClick={handleReplySubmit} >Reply</Button>
                </div>
                <div className={switchName ? 'd-none' : 'd-flex'}>

                
                <div >
                    {
                        
                            replies.map((reply, index) => (<Reply key={index} reply ={reply}/>))
                        
                    }
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default Answer
