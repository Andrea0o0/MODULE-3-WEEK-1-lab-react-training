import React,{useState} from "react"
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
        password:'',
        nationality:''
    }

    const [eye,setEye] = useState(hide)
    const [newsignup,setSignup] = useState(initialState)
    const [login,setLogin] = useState(initialState)
    const [submit,setSubmit] = useState('')
    const [error,setError] = useState(initialErrorState)

    const handleEmailError = (e) => {
        const emailRegex = /([a-z]|[A-Z]|[0-9]|[_-])@gmail.com/
        const email_ValidationError = emailRegex.test(e.target.value)
        setError(prev => {
            return { ...prev, email:email_ValidationError === true ? false:true}})
    }

    const handlePasswordError = (e) => {
        const passwordRegex = /^[a-zA-Z0-9!@#\\&*)(+=._-]{6,}$/g
        const password_weakError = passwordRegex.test(e.target.value)
        setError(prev => {
            return { ...prev, password:password_weakError === true ? false:true}})
    }

    const handleChange = (e) => {
        e.target.name !== 'nationality' && newsignup.nationality==='' && setError(prev => { return {...prev,nationality:true } })
        setSignup(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
        e.target.name === 'email' ? handleEmailError(e):e.target.name === 'password' ? handlePasswordError(e): e.target.name === 'nationality' && setError(prev => {
            return { ...prev,[e.target.name]:false}})
    }

    const handleNoErrorSubmit = (e) => {
        e.preventDefault()
        Object.values(error).filter(elem => elem===false).length===Object.keys(error).length ? handleSubmit(e):setSubmit(false)
    }

    const handleEye_Password = () => {
        setEye(prev => prev === hide ? show:hide)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setLogin(newsignup)
        setSignup(initialState)
        setError(initialErrorState)
        setEye(hide)
        setSubmit(true)
    }
    

    return (
        <div className="SignupPage_container">
            <form onSubmit={handleNoErrorSubmit}>
                <label>Email</label>
                <input className={`email_input ${error.email === false ? 'check':error.email === true && newsignup.email.length > 0 ? 'cross':''}`} type='text' name='email' value={newsignup.email} onChange={handleChange}></input>
                {error.email === false ? <p style={{color:'green'}}>You typed a valid email</p>: error.email === true && <p style={{color:'red'}}>You typed an invalid email</p>}
                <label>Password</label>
                <input className={`password_input ${error.password === false ? 'check':error.password === true && newsignup.password.length > 0 ? 'cross':''}`} type={eye===show ? 'text':'password'} name='password' value={newsignup.password} onChange={handleChange}></input>
                <img className="eye_password" src={eye} onClick={handleEye_Password} alt={eye}/>
                {error.password === false ? <p style={{color:'green'}}>You typed a valid password</p>: error.password === true && <p style={{color:'red'}}>Your password is too weak & it must be at least 6 characters long</p>}
                <label>Nationality</label>
                <select className={error.nationality === true && newsignup.nationality.length > 0 ? 'cross':''} type={eye===show ? 'text':'password'} name="nationality" value={newsignup.nationality} onChange={handleChange}>
                    <option disabled={true} value=""></option>
                    <option value="German">German</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                </select>
                {submit===false && error.nationality === true && <p style={{color:'red'}}>Select a nationality</p>}
                <button type='submit' className="btn">Signup</button>{submit===false && (<p style={{color:'red'}}>You can't signup, please enter a valid information</p>)}
            </form>
            {submit === true && (
                <div>
                    <p>{login.nationality === 'German' ? 'Hallo':
                        login.nationality === 'English' ? 'Hello':
                        login.nationality === 'Spanish' ? 'Hola': 
                        login.nationality === 'French' ? 'Salut':''}</p>
                    <p>Your email address is: {login.email}</p>
                    <p>Your email address is correct</p>
                </div>          
            )}
              
        </div>
    )
}

