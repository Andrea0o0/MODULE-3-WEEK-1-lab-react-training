import React, {useState} from "react";

export default function NumbersTable({limit}){
    let numberarray = []
    for (let i = 0; i<=limit;i++){
        numberarray.push(i)
    }
    console.log(numberarray)

    return (
        <div className='NumberTable_container'>
            {numberarray.map((elem,i) => <h1 key={i} style={{backgroundColor:elem%2 === 0 ? 'red':'white'}}>{elem}</h1>)}
        </div>
    )
}