import { useDispatch, useSelector } from 'react-redux';
import Heder from '../Heder/Heder';
import SidebarDec from '../SideBarDsc/SidebarDec';
import './Incoms.css'
import { useNavigate,Link } from 'react-router-dom';
import { deletIncom } from '../../Store/Slice/DatasSlice';
import { FiPlus } from "react-icons/fi";

function Incoms(){
    return(
        <>
        <div className='wraper'>
            <Heder/>
            <div className='sub-wraper'>
                <SidebarDec/>
                <IncomsCondent/>
            </div>

        </div>
        
        </>
    )
}
function IncomsCondent(){
    const incomsData =useSelector(incom=> incom.datas.incoms)
    const navigate=useNavigate()
    const dispach=useDispatch()
    
    const handelDelet=(index)=>{
         dispach(deletIncom(index))
    }
    return(
        <div className='incoms'>
         <div className="page-in-nav">
          <p className="page-hed">Expanse/Expenses</p>
          <button onClick={()=>navigate('/incom')}><FiPlus/></button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Catagory</th>
                    <th>Amound</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {incomsData.map((incom,index)=>{
                    return(
                        <tr key={index}>
                            <td>{incom.catagory}</td>
                            <td>{incom.amound}</td>
                            <td>{incom.date}</td>
                            <td>
                                <button onClick={()=> navigate(`/editincom/${incom.id}`)}>✏️</button>
                                <button onClick={()=> handelDelet(index)}>🗑</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}
export default Incoms;