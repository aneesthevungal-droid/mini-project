import './DashBord.css'
import Heder from '../Heder/Heder';
import SidebarDec from '../SideBarDsc/SidebarDec';
import { useSelector } from 'react-redux';
import {Chart as chartjs}from "chart.js/auto"
import{Bar,Doughnut,Line}from 'react-chartjs-2'

function DashBord(){
    return(
        <>
          
         <div className='wraper-main'>
            <Heder/>
            <div className='sub-wraper'>
            <SidebarDec/>
            <DashBordCundent/>
           
            </div>
         </div>
        </>
    )
}

function DashBordCundent(){
    const incomdatas=useSelector((incom)=> incom.datas.incoms)
    const amound=incomdatas?.map((incom)=> Number(incom.amound))
    const sum =amound.reduce((pre,cre)=> pre + cre,0)
    const totelexpans=useSelector(expens=> expens.datas.expanses)
    const expensamound=totelexpans?.map(amounds=> Number(amounds.exAmound))
    const exsum=expensamound.reduce((pre,cur)=> pre+cur,0 )
    const balans= sum - exsum

    const expansPers= exsum>0?Math.round(-exsum/sum *100):0
    const balansPer= balans>0?Math.round(balans/sum *100):0
    const incomper= sum>0?Math.round(sum/sum*100):0
    
    
    return(
        <div>
            <div className='cards-dis'>
         <Cards
         title={"Totel Incom"}
         amound={sum}
         persantage={incomper}
         />
         <Cards
         title={"Totel Expans"}
         amound={exsum}
         persantage={expansPers}
         />
         <Cards
         title={"Totel Balans"}
         amound={balans}
         persantage={balansPer}
         />
         </div>
         <Charts
         sum={sum}
         exsum={exsum}
         balans={balans}
         />
        </div>
    )
}

function Cards({title,amound,persantage}){
    return(
        <div className='cards'>
            <div className='card-body'>
             <div className='card-title'>
                  <p >{title}</p>
                 
             </div>
               <h1 className='amound'>₹ {amound}</h1>
               <div className={persantage >0? 'persant ':"negativ"}>{persantage} %</div>
            </div>

        </div>
    )
}
function Charts({sum,exsum,balans}){
    const incomdatas=useSelector((incom)=> incom.datas.incoms)
    const totelexpans=useSelector(expens=> expens.datas.expanses)

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
    const budgetDatas=useSelector(budget=> budget.datas.budgets)

    const grupByBudjet=Object.groupBy(budgetDatas, budget=> budget.buCategory)
  
    const budgetSummery=Object.keys(grupByBudjet).map(budget=>{
        const totelBudjets=grupByBudjet[budget].reduce((pre,cure)=>Number(pre)+Number(cure.buAmound),0)
        return{budget,totelBudjets}
    })
   
    expansSummary.sort()
    budgetSummery.sort()

    const sums=[
        {sum:sum},
        {sum:exsum},
        {sum:balans}
    ]
    return(
        <div className='chart-wraper'>
               <div className='iner-wraper1'>
                   <div className='sub-wraper1'>
                     <div className='chart-f'>
                        <Bar
                          data={{
                            labels:incomSummery?.map(incom=> incom.incom),
                            datasets:[{
                                label:"Revanu",
                                data:incomSummery?.map(incom=> incom.totelamound)
                            }]
                          }}
                        />
                     </div>
                     <div className='chart-s'>
                       <Line
                          data={{
                            labels:expansSummary?.map(expans=> expans.expans),
                            datasets:[{
                                label:"Expanses",
                                data:expansSummary?.map(expans=> expans.totelExSum)
                            }]
                          }}
                       />
                     </div>
                     <div className='donet-chart'>
                        <Doughnut
                          data={{
                            labels:["incom","Expans","Balans"],
                            datasets:[{
                                label:["incom","Expans","Balans"],
                                data:sums?.map(sum=> sum.sum)
                            }]
                            
                          }}
                        />
                     </div>

                   </div>
                   <div className='budjet-chart'>
                    <Bar
                      data={{
                        labels:expansSummary?.map(expans=> expans.expans),
                        datasets:[{
                             label:["Actul"],
                            data:expansSummary?.map(expans=> expans.totelExSum)
                        },
                        {
                            label:"Budjet",
                            data:budgetSummery?.map(budgets=> budgets.totelBudjets)
                        }
                    ]
                           
                        
                      }}
                    
                    />
                   </div>
               </div>
              

        </div>
    )
}

export default DashBord;