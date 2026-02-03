import { useState } from 'react'
import './SidebarDec.css'
import{useNavigate}from 'react-router-dom'
import { BsBank } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";

function SidebarDec(){
    const [riportMenu,setRiportMenu]=useState(false)
    const [incomSubMenu,setIncomSubMenu]=useState(false)
    const [bankingSubmenu,setBankingSubMenu]=useState(false)
    const [expansSubMenu,setExpensSubMenu]=useState(false)

   
    //navigation
    const navigat =useNavigate()


    function handelRiportMenu(){
        setRiportMenu(menu=> !menu)
    }
    function handelIncomSubMenu(){
        setIncomSubMenu(incom=> !incom)
    }
    function handelBankingSubMenu(){
        setBankingSubMenu(bank=> !bank)
    }
    function handelExpensSubMenu(){
        setExpensSubMenu(expens=> !expens)
    }

    return(
        <>
        <div className='Sid-dec-Condiner'>

           <div className='menu-items'>
            
             <p className='fust-child main-menu' onClick={()=> handelBankingSubMenu()}> <span><CiBank/></span> <span className='text'>Banking </span>     {bankingSubmenu? <span className='arrow'>⬆</span>:<span className='arrow'>⬇︎</span>} </p>
            {/* submenu */}
            {bankingSubmenu &&    <div className='sub-menu'>
                 <p className='sub-menu' onClick={()=> navigat('/cash')}>Cash</p>
                 <p className='sub-menu' onClick={()=> navigat('/bank')}>Bank</p>
            </div>}
         
          

            <p onClick={()=> navigat('/dashbord')} className='main-menu'><span><MdOutlineSpaceDashboard /></span> <span className='text'>Dashbord</span></p>

           <p className='main-menu' onClick={()=>handelIncomSubMenu()}><span><CiBadgeDollar/></span><span className='text'>Incom </span>  {incomSubMenu? <span className='arrow'>⬆</span>:<span className='arrow'>⬇︎</span>}</p>
            {/* submenu */}
            {incomSubMenu &&   <div className='sub-menu' >
                <p onClick={()=> navigat('/incom')}>Add Incom</p>
                <p onClick={()=> navigat('/incoms')}>Incoms</p>
            </div>}

            <p className='main-menu' onClick={()=> handelExpensSubMenu()}> <span><CiDollar/></span><span className='text'>Expans</span> {expansSubMenu ? <span className='arrow'>⬆</span>:<span className='arrow'>⬇︎</span>}</p>
            {/* submenu */}
            {expansSubMenu && <div className='sub-menu'>
                 <p className='sub-menu' onClick={()=> navigat('/expens')}>Add Expens</p>
                 <p className='sub-menu' onClick={()=> navigat('/expanses')}>Expanses</p>
            </div> }
            <p className='main-menu' onClick={()=> navigat('/budget')}><span><BsCart3/></span><span className='text'>Budget</span></p>

            <p onClick={()=>handelRiportMenu()} className='main-menu'> <span><BsBarChart/></span><span className='text'>Riports</span> {riportMenu ? <span className='arrow'>⬆</span>: <span className='arrow'>⬇︎</span>}</p>
            {/* submenu */}
             {riportMenu && <div className='sub-menu'>
               <p className='sub-menul' onClick={()=> navigat('/incomreport')}>Incom</p>
               <p className='sub-menul' onClick={()=> navigat('/expansreport')}>Expans</p>
               <p className='sub-menul' onClick={()=> navigat('/summery')}>Summery</p>
              
            </div>}
            
            <p className='main-menu'><span><IoSettingsOutline /></span><span className='text'>Setiings</span></p>
           </div>
           
        </div>
        </>
    )
}

export default SidebarDec