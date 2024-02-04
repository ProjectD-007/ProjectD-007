import { configureStore } from '@reduxjs/toolkit';
import homepage from './reducers/homepage/homepage';

export const store = configureStore({
  reducer: {
    homepage,
  },
});
