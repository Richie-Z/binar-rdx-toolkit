import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu = createAsyncThunk('menu/getMenu', async () => {
  try {
    const { data: { data } } = await axios.get("https://api.mudoapi.tech/menus")
    return data
  } catch (error) {
    console.log('error:', error)
    return error.response.data
  }
})

const initialState = {
  list: [],
  loading: false,
  error: ''
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenu.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getMenu.fulfilled, (state, action) => {
      state.loading = false
      state.list = action.payload.Data
      console.log('ini di fullfill')
    })
    builder.addCase(getMenu.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
      console.log('ini di rejected')
    })
  }
});

export default menuSlice.reducer;
