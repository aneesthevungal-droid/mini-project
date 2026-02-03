import Heder from "../Heder/Heder";
import SidebarDec from "../SideBarDsc/SidebarDec";
import { useDispatch, useSelector } from "react-redux";
import './Expanses.css'
import { Link, useNavigate } from "react-router-dom";
import { deleteExpans } from "../../Store/Slice/DatasSlice";
import { FiPlus } from "react-icons/fi";

function Expanses() {
  return (
    <>
      <div className="wraper">
        <Heder />
        <div className="sub-wraper">
            <SidebarDec/>
            <ExpansCondent/>
          
        </div>
      </div>
    </>
  );
}

function ExpansCondent(){
    
   
    return(
        <>
         <ExpansShowingCombonent/>
        </>
    )
}
function ExpansShowingCombonent(){
     const expansDatas=useSelector(expans=>expans.datas.expanses)
     const dispach=useDispatch()
  
    function handelDelet(index){
    
          dispach(deleteExpans(index))

    }
    const navigate=useNavigate()
    return(
        <div className="expanses">
        <div className="page-in-nav">
          <p className="page-hed">Expanse/Expenses</p>
          <button onClick={()=>navigate('/expens')}><FiPlus/></button>
        </div>
         <table>
            <thead>
                <tr>
                    <th>Catagory</th>
                    <th>Discription</th>
                    <th>Amound</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {expansDatas.map((expans,index)=>{
                return(
                  <tr key={index}>
                    <td>{expans.exCatagory}</td>
                    <td>{expans.exDiscription}</td>
                    <td>{expans.exAmound}</td>
                    <td>{expans.exDate}</td>
                    <td>
                      <Link to={`/editexpans/${expans.id}`}><button >✏️</button></Link>
                      <button onClick={()=>handelDelet(index)}>🗑</button>
                    </td>
                    
                  </tr>
                )
              })}
            </tbody>
           
         </table>
         </div>
    )
}
export default Expanses;
