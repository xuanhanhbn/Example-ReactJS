import { call, put, takeLatest } from 'redux-saga/effects'
import { customerActions, loginPageActions } from './loginSlice'
import { postApiProduct } from './api'

function* onLogin(data) {
  const payload = data.payload || []
  const url = 'User/login'
  try {
    const response = yield call(postApiProduct, url, payload)
    if (response && response.status === 200) {
      yield put(loginPageActions.loginPageSuccess(response.data))
    } else {
      yield put(loginPageActions.loginPageFailed())
    }
  } catch (error) {
    yield put(loginPageActions.loginPageFailed('internet'))
  }
}

export default function* loginSaga() {
  yield takeLatest(loginPageActions.loginPage, onLogin)
}
