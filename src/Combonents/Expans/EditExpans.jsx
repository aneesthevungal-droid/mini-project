import { useParams,useNavigate} from "react-router-dom";
import Heder from "../Heder/Heder";
import SidebarDec from "../SideBarDsc/SidebarDec";
import "./EditExpans.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editExpans } from "../../Store/Slice/DatasSlice";
function EditExpans() {
  return (
    <>
      <div className="wraper">
        <Heder />
        <div className="sub-wraper">
          <SidebarDec />
          <EditExpansForm />
        </div>
      </div>
    </>
  );
}
function EditExpansForm() {
   

  

     
  
  const params = useParams();
  console.log(params)
  const expansData=useSelector(expans=>expans.datas.expanses)
  console.log(expansData)
  const existingUser= expansData.filter((expanse)=> expanse.id == params.id)
  const{exCatagory,exDiscription,exAmound,exDate,exPydeThrough}=existingUser[0] || {}
 

  const [values,setValues]=useState({exDiscription,exAmound,exDate,exPydeThrough,exCatagory})
  console.log(values)

  const dispach = useDispatch()
  const navigate=useNavigate()

  function handelCheng(){
     dispach(editExpans(
      {id:params.id,
      exCatagory:values.exCatagory,
      exDiscription:values.exDiscription,
      exAmound:values.exAmound,
      exDate:values.exDate,
      exPydeThrough:values.exPydeThrough
    
    }
    ))
    navigate('/expanses')
  }
  return (
    <>
      <div className="edit-Form">
        <label >Catagory</label>
        <select name="" id="" value={values.exAmound} onChange={(e)=> setValues({...values, exCatagory:e.target.value})}>
          <option value="food">Food</option>
          <option value="Transpotation">Transpotation</option>
        </select>
       <textarea name="" id="" placeholder="Discription" value={values.exDiscription} onChange={(e)=> setValues({...values,exDiscription:e.target.value})}></textarea>
       <label >Amound</label>
       <input type="number" name="" id=""  value={values.exAmound} onChange={(e)=> setValues({...values,exAmound:e.target.value})}/>
       <label >Date</label>
       <input type="date" name="" id="" value={values.exDate} onChange={(e)=> setValues({...values,exDate:e.target.value})} />
       <label >Dou Date</label>
       <input type="text"  disabled/>
       <label >Paid Through</label>
       <select name="" id="" value={values.exPydeThrough} onChange={(e)=> setValues({...values,exPydeThrough:e.target.value})}>
        <option value=""></option>
        <option value="petty cash">Petty Cash</option>
        <option value="bank">Bank</option>
       </select>
        <button onClick={()=> handelCheng()}>save</button>
        
      </div>





    
    </>
  );
}

export default EditExpans;
