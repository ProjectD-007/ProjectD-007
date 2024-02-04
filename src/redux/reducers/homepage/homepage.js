import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewSignin: false,
};

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.viewSignin = true;
    },
    showNotifications: (state) => {
      console.log('Called notifications');
    },
    wallet: () => {
      console.log('called wallet');
    },
  },
});

export const { toggleLogin, showNotifications, wallet } = homepageSlice.actions;
export default homepageSlice.reducer;
