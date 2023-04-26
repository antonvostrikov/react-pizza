import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: 'loading'
}

export const getPizza = createAsyncThunk(
  'pizza/getPizzaStatus',
    async (params) => {
      const { pageCount, category, sortBy, order } = params
      
      const { data } = await axios.get(`http://localhost:3001/pizzas?_page=${pageCount}&_limit=4&${category}&_sort=${sortBy}&_order=${order}`)

      return data
  }
)

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action) {
      state.items = action.payload
    }
  },
  extraReducers: {
    [getPizza.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [getPizza.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [getPizza.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    }
  }
})

export const { setPizza } = pizzaSlice.actions
export default pizzaSlice.reducer