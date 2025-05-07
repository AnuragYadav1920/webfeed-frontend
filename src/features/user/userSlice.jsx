import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userLoggedIn",
  initialState: {
    data: null,
  },
  reducers: {
    getUser: (state) => {
      state.data = JSON.parse(localStorage.getItem("user"));
    },
    setUser: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(state.data));
    },
    deleteUser: (state) => {
      state.data = null;
      JSON.stringify(localStorage.removeItem("user"));
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUser, setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
