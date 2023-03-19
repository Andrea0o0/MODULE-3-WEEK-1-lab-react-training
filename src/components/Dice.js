import React, {useState,useEffect} from "react";
import dice_empty from '../assets/images/dice-empty.png'
import dice_1 from '../assets/images/dice1.png'
import dice_2 from '../assets/images/dice2.png'
import dice_3 from '../assets/images/dice3.png'
import dice_4 from '../assets/images/dice4.png'
import dice_5 from '../assets/images/dice5.png'
import dice_6 from '../assets/images/dice6.png'

export default function ClickablePicture(){
    const dices = [dice_1,dice_2,dice_3,dice_4,dice_5,dice_6]
    const [dice,setDice] = useState(dices[Math.floor(Math.random()*(dices.length))])

    const handleDice = () => {
        setDice(dice_empty)
        setTimeout(() => {
            let newdices = [...dices]
            newdices.splice((dices.indexOf(dice)),1)
            setDice(newdices[Math.floor(Math.random()*(newdices.length))])
          }, "1000")
    }

    return (
        <div className='Dice_container'>
            <img style={{width:'20%'}} onClick={handleDice} src={dice} alt={'t'}/>
        </div>
    )
}