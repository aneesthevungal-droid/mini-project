import { useState } from 'react';
import Heder from '../Heder/Heder';
import SidebarDec from '../SideBarDsc/SidebarDec';
import './Incom.css'
import{useDispatch,useSelector}from 'react-redux'
import { addIncoms } from '../../Store/Slice/DatasSlice';
import { useNavigate } from 'react-router-dom';


   

function Incom(){
 
  
    


    return(
       
           <div className='wraper'>
                <Heder/>
              <div className='sub-wraper'>
                <SidebarDec/>
                <IncomCondent/>
              </div>
           </div>

        
    )
}

function IncomCondent(){
    return(
        <>
        <AddForms/>
     
        </>
    )
}
function AddForms(){
    const incomData=useSelector((incom)=> incom.datas.incoms)

    console.log(incomData)
    const [addCatagoryIncom,setAddCatagoryIncom]=useState(false)
    const [catagory,setCatagory]=useState("")
    const [amound,setAmoud]=useState("")
    const [date,setDate]=useState("")
    const [depositTo,setDepositTo]=useState("")
    const [erroborder,setErroBorder]=useState("")
    
 
    // const [incomdetils,setIncomDetils]=useState({
    //     id:Date.now(),
    //     catogory:"",
    //     amound:"",
    //     date:"",
    //     depositto:"",


    // })
    
    const dispach = useDispatch()
    const navigate=useNavigate()

    function handelAddCatagoryIncom(){
        setAddCatagoryIncom(catogory=> !catogory)
    }
    // function handelonching(e){
    //    const {name,value}= e.target
    //    setIncomDetils((prev)=>{
    //     return {...prev,[name]:value}
    //    })
    // }
  

    function handelIncomFormSubmition(e){
        e.preventDefault()
        if(catagory === ""){
            return(setErroBorder("redBorder"))
        }else{
            setErroBorder("redBorder")
        }
        if(amound === "")return
        if(date === "")return
        if(depositTo ==="") return

        dispach(addIncoms({id:Date.now(),catagory,amound,date,depositTo}))
        navigate('/incoms')
    }
    function handelAddCatagoryForm(e){
         e.preventDefault()
         setAddCatagoryIncom(false)
    }

    return(
        <>
        <div className='forms-wraper'>

        <form action="" className='add-incom-form' onSubmit={handelIncomFormSubmition}>
           
            <label className='catagory-add'>Catagory   <p className='add-catagory-btn' onClick={()=>handelAddCatagoryIncom()}>Add Catagory</p></label>
        
            <select name="catogory" id={catagory?"":erroborder} onChange={(e)=> setCatagory(e.target.value)}>
                <option value=""></option>
                <option value="sales">Sales</option>
                <option value="Discound">Discound</option>
                <option value="Bones">Bones</option>
                <option value="Capitel">Capitel</option>
            </select>
             <label >Amound</label>
             <input type="number" name="amound" id={amound?"":erroborder} onChange={(e)=> setAmoud(e.target.value)} />
            <label htmlFor="">Date</label>
            <input type="date" name="date" id={date?"":erroborder} onChange={(e)=> setDate(e.target.value)} />
         
            <label >Deposit To</label>
            <select name="depositto" id={depositTo?"":erroborder} onChange={(e)=> setDepositTo(e.target.value)}>
                <option value=""></option>
                <option value="petty cash">Petty Cash</option>
                <option value="bank">Bank</option>
            </select>
            <button >Save</button>
        </form>

        {addCatagoryIncom &&    <form action="" className='add-catogory-incom-form' onSubmit={handelAddCatagoryForm}>
             <label >Catagory</label>
             <input type="text" />
             <button>Save</button>
        </form>}
        </div>

        {incomData.map((data,index)=>{
            console.log(data)
            return (
              
                 <p key={index}>{data.catogory}</p>
           
            )
        })}
        </>
    )
}

export default Incom;