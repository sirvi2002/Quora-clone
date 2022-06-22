import React from 'react'
import { useLocation } from 'react-router-dom';
import Post from './Post'
import './css/Quora.css'
import Answer from './Answer';

function QuestionDetails() {
    const location = useLocation();
    const post = location.state; 
    console.log(post);
    const handleAnswers = post?.allAnswers?.map((_a) => (<Answer _a={_a} />));
    return (
        <>
            
                <Post post={post}></Post>
            <div style={{
                display: 'flex',
                flexDirection : 'column',
                margin: '10px 10px',
                
                width: '100%',
                height : '100%'
                }}>
                    {handleAnswers}
            </div>
            
            
        </>
        
    )
}

export default QuestionDetails