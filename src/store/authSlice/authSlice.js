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
  pageLoading: {
    status: false,
    message: "",
  },

  whatsappNumber: null,
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

    setPageLoading: (state, { payload }) => {
      state.pageLoading = {
        status: payload.status,
        message: payload.message,
      };
    },

    setWhatsappNumber: (state, { payload }) => {
      state.whatsappNumber = payload;
    },
  },

  extraReducers: {
    // [getUserInfo.pending]: (state, action) => {
    //   state.loading = true;
    // },
  },
});

export const {
  setSummaryModal,
  setCurrentPageName,
  setCurrentStep,
  setPageLoading,
  setWhatsappNumber,
} = authSlice.actions;

export default authSlice.reducer;
