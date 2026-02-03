import { useNavigate } from 'react-router-dom';
import HomeHed from '../Home/HomeHed';
import './SignUp.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';

function SignUp(){
    return(
        <>
        <HomeHed/>
        <Form/>
        </>
    )
}
function Form(){
    const [email,setEmail]=useState("")
    const [password,setPasspowrd]=useState("")
    const [confermpas,setConferpas]=useState("")
    const [egriment,setEgriment]=useState(false)
    const [emailerr,setEmailErr]=useState("")
    const [paslength,setPaslength]=useState("")
    const [passerr,setPassErr]=useState("")
    const [egrierr,setEgrierr]=useState("")

    console.log( egriment)
    const navigate=useNavigate()
    const usersdata=useSelector(users=> users.datas.users)
    const emails=usersdata.map(users=> users.email)
    
    function handelChekBox(){
       setEgriment(agri=> !agri)
    }

    function onSubmit(e){
            e.preventDefault()
            const emailveri=emails.filter(em=> em === email)
            if(email === ""){
                return(setEmailErr("Emai Is Requard"))
            }else{
                setEmailErr("")
            }
            if(emailveri.length >0){
                return(setEmailErr("Email All Redy Exist"))
            }
            if(password.length < 8){
                return(setPaslength("Password Must 8 Caracters"))
            }else{
                 setPaslength("")
            }
               
            if(password !== confermpas){
                 return(setPassErr("Dos Not Mach Password"))
            }else{
                setPassErr("")
            }
            if(egriment === false)return(setEgrierr("Pease Agree Tha Conditions"))
            navigate('/signin')
            
    }
    return(
        <div className='mai-wraper'>
        <div className='form-wraper'>
            <h2>Get Started</h2>
            <p>Join Us To Start Manage Your Welth Better</p>
            <form className='sign-up-form' onSubmit={(e)=>onSubmit(e)}>
                <label >Email</label>
                <input type="email" name="" id="" onChange={(e)=> setEmail(e.target.value)} />
                <p className='errors'>{emailerr}</p>
                <label >Password</label>
                <input type="password" name="" id=""  onChange={(e)=> setPasspowrd(e.target.value)}/>
                <p className='errors'>{paslength}</p>
                <label >Conferm PassWord</label>
                <input type="password" name="" id="" onChange={e=> setConferpas(e.target.value)} />
                <p className='errors'>{passerr}</p>
                <div className='egriment'>
                    <input type="checkbox" name="" id=""   onClick={handelChekBox}/>
                    <p>I agree to tha <strong>Terms And Condition</strong>and <strong>Privecy Policy</strong></p>
                   
                </div>
                 <p className='errors'>{egrierr}</p>
                <button>Sign Up</button>
            </form>
            <p className='sighn-up-link' >Allredy have Accound? <strong onClick={()=> navigate('/signin')}>Sign In</strong></p>
        </div>
        </div>
    )
}
export default SignUp;