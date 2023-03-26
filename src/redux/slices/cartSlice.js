import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: []
}

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addCart(state, action) {
      const findCount = state.items.find(obj => obj.id === action.payload.id)

      if (findCount) {
        findCount.count++
      } else {
        state.items.push({...action.payload, count: 1})
      }

      state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0) 
    },
    lowerCart(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload)

      if(findItem) {
        findItem.count--
        state.totalPrice -= findItem.price
        state.totalCount -= 1
      }

      if (findItem.count === 0) {
        state.items = state.items.filter(obj => obj.id !== action.payload)
      }
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
      state.totalCount = 0
    },
    removeCart(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload)

      if (findItem) {
        state.totalCount -= findItem.count
        
        const totalPriceItem = findItem.price * findItem.count
        state.totalPrice -= totalPriceItem
      }
      
      state.items = state.items.filter(obj => {
        return obj.id !== action.payload
      })
    }
  }
})

export const { addCart, lowerCart, clearItems, removeCart } = cartSlice.actions
export default cartSlice.reducer