import{configureStore}from'@reduxjs/toolkit'
import dataSliser from './Slice/DatasSlice'

export const store=configureStore({
    reducer:{
        datas:dataSliser
    }

})