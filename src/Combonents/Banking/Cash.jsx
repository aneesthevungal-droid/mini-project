import './Cash.css'
import Heder from "../Heder/Heder";
import SidebarDec from '../SideBarDsc/SidebarDec';
import { useSelector } from 'react-redux';

function Cash(){
    const incomCash=useSelector(incom=> incom.datas.incoms)
    const expansesCash = useSelector(expans=> expans.datas.expanses)

    const incomPettyCash=incomCash.filter(incom=>incom.depositTo =="petty cash")
    const expansCash=expansesCash.filter(expans=> expans.exPydeThrough == "petty cash")
    console.log(expansCash)

    return(
        <>
        <div className="wraper">
            <Heder/>
            <div className="sub-wraper">
            <SidebarDec/>
            <div className='com-wraper'>
            <CashCondent/>
            </div>

            </div>
        </div>
        </>
    )
}
function CashCondent(){
    const incomCash=useSelector(incom=> incom.datas.incoms)
    const expansesCash = useSelector(expans=> expans.datas.expanses)

    const incomPettyCash=incomCash.filter(incom=>incom.depositTo =="petty cash")
    const expansCash=expansesCash.filter(expans=> expans.exPydeThrough == "petty cash")
    return(
        <>
         <p className='page-hed'>Banking/Cash</p>
         <table>
            <thead>
                <tr>
                    <th>Categery</th>
                    <th>Date</th>
                    <th>Amound</th>
                </tr>
            </thead>
            
            <tbody>
                 {incomPettyCash.map(incom=>{
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
                {expansCash.map(expans=>{
                    return(
                        <tr>
                            <td>{expans.exCatagory}</td>
                            <td>{expans.exDate}</td>
                            <td>{"-" + expans.exAmound}</td>
                        </tr>
                    )
                })}
            </tbody>
         </table>
      
        </>
    )
}



export default Cash;