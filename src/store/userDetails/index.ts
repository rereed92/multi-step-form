/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'store/types';
import initialState from './state';
import { IUserDetailsState, IInputPayload, ICheckboxPayload } from './types';

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

    setRole(
      state: IUserDetailsState,
      { payload: { input } }: PayloadAction<IInputPayload>
    ) {
      state.role = input;
    },

    setEmail(
      state: IUserDetailsState,
      { payload: { input } }: PayloadAction<IInputPayload>
    ) {
      state.email = input;
    },

    setPassword(
      state: IUserDetailsState,
      { payload: { input } }: PayloadAction<IInputPayload>
    ) {
      state.password = input;
    },

    setProductUpdates(
      state: IUserDetailsState,
      { payload: { checked } }: PayloadAction<ICheckboxPayload>
    ) {
      state.productUpdates = checked;
    },

    setOtherProductUpdates(
      state: IUserDetailsState,
      { payload: { checked } }: PayloadAction<ICheckboxPayload>
    ) {
      state.otherProductUpdates = checked;
    },
  },
});

export const {
  setName,
  setRole,
  setEmail,
  setPassword,
  setProductUpdates,
  setOtherProductUpdates,
} = userDetailsSlice.actions;

export default userDetailsSlice;

export const submitData = (data: IUserDetailsState): AppThunk => () => {
  // eslint-disable-next-line no-console
  console.log(data);
};
