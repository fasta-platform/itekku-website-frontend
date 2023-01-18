import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appScreenSize: "",
  siteName: "Itekku",
};

const authSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    setAppScreenSize: (state, { payload }) => {
      state.appScreenSize = payload;
    },
  },

  extraReducers: {
    // [getUserInfo.pending]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const { setAppScreenSize } = authSlice.actions;

export default authSlice.reducer;
