import { useNavigate, useParams } from 'react-router-dom';
import Heder from '../Heder/Heder';
import SidebarDec from '../SideBarDsc/SidebarDec';
import './EditIncom.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editIncom } from '../../Store/Slice/DatasSlice';

function EditIncoms(){
    return(
        <>
        <div className='wraper'>
            <Heder/>
            <div className='sub-wraper'>
                <SidebarDec/>
                <EditIncomForm/>

            </div>

        </div>
        </>
    )
}

function EditIncomForm(){
    const navigate=useNavigate()
    const paramas =useParams()
    const dispach =useDispatch()
    const incomsdatas=useSelector(incoms => incoms.datas.incoms)
    const existinIncom=incomsdatas.filter(incom=> incom.id == paramas.id)
    const {date,amound,depositTo,catagory}=existinIncom[0] || {}
    
    const [incoms,setIncoms]=useState({catagory,date,amound, depositTo,})

    function handelChinges(){
        dispach(editIncom({id:paramas.id, catagory:incoms.catagory,amound:incoms.amound,date:incoms.date,depositTo:incoms.depositTo}))
        navigate('/incoms')
    }

    return(
        <div className='edit-incom-forom'>
            <label >Catagory</label>
            <select name="" id="" value={incoms.catagory} onChange={(e)=> setIncoms({...incoms, catagory: e.target.value})}>
                <option value=""></option>
                <option value="sales">Sales</option>
                <option value="Discound">Discound</option>
                <option value="Bones">Bones</option>
                <option value="Capitel">Capitel</option>
            </select>
            <label >Amound</label>
            <input type="number" name="" id="" value={incoms.amound}  onChange={(e)=> setIncoms({...incoms, amound:e.target.value})}/>
            <label htmlFor="">Date</label>
            <input type="date" name="" id=""  value={incoms.date} onChange={(e)=> setIncoms({...incoms,date:e.target.value})}/>
            <label >Deposit To</label>
            <select name="" id="" value={incoms.depositTo} onChange={(e)=> setIncoms({...incoms, depositTo:e.target.value})}>
                 <option value=""></option>
                <option value="petty cash">Petty Cash</option>
                <option value="bank">Bank</option>
            </select>
            <button onClick={()=> handelChinges()}>Save</button>

        </div>
    )
}

export default EditIncoms;