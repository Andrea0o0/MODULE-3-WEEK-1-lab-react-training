import React,{useState} from "react"
import check from '../assets/images/check.png'
import cross from '../assets/images/cross.png'
import hide from '../assets/images/hide.png'
import show from '../assets/images/show.png'

export default function SignupPage(){

    const initialState = {
        email:'',
        password:'',
        nationality:''
    }

    const initialErrorState = {
        email:'',
        password:''
    }

    const [eye,setEye] = useState(show)
    const [newsignup,setSignup] = useState(initialState)
    const [submit,setSubmit] = useState(true)
    const [error,setError] = useState(initialErrorState)

    const handleEmailError = (e) => {
        const emailRegex = /([a-z]|[A-Z]|[0-9]|[_-])@gmail.com/
        const email_ValidationError = emailRegex.test(e.target.value)
        console.log(email_ValidationError,e.target.value)
        setError(prev => {
            return { ...prev, email:email_ValidationError}})
    }

    const handlePasswordError = (e) => {
        const passwordRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g
        const password_weakError = passwordRegex.test(e.target.value)
        console.log(password_weakError,e.target.value)
        setError(prev => {
            return { ...prev, password:password_weakError}})
    }

    const handleChange = (e) => {
        setSignup(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
        e.target.name === 'email' ? handleEmailError(e):handlePasswordError(e)
    }

    const handleNoErrorSubmit = (e) => {
        e.preventDefault()
        Object.values(error).filter(elem => elem===true).length===Object.keys(error).length ? handleSubmit():setSubmit(false)
    }

    const handleEye_Password = () => {
        setEye(prev => prev === hide ? show:hide)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSignup(initialState)
        setSubmit(true)
    }
    

    return (
        <div className="SignupPage_container">
            <form onSubmit={handleNoErrorSubmit}>
                <label>Email</label>
                <input className={`email_input ${error.email === true ? 'check':error.email === false ? 'cross':''}`} type='text' name='email' value={newsignup.email} onChange={handleChange}></input>
                {error.email === true ? <p style={{color:'green'}}>You typed a valid email</p>: error.email === false && <p style={{color:'red'}}>You typed an invalid email</p>}
                <label>Password</label>
                <input className={`password_input ${error.password === true ? 'check':error.password === false ? 'cross':''}`} type={eye===hide ? 'text':'password'} name='password' value={newsignup.password} onChange={handleChange}></input>
                <img className="eye_password" src={eye} onClick={handleEye_Password} alt={eye}/>
                {error.password === true ? <p style={{color:'green'}}>You typed a valid password</p>: error.password === false && <p style={{color:'red'}}>Your password is too weak & it must be at least 6 characters long</p>}
                <label>Nationality</label>
                <select name="type" value={newsignup.nationality} onChange={handleChange}>
                    <option value="German">German</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                </select>
                <button type='submit' className="btn">Signup</button>{submit===false && (<p style={{color:'red'}}>You can't signup, please enter a valid information</p>)}
            </form>
            <div>
                <p>{    newsignup.nationality === 'German' ? 'Hallo':
                    newsignup.nationality === 'English' ? 'Hello':
                    newsignup.nationality === 'Spanish' ? 'Hola': 
                    newsignup.nationality === 'French' ? 'Salut':''}</p>
                <p>Your email address is: {newsignup.email}</p>
                <p>{error.email === false ? 'Your email address is correct':'Your email address is not correct'}</p>
            </div>        
        </div>
    )
}

