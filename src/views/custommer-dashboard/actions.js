import * as types from './constant'

export const createItem = (data, CancelToken) => ({
  type: types.CREATE_ITEM,
  data,
  CancelToken
})

export const createItemSuccess = data => ({
  type: types.CREATE_ITEM_SUCCESS,
  data
})

export const createItemFailed = data => ({
  type: types.CREATE_ITEM_FAILED,
  data
})
