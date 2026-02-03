import Heder from "../Heder/Heder";
import SidebarDec from "../SideBarDsc/SidebarDec";
import {useSelector}from 'react-redux'

function Summery(){
    return(
        <>
        <div className="wraper">
            <Heder/>
            <div className="sub-wraper">
            <SidebarDec/>
            <RiportsSummery/>

            </div>
        </div>
        </>
    )
}
function RiportsSummery(){
    // datas
     const incomdatas=useSelector((incom)=> incom.datas.incoms)
     const totelexpans=useSelector(expens=> expens.datas.expanses)
     const budgetDatas=useSelector(budget=> budget.datas.budgets)
    
     //summarising
    const groupbyincom=Object.groupBy(incomdatas, incom=> incom.catagory )
    const incomSummery=Object.keys(groupbyincom).map(incom=> {
        const totelamound=groupbyincom[incom].reduce((pre,cure)=> Number(pre )+ Number(cure.amound),0)
        return{incom,totelamound}
    })
    const groupbyExpens=Object.groupBy(totelexpans, expan=> expan.exCatagory)
     const expansSummary=Object.keys(groupbyExpens).map(expans=>{
       const  totelExSum=groupbyExpens[expans].reduce((pre,ex)=> Number(pre)+ Number(ex.exAmound),0)
        return{expans,totelExSum}
    })
    const grupByBudjet=Object.groupBy(budgetDatas, budget=> budget.buCategory)
     const budgetSummery=Object.keys(grupByBudjet).map(budget=>{
        const totelBudjets=grupByBudjet[budget].reduce((pre,cure)=>Number(pre)+Number(cure.buAmound),0)
        return{budget,totelBudjets}
    })

  


    
    return(
        <div className="wraper">
            <div>
             <h4 className="sum-hed">Incom Summery</h4>
             <table>
                <tbody>
                    {incomSummery.map(inc=>{
                        return(
                            <tr>
                               <td>{inc.incom}</td>
                               <td>{inc.totelamound}</td> 
                            </tr>
                        )
                    })}
                </tbody>
             </table>
             <h4 className="sum-hed">Expans Summery</h4>
             <table>
                <tbody>
                    {expansSummary.map(exp=>{
                        return(
                            <tr>
                                <td>{exp.expans}</td>
                                <td>{exp.totelExSum}</td>
                            </tr>
                        )
                    })}
                </tbody>
             </table>
             <h4 className="sum-hed">Budget Summery</h4>
             <table>
                <tbody>
                    {budgetSummery.map(bud=>{
                        return(
                            <tr>
                                <td>{bud.budget}</td>
                                <td>{bud.totelBudjets}</td>
                            </tr>
                        )
                    })}
                </tbody>
             </table>
           
            </div>
          
        </div>
    )
}

export default Summery;