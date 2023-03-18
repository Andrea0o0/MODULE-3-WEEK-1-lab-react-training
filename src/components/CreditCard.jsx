import React from "react";

export default function BoxColor({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
const visa = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
const mastercard = "https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png"

const targetNumber = number.toString().slice(12)

    return (
        <div className='CreditCard_container' style={{backgroundColor:bgColor,color:color}}>
            <div>
               <img src={type === 'visa' ? visa : mastercard} alt={type}/> 
            </div>
            <div>
                <p>{`•••• •••• •••• ${targetNumber}`}</p>
            </div>
            <div>
                <p>Expires {expirationMonth.toString().length === 1 ? `0${expirationMonth}`: expirationMonth }/{expirationYear.toString().slice(2)}</p>
                <p>{bank}</p>
            </div>
            <div>
                <p>{owner}</p>
            </div>                       
        </div>
    )
}
