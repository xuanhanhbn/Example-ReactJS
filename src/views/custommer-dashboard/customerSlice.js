import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isSuccess: false,
  isError: false,
  dataCustomer: [],
  dataError: {}
}

const customer = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    getListCustomer(state) {
      state.isLoading = true
    },
    getListCustomerFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    getListCustomerSuccess(state, action) {
      state.isLoading = false
      state.dataCustomer = action.payload || []
      state.isSuccess = true
    },
    clear(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    }
  }
})

export const customerActions = customer.actions

export const makeSelectCustomer = state => state.customer

export default customer.reducer
