import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  password: '',
};

const Bai9 = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<{ email: string; password: string }>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { register } = Bai9.actions;
export default Bai9.reducer;