import React from "react";

const BoxColor = ({r,g,b,Hex}) => {

    // const valuetoHex = (c) => ((c.toString(16).length === 1) ? `0${c.toString(16)}`: c.toString(16))

    // const rgbtoHex = (r,g,b) => (valuetoHex(parseInt(r)) + valuetoHex(parseInt(g)) + valuetoHex(parseInt(b)))

    let color = Hex(`${r}`,`${g}`,`${b}`)

    return (
        <div className='BoxColor_container' style={{backgroundColor: `rgb(${r},${g},${b})`}}>
            <p>rgb({r},{g},{b})</p>
            <p>#{color}</p>
        </div>
    )
}

export default BoxColor