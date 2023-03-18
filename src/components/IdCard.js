import React from "react";

const IdCard = ({person:{lastName,firstName,country,img,isStudent}}) => {
    // {"firstName": "Aaron", 
    // "lastName": "Newell", 
    // "country": "England", 
    // "img": "https://i.imgur.com/CFgX3Xx.png", 
    // "isStudent": false}

    return (
        <>
            <div>
                <img src={img} style={{width:"100%"}} alt={firstName}/>
            </div>
            <div>
                <h2>First name: {firstName}</h2>
                <h2>Last name: {lastName}</h2>
                <h2>Country: {country}</h2>
                <h2>Type: {isStudent ? 'Student': 'Teacher'}</h2>
            </div>
        </>
    )
}

export default IdCard