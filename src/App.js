import React, {useState} from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import {data as importdata} from './data/berlin'



function App() {
  const [data, setData] = useState(importdata)

  return (
    <div className="App">
      {data.map((elem,i) => {
        const r_random = Math.floor(Math.random()*255)
        const g_random = Math.floor(Math.random()*255)
        const b_random = Math.floor(Math.random()*255)
        const rating = Math.round(Math.random()*5)
        const bankCard = ["BNP","N26","Santander","Revoult","Bank Of America","BBVA","Caixabank"]
        const colorCard = ['white','black','gray']
        const valuetoHex = (c) => ((c.toString(16).length === 1) ? `0${c.toString(16)}`: c.toString(16))
        const rgbtoHex = (r,g,b) => (valuetoHex(parseInt(r)) + valuetoHex(parseInt(g)) + valuetoHex(parseInt(b)))
        return (
        <div className="IdCard_container" key={i}>
          <IdCard person={elem}/>
          <Greetings lang={elem.country === 'Germany' ? 'de': elem.country === 'Catalonia' ? 'es' : elem.country === 'France' ? 'fr' : 'en' }>{elem.firstName}</Greetings>
          <Random min={1} max={(Math.random()*Math.random()*100)*10} />
          <BoxColor r={r_random} g={g_random} b={b_random} Hex={rgbtoHex}/>
          <CreditCard 
            type={Math.floor(Math.random()*2) === 1 ? "visa": "mastercard"}
            number={Math.round(Math.random() * (8888888888888888) + 1111111111111111)}
            expirationMonth={Math.floor(Math.random()*11)+1}
            expirationYear={Math.ceil(Math.random() * (6) + 2023)}
            bank={bankCard[Math.floor(Math.random()*(bankCard.length-1))]}
            owner={`${elem.lastName} ${elem.firstName}`} 
            bgColor={`#${rgbtoHex(r_random,g_random,b_random)}`}
            color={colorCard[Math.floor(Math.random()*3)]} 
          />
          <Rating>{rating}</Rating>
          <DriverCard name="Travis Kalanick"
            rating={rating}
            img={elem.img}
            car={{
              model: `${Math.floor(Math.random()*2) === 1 ? "Toyota Corolla Altis": "Audi A3"}`,
              licensePlate: `${Math.floor(Math.random()*2) === 1 ? "CO42DE": "BE33ER"}`
            }} />
            <LikeButton />
        </div>
      )}
     )}
    </div>
  );
}

export default App;
