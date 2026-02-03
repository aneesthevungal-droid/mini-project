import { useState } from "react";
import Heder from "../Heder/Heder";
import SidebarDec from "../SideBarDsc/SidebarDec";
import {useSelector}from 'react-redux'
import './Riports.css'
function IncomRiport(){
    return(
          <>
           <div className="wraper">
                <Heder/>
                <div className="sub-wraper">
                <SidebarDec/>
                <ReportCondent/>
                </div>
           </div>
          </>
    )
}
function ReportCondent(){
    const [serchData,setSerchDat]=useState("")
    const incomdatas=useSelector((incom)=> incom.datas.incoms)
   
   const filterdArray=incomdatas.filter(incom=>{
        if(serchData === "")return incom
        return  incom.catagory === serchData
   })

console.log(filterdArray)
    return(
      <div className="wraper">
      <div  className="serch">
        <input type="text"  placeholder="Serch Her..." onChange={(e)=> setSerchDat(e.target.value)}/>
      </div>
      <table>
        <tbody>
            {filterdArray.map((incom,index)=>{
                return(
                    <tr key={index}>
                        <td>{incom.catagory}</td>
                        <td>{incom.date}</td>
                        <td>{incom.amound}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      </div>
    )
}

export default IncomRiport;