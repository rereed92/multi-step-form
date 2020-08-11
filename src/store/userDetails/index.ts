/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'store/types';
import initialState from './state';
import { IUserDetailsState, IInputPayload } from './types';

const userDetailsSlice = createSlice({
  name: 'userDetailsSlice',
  initialState,
  reducers: {
    setName(
      state: IUserDetailsState,
      { payload: { input } }: PayloadAction<IInputPayload>
    ) {
      state.name = input;
    },
  },
});

export const { setName } = userDetailsSlice.actions;

export default userDetailsSlice;

export const submitData = (data: IUserDetailsState): AppThunk => () => {
  // eslint-disable-next-line no-console
  console.log(data);
};
