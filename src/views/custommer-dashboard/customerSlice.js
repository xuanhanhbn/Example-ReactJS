import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isSuccess: false,
  isError: false,
  dataRegister: [],
  dataError: {}
}

const customer = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    registerAccount(state) {
      state.isLoading = true
    },
    registerAccountFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    registerAccountSuccess(state, action) {
      state.isLoading = false
      state.dataRegister = action.payload || []
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
