import {createSlice} from '@reduxjs/toolkit';

type AuthType = {
  id: string;
  email: string;
  accesstoken: string;
};

const initialState: AuthType = {
  id: '',
  email: '',
  accesstoken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.authData = action.payload;
    },
    removeAuth: (state) => {
      state.authData = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addAuth,removeAuth} = authSlice.actions;

export default authSlice.reducer;

export const authSelector = (state: any) => state.auth.authData;
