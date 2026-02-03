import { useState } from 'react';
import SideBar from '../Sidbar/SideBar';
import './Heder.css'
import SidebarDec from '../SideBarDsc/SidebarDec';

function Heder(){
    const [showSidBar,setShowSidBar]=useState(false)
    
    function HandelSideBar(){
        setShowSidBar(SideBar=> !SideBar)
    }
     
    return(
        <>
         <nav>
            <label htmlFor="" className='logo'><b><strong>BUDGETER</strong></b></label>
            <div className='nav-items'>
            {/* <span className='login'><strong><span>🔐</span >Login</strong></span>
            <span className='sighn-in'><strong><span>🔓</span>Sigh in</strong></span> */}
            <div className='profil-imeg'>👤</div>
            </div>
            <label htmlFor=""  className='m-icon' onClick={()=> HandelSideBar()}>{showSidBar ? <span>❌</span> :<span>☰</span>}</label>
         </nav>
        {showSidBar && <SideBar setShowSidBar={setShowSidBar}/>}
     
        </>
    )
}
export default Heder;