import React from "react";

const Greetings = ({lang,children: name}) => {
    switch(lang) {
        case 'de':
            lang = 'Hallo'
            break
        case 'en':
            lang = 'Hello'
            break
        case 'es':
            lang = 'Hola'
            break
        case 'fr':
            lang = 'Salut'
            break
        default:
            break
        // "de", "en", "es" or "fr"
    }

    return (
        <div className='Greeting_container'>
            <p>{lang} {name}</p>
        </div>
    )
}

export default Greetings