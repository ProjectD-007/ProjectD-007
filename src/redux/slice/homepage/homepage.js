import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signInMode: 'mobile',
  viewSignin: false,
};

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    toggleLogin: (state, action = 'mobile') => {
      state.viewSignin = true;
      state.signInMode = action.payload;
    },
    showNotifications: (state) => {
      console.log('Called notifications');
    },
    wallet: () => {
      console.log('called wallet');
    },
    closeLogin: (state) => {
      state.viewSignin = false;
    },
  },
});

export const { toggleLogin, showNotifications, wallet, closeLogin } =
  homepageSlice.actions;
export default homepageSlice.reducer;
