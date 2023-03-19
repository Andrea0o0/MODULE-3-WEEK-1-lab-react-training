import React, {useState,useEffect} from 'react'

const LikeButton = () => {
    const color = ['purple','blue','green','yellow','orange','red']
    const [like,setLike] = useState(0)
    const [theme,setTheme] = useState(color[0])

    useEffect(() => {
        const index_color = (like - Math.floor(like/color.length)*color.length)
        setTheme(color[index_color])
    },[like])

    const handleLike = () => {
        setLike(prev => prev +1)
    }



    return (
        <div className='LikeButton_container'>
        <button style={{backgroundColor:theme}} onClick={handleLike}>{like} Likes</button>
        </div>
    )
}

export default LikeButton