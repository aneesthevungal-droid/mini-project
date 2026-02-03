import { useState } from "react";
import Heder from "../Heder/Heder";
import SidebarDec from "../SideBarDsc/SidebarDec";
import {useSelector}from 'react-redux'
import './Riports.css'

function ExpansReport(){
    return(
        <>
        <div className="wraper">
           <Heder/>
           <div className="sub-wraper">
           <SidebarDec/>
           <RiportCondentEx/>
           </div>
        </div>
        </>
    )
}
function RiportCondentEx(){
    const [serchEx,setSerchEx]=useState("")
    const totelexpans=useSelector(expens=> expens.datas.expanses)

    const FilterdExpanses=totelexpans.filter(expenses=>{
       if(serchEx === "")return(expenses)
        return( expenses.exCatagory === serchEx)
    })
    return(
        <div className="wraper">
        <div className="serch">
            <input type="text" placeholder="Serch Her..." onChange={(e)=> setSerchEx(e.target.value)} />
        </div>
        <table>
            <tbody>
                {FilterdExpanses.map((expa,index)=>{
                    return(
                        <tr key={index}>
                            <td>{expa.exCatagory}</td>
                            <td>{expa.exDate}</td>
                            <td>{expa.exAmound}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default ExpansReport;