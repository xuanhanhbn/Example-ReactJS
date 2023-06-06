import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isSuccess: false,
  isError: false,
  dataLogin: [],
  dataError: {}
}

const login = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    loginPage(state) {
      state.isLoading = true
    },
    loginPageFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    loginPageSuccess(state, action) {
      state.isLoading = false
      state.dataLogin = action.payload || []
      state.isSuccess = true
    },
    clear(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    }
  }
})

export const loginPageActions = login.actions

export const makeSelectLogin = state => state.login

export default login.reducer
