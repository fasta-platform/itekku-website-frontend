import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appScreenSize: "",
  siteName: "Itekku",
  summaryModal: {
    status: false,
    payload: null,
  },
};

const authSlice = createSlice({
  name: "oauth",
  initialState,
  reducers: {
    setSummaryModal: (state, { payload }) => {
      state.summaryModal = {
        status: payload?.status,
        payload: payload?.payload,
      };
    },
  },

  extraReducers: {
    // [getUserInfo.pending]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const { setSummaryModal } = authSlice.actions;

export default authSlice.reducer;
