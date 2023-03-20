import React, {useState, useEffect} from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice'
import Carousel from './components/Carousel';
import NumbersTable from './components/NumberTable';
import SignupPage from './components/SignupPage';
import {data as profiles} from './data/berlin'



function App() {
  const [selected,setSelected] = useState([])
  const [data, setData] = useState(profiles)

  const handleSelected = (e) => {
    let newselected = [...selected]
    newselected.indexOf(e.target.name) < 0 ? newselected.push(e.target.name): newselected.splice(newselected.indexOf(e.target.name),1)
    setSelected(newselected)
  }
  console.log(selected)

  // const handleCountry = () => {
  //   setData([...data].filter(elem => elem.country === ))
  // }
// style={{backgroundColor:`${selected.indexOf(elem.country) < 0 ? 'white':'#A3D2E2' }`}} 
  return (
    <div className="App">
    <SignupPage/>
    <div className='NavbarCountry_container'>
      {[...data].filter((elem,i) => [...data].map(elem=>elem.country).indexOf(elem.country)===i).map((elem,i) => 
          <button  
          style={{backgroundColor:`${selected.indexOf(elem.country) >= 0 ? '#A3D2E2':'rgb(240, 240, 240)'}`}} 
          name={elem.country} 
          onClick={handleSelected} 
          key={i}
          >{elem.country}</button>)}
    </div>
    <ClickablePicture img={require('./assets/images/maxence.png')} imgClicked={require('./assets/images/maxence-glasses.png')}/>
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
        <div className="IdCard_container" style={{backgroundColor:`${selected.indexOf(elem.country) >= 0 ? '#A3D2E2':'rgb(240, 240, 240)'}`}}  key={i}>
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
            <Dice/>
            <Carousel
              images={[
                'https://randomuser.me/api/portraits/women/1.jpg',
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/men/2.jpg'
              ]}
            />
            <NumbersTable limit={Math.round(Math.random() * (20) + 7)} />
        </div>
      )}
     )}
    </div>
  );
}

export default App;
