import React from "react";

const Random = ({min,max}) => {
    let between = Math.floor(Math.random()*max)
    return (
        <div className='Random_container'>
            <p>Random value between {min} and {Math.round(max)} {'=>'} {between}</p>
        </div>
    )
}

export default Random