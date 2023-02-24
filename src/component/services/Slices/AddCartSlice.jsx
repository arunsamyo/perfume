import { createSlice } from '@reduxjs/toolkit'

export const AddCartSlice = createSlice({
  name: 'counter',
  initialState:{
    value:[]
  },
  reducers: {
    increment: (state,action) => {

              state.value=[...state.value,action.payload]
    },
    decrement: (state,action) => {

      state.value=state.value.filter((v)=>v.id!==action.payload.id)
},
    
  },
})


export const { increment,decrement } = AddCartSlice.actions

 export default AddCartSlice.reducer

