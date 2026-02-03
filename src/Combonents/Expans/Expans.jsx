import './Expans.css'
import Heder from '../Heder/Heder';
import SidebarDec from '../SideBarDsc/SidebarDec';
import { useState, } from 'react';
import{useDispatch,useSelector}from'react-redux'
import { addExpans } from '../../Store/Slice/DatasSlice';
import { Link,useNavigate} from 'react-router-dom';


function Expens(){
    return(
        
        <div className='wraper'>
            <Heder/>
            <div className='sub-wraper'></div>
            <ExpansCondent/>
         

        </div>
 
    )
}

function ExpansCondent(){
    return(
        <>
        <div className='w'>
            <SidebarDec/>
            <ExpansForms/>
            
        </div>
        </>
    )
}
function ExpansForms(){
    const [exCatagory,setExCatagory]=useState("")
    const [exDiscription,setExDiscription]=useState("")
    const [exAmound,setExAmound]=useState("")
    const [exDate,setExDate]=useState("")
    const [exPydeThrough,setExPydeThrough]=useState("")
    const [errorBorder,setErrorBorder]=useState("")

    const navigate=useNavigate()
    const dispach=useDispatch()
      const expansDatas=useSelector(expans=>expans.datas.expanses)
      console.log(expansDatas)
    const [addExpansCatagory,setAddExpansCatagory]=useState(false)

    
    function handelCatagoryAddForm(){
        setAddExpansCatagory(catagory=> !catagory)
    }

    function handelExpansFormSubmition(e){
            e.preventDefault()
            if(exCatagory === ""){
                return(setErrorBorder("redBorder"))
            }else{
                setErrorBorder("redBorder")
            }
            if(exDiscription === "") return
            if(exAmound === "") return
            if(exDate === "") return
            if(exPydeThrough === "") return

            dispach(addExpans({id:Date.now(),exCatagory,exDiscription,exAmound,exDate,exPydeThrough}))
            handelDirection()
    }
    function handelCatagoryAddFormMain(e){
            e.preventDefault()
            setAddExpansCatagory(false)
    }
    function handelDirection(){
        navigate('/expanses')
    }
    
    return(
        <>
            
        <div>
       
        <div className='forms-wraper'>
        
        {/* expans adding form */}

        <form action=""  className='add-expans-form' onSubmit={handelExpansFormSubmition}>
              <label  className='catagory-label'>Catagory <p onClick={handelCatagoryAddForm}>Add Catagory</p></label>
              <select name="" id={exCatagory?"":errorBorder}  onChange={(e)=> setExCatagory(e.target.value)}>
                <option value=""></option>
                <option value="Food">Food</option>
                <option value="Transpotaion">Transpotation</option>
                <option value="Fule">Fule</option>
                
              </select>
            <textarea name="" id={exDiscription?"":errorBorder} placeholder='Discription' onChange={(e)=> setExDiscription(e.target.value)}></textarea>
            <label >Amound</label>
            <input type="number" name="" id={exAmound?"":errorBorder}  onChange={(e)=> setExAmound(e.target.value)} />
            <label >Date</label>
            <input type="date" name="" id={exDate?"":errorBorder} onChange={(e)=> setExDate(e.target.value)} />
            <label >Dou Date</label>
            <input type="text"  disabled/>
            <label >Paid Through</label>
            <select name="" id={exPydeThrough?"":errorBorder} onChange={(e)=> setExPydeThrough(e.target.value)}>
                <option value=""></option>
                <option value="petty cash">Petty Cash</option>
                <option value="bank">Bank</option>
            </select>
           <button type='submit'>Save</button>
        </form>

        {/* Catagory Adding Form */}

         {addExpansCatagory &&  <form action="" className='add-expans-catagory' onSubmit={handelCatagoryAddFormMain}>
            <label >Catagory</label>
            <input type="text" />
            <button>Save</button>
        </form>}
        </div>
        </div>
        </>
    )
}




export default Expens;