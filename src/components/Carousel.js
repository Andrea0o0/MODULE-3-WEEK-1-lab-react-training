import React, {useState,useEffect} from "react";

export default function Carousel({images}){
    const [image,setImage] = useState(images[0])
    const [index,setIndex] = useState(0)

    const handleImage = () => {
        setImage(images[index])
    }

    useEffect(() => {
        handleImage()
        // eslint-disable-next-line
    },[index])
    
    const handleRight = () => {
        console.log(index,images.indexOf(image))
        setIndex(prev => prev<images.length-1 ? prev + 1: 0)
    }

    const handleLeft = () => {
        console.log(index,images.indexOf(image))
        setIndex(prev => prev>0 ? prev - 1: images.length-1)
    }

    return (
        <div className='Carousel_container'>
            <button onClick={handleLeft}>Left</button>
            <img src={image} alt={index}/>
            <button onClick={handleRight}>Right</button>
        </div>
    )
}