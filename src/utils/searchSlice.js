import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:'search',
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            Object.assign(state, action.payload); // Mutates the state directly
        }
    }
})  

export const{cacheResults}=searchSlice.actions;
export default searchSlice.reducer;