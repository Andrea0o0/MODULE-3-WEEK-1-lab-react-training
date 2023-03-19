import React, {useState} from "react";

export default function ClickablePicture({img,imgClicked}){
    const [image,setImage] = useState(img)

    const handleImage = () => {
        setImage(image === img ? imgClicked:img)
    }

    return (
        <div className='ClickablePicture_container'>
            <img onClick={handleImage} src={image} alt={image === img ? 'maxence-glasses':'maxence'}/>
        </div>
    )
}