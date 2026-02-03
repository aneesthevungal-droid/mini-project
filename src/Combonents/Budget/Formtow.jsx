import { useParams } from "react-router-dom";

function Formtow(){

 const params = useParams()
 console.log(params.id)

  return(
        <div  className='budget-form'>
      <label >Category</label>
      <select>
        <option value=""></option>
                <option value="Food">Food</option>
                <option value="Transpotaion">Transpotation</option>
                <option value="Fule">Fule</option>
                
      </select>
      <label > SetBudjet</label>
      <input type="number" name="" id="" />
      <button >Save</button>
    </div>
  )
}

export default Formtow;