import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'authentication',
  initialState:{
    token:null
  },
  reducers: {
    getToken: (state)=>{
        state.token = JSON.parse(localStorage.getItem('token'));
    },
    setToken:(state, action)=>{
        state.token = action.payload;
        localStorage.setItem('token',JSON.stringify(state.token));
    },
    deleteToken:(state)=>{
        state.token = null;
        localStorage.removeItem('token');
    }
  },
})

// Action creators are generated for each case reducer function
export const { getToken,setToken, deleteToken} = authSlice.actions

export default authSlice.reducer