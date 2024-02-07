import { configureStore } from '@reduxjs/toolkit';
import homepage from './slice/homepage/homepage';

export const store = configureStore({
  reducer: {
    homepage,
  },
});
