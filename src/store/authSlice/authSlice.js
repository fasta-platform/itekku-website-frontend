import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appScreenSize: "",
  siteName: "Itekku",
  summaryModal: {
    status: false,
    payload: null,
  },
  currentPageName: "Home",
  currentStep: 1,
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
    setCurrentPageName: (state, { payload }) => {
      state.currentPageName = payload;
    },

    setCurrentStep: (state, { payload }) => {
      state.currentStep = payload;
    },
  },

  extraReducers: {
    // [getUserInfo.pending]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const { setSummaryModal, setCurrentPageName, setCurrentStep } =
  authSlice.actions;

export default authSlice.reducer;
