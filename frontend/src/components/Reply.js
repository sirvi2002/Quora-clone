import React from 'react'

function Reply({ reply }) {
    console.log(reply);
    return (
        <div>

            <div className="d-flex" style={{"margin":"20px"}}>{reply}</div>
        </div>
           
    )
}

export default Reply