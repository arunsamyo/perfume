import { createSlice } from '@reduxjs/toolkit'

export const DeletSlice = createSlice({
  name: 'deletcounter',
  initialState:{
    value:[]
  },
  reducers: {
    
    decrement: (state,action) => {

      state.value = state.value.filter((v)=>v.id!==action.payload)
      return{
        ...state,
        value:data
      }
      }
  },
})


export const { decrement } = AddCartSlice.actions

 export default DeletSlice.reducer