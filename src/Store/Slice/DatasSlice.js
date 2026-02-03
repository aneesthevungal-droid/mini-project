import{createSlice}from '@reduxjs/toolkit'

const dataSliser=createSlice({
    name:"datas",
    initialState:{
        incoms:[],
        expanses:[],
        budgets:[],
        budjetFid:"",
        users:[
            {email:"anees@gmail.com",password:"12345678"},
        ],
        user:[]
    },
    reducers:{
        addIncoms:(state,action)=>{
            console.log(action)
             const incom=action.payload
                
             state.incoms.push(incom)
        },
        addExpans:(state,action)=>{
             const expance=action.payload
             state.expanses.push(expance)
        },
        editExpans:(state,action)=>{
            const{id,exCatagory,exDiscription,exAmound,exDate,exPydeThrough}=action.payload
            const existingUser= state.expanses.find((user)=> user.id == id)
            if(existingUser){
                existingUser.exCatagory = exCatagory,
                existingUser.exDiscription =exDiscription,
                existingUser.exAmound = exAmound,
                existingUser.exDate = exDate,
                existingUser.exPydeThrough = exPydeThrough
            }

        },
        editIncom:(state,action)=>{
             const {id,catagory,amound,date,depositTo}=action.payload
             const existingIncom= state.incoms.find(incom=> incom.id ==id)
             if(existingIncom){
                existingIncom.catagory= catagory,
                existingIncom.amound = amound,
                existingIncom.date = date,
                existingIncom.depositTo = depositTo
             }
        },
        deleteExpans:(state,action)=>{
            
            let expens =state.expanses
            expens.splice(action.payload,1)
            state.expanses = expens
        },
        deletIncom:(state,action)=>{
            let incom = state.incoms
            incom.splice(action.payload,1)
            state.incoms=incom
        },
        addBudget:(state,action)=>{
            const budget=action.payload
            state.budgets.push(budget)
        },
        editBudget:(state,action)=>{
              const {id,buCategory,buAmound}=action.payload
             
              const FilterdBudjet=state.budgets.find(bud=> bud.id == id)   
              if(FilterdBudjet){
                FilterdBudjet.buCategory=buCategory,
                FilterdBudjet.buAmound=buAmound
              }          

        },
        addBudjetFid:(state,action)=>{
            const buid=action.payload
            state.budjetFid=buid
        },
        adduser:(state,action)=>{
           const userin=action.payload
           state.user.push(userin)
        }


        
    }
})

export const {addIncoms,addExpans,editExpans,editIncom,deleteExpans,deletIncom,addBudget,editBudget,addBudjetFid,adduser}=dataSliser.actions
export default dataSliser.reducer