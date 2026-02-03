import { useSelector } from "react-redux";
import Heder from "../Heder/Heder";
import SidebarDec from "../SideBarDsc/SidebarDec";
import './Bank.css'
function Bank(){
    return(
        <>
        <div className="wraper">
            <Heder/>
            <div className="sub-wraper">
                <SidebarDec/>
                <BankCondent/>

            </div>

        </div>
        </>
    )
}
function BankCondent(){
    const incomBank=useSelector(incom=> incom.datas.incoms)
    const expansBank=useSelector(expans=> expans.datas.expanses)

    const incomBankData=incomBank.filter(incom=> incom.depositTo === "bank")
    const expansBankData=expansBank.filter(expans=> expans.exPydeThrough === "bank")
    
    return(
       <div className="bank-wraper">
       <p className="page-hed">Banking/Bank</p>

       <table>
             <thead>
                <tr>
                    <th>Catagory</th>
                    <th>Date</th>
                    <th>Amound</th>
                </tr>
             </thead>
             <tbody>
                {incomBankData.map(incom=>{
                    return(
                        <tr>
                            <td>{incom.catagory}</td>
                            <td>{incom.date}</td>
                            <td>{"+"+incom.amound}</td>
                        </tr>
                    )
                })}
             </tbody>
       </table>
       <table>
        <tbody>
            {expansBankData.map(expans=>{
                return(
                    <tr>
                        <td>{expans.exCatagory}</td>
                        <td>{expans.exDate}</td>
                        <td>{"-"+expans.exAmound}</td>
                    </tr>
                )
            })}
        </tbody>
       </table>

       </div>
    )
}
export default Bank;