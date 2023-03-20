import React,{useState} from "react";
import SingleColorPicker from "./SingleColorPicker";

export default function RGBColorPicker({rValue,gValue,bValue}){

    const initialRGB = {
        r:rValue,
        g:gValue,
        b:bValue
    }

    const [rgbvalues,setRGB] = useState(initialRGB)

    const handleonChange = (e) => {
        setRGB(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    return (
        <div className='RGBColorPicker_container'>
            <SingleColorPicker color={'r'} value={rValue} onChange={handleonChange}/>
            <SingleColorPicker color={'g'} value={gValue} onChange={handleonChange}/>
            <SingleColorPicker color={'b'} value={bValue} onChange={handleonChange}/>
            <div>
                <div style={{backgroundColor:`rgb(${rgbvalues.r},${rgbvalues.g},${rgbvalues.b})`,width:'40px',height:'40px'}}></div>
                <h1>{`rgb(${rgbvalues.r},${rgbvalues.g},${rgbvalues.b})`}</h1>
            </div>

        </div>
    )
}