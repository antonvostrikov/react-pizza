import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности', 
    sortProperty: 'rating' 
  },
  pageCount: 1
}

export const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setActiveSort(state, action) {
      state.sort = action.payload
    },
    setPageCount(state, action) {
      state.pageCount = action.payload
    }
  }
})

export const { setCategoryId, setActiveSort, setPageCount } = filterSlice.actions
export default filterSlice.reducer