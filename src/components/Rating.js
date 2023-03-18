import React from "react";
import black from '../assets/images/black.png'
import white from '../assets/images/white.png'

const Rating = ({children:stars}) => {
    return (
        <div className='Rating_container'>
            <img src={stars>=1 ? black: white} alt={'STAR_1'}/>
            <img src={stars>=2 ? black: white} alt={'STAR_2'}/>
            <img src={stars>=3 ? black: white} alt={'STAR_3'}/>
            <img src={stars>=4 ? black: white} alt={'STAR_4'}/>
            <img src={stars>=5 ? black: white} alt={'STAR_5'}/>
        </div>
    )
}

export default Rating