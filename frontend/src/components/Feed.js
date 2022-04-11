import React, { useEffect, useState } from 'react'
import QuoraBox from './QuoraBox'
import './css/Feed.css'
import Post from './Post'
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
            <QuoraBox />
            {
                posts.map((post, index) => (<Post key={index} post = {post}/>))
            }
        </div>
    )
}

export default Feed