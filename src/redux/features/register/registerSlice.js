import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk('register', async (data) => {
  try {
    const res = await axios.post("https://api.mudoapi.tech/register", { ...data, roleId: 1 })
    return res.data.message
  } catch (error) {
    throw error.response.data
  }
})

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false
      state.message = action.payload;
      console.log('di fullfill')
    })
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'An Error Occured.'
    })
  }
});

export default registerSlice.reducer;
