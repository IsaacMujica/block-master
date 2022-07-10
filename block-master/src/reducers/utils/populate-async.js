import localStore from '../../services/localstorage'
import {
  configuration,
  discover,
  search
} from '../../services/api/themoviedb/index'
import {
  defaultParams,
  configurationMethods,
  apiFilterTitle
} from '../../services/api/themoviedb/utils/constants'

const API = {
  configuration,
  discover,
  search
}

async function populate_async(APICall, method = configurationMethods.getConfiguration, props = {}) {
  const response = new APICall({...props})
  return await response(method)
}

function builNewLocalStorage({ newStore, result, api, apiMethod }) {
  if (result?.success === undefined) {
    result.tmdb_from = {
      [api]: apiMethod
    }
    result.title = apiFilterTitle?.[api]?.[apiMethod]
    newStore.setExpiryTime(defaultParams.refresh_date.short)
    newStore.set(result)
    return result
  }
}

export async function getLanguage() {
  let language = await window.navigator.language
  return language
}

export default async function populate(localStoreName, api = 'configuration', apiMethod = configurationMethods.getConfiguration, props = {}) {
  // Getting the localStorage
  let newStore = localStore(localStoreName)
  // Validation if the localStorage does not exist
  if (newStore.get() === undefined)
    return await populate_async(API[api], apiMethod, props).then(
      result => builNewLocalStorage({ newStore, result, api, apiMethod })
    )
  // Validation if the current localStorage is the same as requested
  const validate_last_request = newStore.get().tmdb_from?.[api]
  if (validate_last_request === undefined || validate_last_request !== apiMethod)
    return await populate_replace(localStoreName, api, apiMethod, props).then(result => result)
  return await newStore.get()
}

export async function populate_replace(localStoreName, api = 'configuration', apiMethod = configurationMethods.getConfiguration, props = {}) {
  let newStore = localStore(localStoreName)
  return await populate_async(API[api], apiMethod, props).then(
    result => builNewLocalStorage({ newStore, result, api, apiMethod })
  )
}