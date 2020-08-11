import { configureStore } from '@reduxjs/toolkit';
import userDetailsSlice from './userDetails';

const store = configureStore({
  reducer: {
    userDetails: userDetailsSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
