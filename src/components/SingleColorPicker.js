import React from 'react'

export default function SingleColorPicker({color,value,onChange}){

    const handleChange = (e) => {
        onChange(e)
    }

    return (
        <div>
            <div style={{backgroundColor:`${color === 'r' ? `rgb(${value},0,0)`: color === 'g' ? `rgb(0,${value},0)`:`rgb(0,0,${value})`}`,width:'40px',height:'40px'}}>
            </div>
            <h1>{color.toUpperCase()}</h1>
            <input type="number" name={color} min="0" max="255" placeholder={value} onChange={handleChange}/> 
        </div>
    )
}