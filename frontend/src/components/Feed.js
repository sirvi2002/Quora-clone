import React, { useEffect, useState } from 'react'
import './css/Feed.css'
import FeedPost from './FeedPost'
import axios from 'axios'


function Feed() {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/questions').then((res) => {
            console.log(res.data);
            setPosts(res.data.reverse());
        }).catch((e) => {
            console.log(e);
        })
    },[])
    return (
        <div className='feed'>
            {
                posts.map((post, index) => (<FeedPost key={index} post = {post} />))
            }
        </div>
    )
}

export default Feed