import { Avatar } from '@material-ui/core'
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react'
import './css/Post.css'
import 'react-responsive-modal/styles.css'
import 'react-quill/dist/quill.snow.css'
import ReactTimeAgo from "react-time-ago";
import Stack from '@mui/material/Stack';
import {
    useNavigate
  } from "react-router-dom";
  import { MdThumbDown, MdThumbUp,MdOpenInFull } from 'react-icons/md';
import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import { grey, red } from '@material-ui/core/colors';

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
   

    const handleClick = () => {
        navigate('/questionDetails',{state:post})
    };

    return (
        
        <Card variant="outlined"  sx={{
            boxShadow: 1,
            p: 1,
            m: 1,
            borderRadius: 1,
            
            fontSize: '0.875rem',
            fontWeight: '700',
          }}>
        <div className='post'>
            <div className='post__info'>
                <Stack direction="row" spacing={35} mb={3}>
                    <Stack direction="row" spacing={2}>
                        <Avatar />
                            <Stack direction="column" spacing={-1}>
                                    <h6>User Name</h6>
                                <small>
                                <LastSeen date={post?.createdAt}/>
                                </small>
                            </Stack>
                    </Stack>
                    <Tooltip title='Open' className='openInFull' arrow>
                        <IconButton>
                            <MdOpenInFull onClick={handleClick} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </div>
            <div className='post__body'>
                <div className='post__question'>
                    <p>{post?.questionName}</p>
                </div>
            </div>
            {
               post.questionUrl!=="" && <img src = {post?.questionUrl} alt="Question URL"></img>
            }

            <div className='post__footer'>
                <MdThumbUp className='like'/>
                <MdThumbDown  className='dislike'/>
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
        </Card>
    )
}

export default Post