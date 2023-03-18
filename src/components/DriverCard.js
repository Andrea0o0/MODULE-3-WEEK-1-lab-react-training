import React from "react";
import full from '../assets/images/full.png'
import empty from '../assets/images/empty.png'

const DriverCard = ({name,rating,img,car:{model,licensePlate}}) => {

    return (
        <div className='DriverCard_container' style={{backgroundColor:'#455EB5'}}>
            <div>
            <img src={img} alt={name}/>
            </div>
            <div>
                <h2>{name}</h2>
                <img src={rating>=1 ? full: empty} alt={'STAR_1'}/>
                <img src={rating>=2 ? full: empty} alt={'STAR_2'}/>
                <img src={rating>=3 ? full: empty} alt={'STAR_3'}/>
                <img src={rating>=4 ? full: empty} alt={'STAR_4'}/>
                <img src={rating>=5 ? full: empty} alt={'STAR_5'}/>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard