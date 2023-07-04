import { call, put, takeLatest } from 'redux-saga/effects'
import { customerActions } from './customerSlice'
import { getApiDefault, postApiDefault } from './api'

function* onGetList() {
  const url = '/Customer'
  try {
    const response = yield call(getApiDefault, url)
    console.log('res: ', response)
    if (response && response.data.status === 1) {
      yield put(customerActions.getListCustomerSuccess())
    } else {
      yield put(customerActions.getListCustomerFailed())
    }
  } catch (error) {
    yield put(customerActions.getListCustomerFailed('internet'))
  }
}

export default function* customerSaga() {
  yield takeLatest(customerActions.getListCustomer, onGetList)
}
