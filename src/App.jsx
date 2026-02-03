import { useState } from 'react'
import './App.css'
import Heder from './Combonents/Heder/Heder'
import DashBord from './Combonents/DashBord/DashBord'
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Incom from './Combonents/Incom/Incom'
import Expens from './Combonents/Expans/Expans'
import EditExpans from './Combonents/Expans/EditExpans'
import Expanses from './Combonents/Expans/Expanses'
import Incoms from './Combonents/Incom/Incoms'
import EditIncoms from './Combonents/Incom/EditIncom'
import Budget from './Combonents/Budget/Budget'
import Formtow from './Combonents/Budget/Formtow'
import Cash from './Combonents/Banking/Cash'
import Bank from './Combonents/Banking/Bank'
import Home from './Combonents/Home/Home'
import SignUp from './Combonents/Login/SignUp'
import SignIn from './Combonents/Login/SignIn'
import IncomRiport from './Combonents/Riports/Incom'
import ExpansReport from './Combonents/Riports/Expans'
import Summery from './Combonents/Riports/Summery'

function App() {
 
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/dashbord' element={<DashBord/>}/>
        <Route path='/incom' element={ <Incom/>}/>
        <Route path='/expens' element={<Expens/>}/>
        <Route path='/expanses' element={<Expanses/>}/>
        <Route path='/editexpans/:id' element={<EditExpans/>}/>
        <Route path='/incoms' element={<Incoms/>}/>
        <Route path='/editincom/:id' element={<EditIncoms/>}/>
        <Route path='/budget' element={<Budget/>}/>
        <Route path='/formtow/:id' element={<Formtow/>}/>
        <Route path='/cash' element={<Cash/>}/>
        <Route path='/bank' element={<Bank/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/incomreport' element={<IncomRiport/>}/>
        <Route path='expansreport' element={<ExpansReport/>}/>
        <Route path='summery' element={<Summery/>}/>
      
      </Routes>
   </BrowserRouter>
  )
}

export default App
