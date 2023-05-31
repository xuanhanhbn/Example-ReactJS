import { call, put, takeLatest } from 'redux-saga/effects'
import { customerActions } from './customerSlice'
import { postApi } from './api'

function* onRegister(data) {
  console.log('data: ', data)
  const payload = data.payload || []
  const url = 'users/register'
  try {
    const response = yield call(postApi, url, payload)
    if (response && response.data.status === 1) {
      yield put(customerActions.registerAccountSuccess())
    } else {
      yield put(customerActions.registerAccountFailed())
    }
  } catch (error) {
    yield put(customerActions.registerAccountFailed('internet'))
  }
}

export default function* customerSaga() {
  yield takeLatest(customerActions.registerAccount, onRegister)
}
