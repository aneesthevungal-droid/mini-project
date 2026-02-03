import { useState } from 'react';
import Heder from '../Heder/Heder';
import SidebarDec from '../SideBarDsc/SidebarDec';
import './Budget.css'
import { addBudget,editBudget,addBudjetFid} from '../../Store/Slice/DatasSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Formtow from './Formtow';

function Budget(){
    return(
      <>
       <div className='wraper'>
         <Heder/>
          <div className='sub-wraper'>
            <SidebarDec/>
            <BudjetForm/>
          </div>

       </div>
      </>
    )
}
function BudjetForm(){
  const [buCategory,setBuCategory]=useState("")
  const [buAmound,setBuAmound]=useState("")
  const [handelEdit,setHandelEdit]=useState(false)
  const [edit,setEdit]=useState(true)
  const [errorborder,setErrorBorder]=useState("")
 

  const navigate=useNavigate()
  const bufilid=useSelector(budjetfid=> budjetfid.datas.budjetFid)
  const dispach=useDispatch()
  const budgetDatas=useSelector(budget=> budget.datas.budgets)
  console.log(bufilid)
 


 

  console.log(budgetDatas)

  function handelSubmit(){
    if(buCategory === ""){
      return(setErrorBorder("redBorder"))
    }else{
      setErrorBorder("")
    }

    if(buAmound === ""){
        return(setErrorBorder("redBorder"))
    }else{
      setErrorBorder("")
    }

     dispach(addBudget({id:Date.now(),buCategory,buAmound}))
     setBuCategory("")
     setBuAmound("")
  }
  
    
   
   function handelEditbud(id){
           const budejetFil =budgetDatas.find(budget=> budget.id == id)
           setBuCategory(budejetFil.buCategory)
           setBuAmound(budejetFil.buAmound)
           handelAddbuFid(id)
           setEdit(false)
         
           
          
   }
 
   function handelEditBudget(){

     dispach(editBudget({ id:bufilid,buCategory,buAmound}))
     setBuAmound("")
     setBuCategory("")
     setEdit(true)
     
     
   }
   
   function handelAddbuFid(id){
       dispach(addBudjetFid(id))
   }
 
 
  return(
    <>
    <div>

    
    <div  className='budget-form'>
      <label >Category</label>
      <select id={buCategory?"":errorborder} value={buCategory} onChange={(e)=> setBuCategory(e.target.value)}>
                <option value="" ></option>
                <option value="Food">Food</option>
                <option value="Transpotaion">Transpotation</option>
                <option value="Fule">Fule</option>
                
      </select>
      <label > SetBudget</label>
      <input type="number" name="" id={buAmound?"":errorborder} value={buAmound} onChange={(e)=> setBuAmound(e.target.value)} />
      <button type='submit' onClick={()=> edit === true?  handelSubmit():handelEditBudget()}>{edit?"Save":"Edit"}</button>
    </div>
   
    
    

    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Amond</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {budgetDatas.map((buget,index)=>{
          return(
            <tr key={index}>
              <td>{buget.buCategory}</td>
              <td>{buget.buAmound}</td>
              <td>
                <button onClick={()=> handelEditbud(buget.id)} >✏️</button>
                <button>🗑</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
    </>
  )
}


export default Budget;