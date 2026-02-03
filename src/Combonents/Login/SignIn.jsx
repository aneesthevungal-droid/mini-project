import { useNavigate } from "react-router-dom";
import HomeHed from "../Home/HomeHed";
import './SignIn.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../../Store/Slice/DatasSlice";
function SignIn(){
    return(
        <>
          <HomeHed/>
          <Form/>
        </>
    )
}
function Form(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [signinerr,setSigninerr]=useState("")

    const navgate=useNavigate()
    const dispach=useDispatch()
    const users=useSelector(user=> user.datas.users)
    const usersin=[{email,password}]
    console.log(users)
    console.log(usersin)
    
   

    function onSubmit(e){
          e.preventDefault()
        //   dispach(adduser({email,password}))

          const filterduser =users.filter((usersli)=>{
            return usersin.some((us)=>{
                return us.email == usersli.email && us.password == usersli.password
            })
          })
          console.log(filterduser)
          if(filterduser.length !== 1){
            return(setSigninerr("Accound Dos Not Mach"))
          }
          navgate('/dashbord')
     
    }
    

    return(
        <div className="mai-wraper">
           <div className="form-wraper">
            <h2>Welcome Back!</h2>
            <p>Ender Your Details To Manage Savings And Track Your Expans</p>
            <form className="sign-up-form" onSubmit={(e)=>onSubmit(e)}>
                <label >Email</label>
                <input type="email" name="" id="" onChange={e=> setEmail(e.target.value)} />
                <label >PassWord</label>
                <input type="password" name="" id=""  onChange={e=> setPassword(e.target.value)}/>
                <button>Sign In</button>
                <p className="errors">{signinerr}</p>
            </form>
            <p className="sighn-up-link">Dont Have Accound ? <strong onClick={()=> navgate('/signup')}>Sign Up</strong></p>
           </div>
        </div>
    )
}
 
export default SignIn;