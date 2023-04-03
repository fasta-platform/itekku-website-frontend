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
  showMobileMenu: false,
  showMerchantModal: false,
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
      state.showMobileMenu = false;

      console.log(state.currentPageName);
      console.log(state.showMobileMenu);
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

    setShowMobileMenu: (state, { payload }) => {
      state.showMobileMenu = payload;
    },

    setShowMerchantModal: (state, { payload }) => {
      state.showMerchantModal = payload;
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
  setShowMobileMenu,
  setShowMerchantModal,
} = authSlice.actions;

export default authSlice.reducer;
