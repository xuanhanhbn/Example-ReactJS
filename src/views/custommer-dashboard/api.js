import baseApiUrlProduct from '@/utils/baseApiProduct'

export const getApi = url =>
  new Promise((resolve, reject) =>
    baseApiUrlProduct
      .get(url)
      .then(res => resolve(res))
      .catch(err => reject(err))
  )
