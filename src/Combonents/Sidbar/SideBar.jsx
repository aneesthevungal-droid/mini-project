import { useState } from 'react';
import './SideBar.css'
import { useNavigate } from 'react-router-dom';

function SideBar({setShowSidBar}){
    const [banking,setBanking]=useState(false)
    const [incom,setIncom]=useState(false)
    const [expens,setExpens]=useState(false)
    const [reports,setReports]=useState(false)
    
    const navigate=useNavigate()
    // handelTogel
    function handelBanking(){
        setBanking(pre=> !pre)
    }
    function handelIncom(){
        setIncom(pre=> !pre)
    }
    function handelExpens(){
        setExpens(pre=> !pre)
    }
    function handelReports(){
        setReports(pre=> !pre)
    }

    // handel navigation 

    function handelCash(){
        setShowSidBar(false)
        navigate('/cash')
    }
    function handelBank(){
        setShowSidBar(false)
        navigate('/bank')
    }
    function handelDashbord(){
        setShowSidBar(false)
        navigate('/dashbord')
    }
    function handelAddincom(){
        setShowSidBar(false)
        navigate('/incom')
    }
    function handelIncoms(){
        setShowSidBar(false)
        navigate('/incoms')
    }
    function handelAddExpens(){
        setShowSidBar(false)
        navigate('/expens')
    }
    function handelExpanses(){
        setShowSidBar(false)
        navigate('/expanses')
    }
    function handelBudget(){
        setShowSidBar(false)
        navigate('/budget')
    }
    function handelReportIncom(){
        setShowSidBar(false)
        navigate('/incomreport')
    }
    function handelriportExpans(){
        setShowSidBar(false)
        navigate('/expansreport')
    }
    function handelReportSummery(){
        setShowSidBar(false)
        navigate('/summery')
    }
    return(
        <>
        <div className='Condiner'>
        <div>
            <p className='main' onClick={()=>handelBanking()}>Banking</p>
            {banking &&  <div>
                <p className='sub-m' onClick={()=> handelCash()} >Cash</p>
                <p className='sub-m'onClick={()=> handelBank()} >Bank</p>
            </div>}
            <p className='main'onClick={()=> handelDashbord()} >DashBord</p>
            <p className='main' onClick={()=>handelIncom()}>Incom</p>
            {incom  &&   <div>
                <p className='sub-m'onClick={()=> handelAddincom()} >Add Incom</p>
                <p className='sub-m' onClick={()=> handelIncoms()}>Incoms</p>
            </div>}
            <p className='main' onClick={()=> handelExpens()}>Expans</p>
            {expens &&    <div>
                <p className='sub-m' onClick={()=> handelAddExpens()}>Add Expens</p>
                <p className='sub-m' onClick={()=> handelExpanses()}>Expenses</p>
            </div>}
            <p className='main'onClick={()=> handelBudget()} >Budget</p>
            <p className='main' onClick={()=>handelReports()}>Reports</p>
            {reports &&    <div>
                <p className='sub-m' onClick={()=> handelReportIncom()}>Incom</p>
                <p className='sub-m' onClick={()=> handelriportExpans()}>Expans</p>
                <p className='sub-m' onClick={()=> handelReportSummery()}>Summery</p>
            </div>}
            <p className='main'>Setings</p>
        </div>
        </div>
        </>
    )
}
export default SideBar;