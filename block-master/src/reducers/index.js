//import { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } from '../actions/reducer/movie'
import { createSlice } from '@reduxjs/toolkit'

import movieReducer from './src/movie'
import apiConfigurationReducer from './src/apiConfiguration'
import sliderReducer from './src/slider'
import sliderInfoReducer from './src/sliderInfo'
import { buildPopulateCallback, buildPopulateCallbackProps, buildProps as buildPropsHelper } from './utils/helpers'

import populate, { populate_replace } from './utils/populate-async'
import {
  configurationMethods,
  discoverMethods,
  genresMethods,
  moviesMethods,
  searchMethods
} from '../services/api/themoviedb/utils/constants'

/**
 * MOVIE REDUCER
 */

//console.info(movieReducer);

// CREATING A SLICE REDUCER
export const movie = createSlice(movieReducer)
// CREATING ACTIONS
export const {
  ADD_MOVIES,
  FIND_MOVIE_SLIDER,
  FIND_MOVIE,
  FIND_MOVIE_LIST,
  FIND_LIST_PROVIDERS,
  FIND_LIST_VIDEO,
  REMOVE_MOVIES,
  SEARCH_MOVIE,
  SET_FILTER,
} = movie.actions

// CREATING ASYNCRONOUS ACTIONS
export const ADD_MOVIES_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    api: props?.api ?? 'discover',
    apiMethod: props?.apiMethod ?? discoverMethods.getMovie,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate_replace,
    reduce_callback: ADD_MOVIES
  }
  buildPopulateCallbackProps(buildProps)
}
export const SET_FILTER_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    api: props?.api ?? 'discover',
    apiMethod: props?.apiMethod ?? discoverMethods.getMovie,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: SET_FILTER
  }
  buildPopulateCallbackProps(buildProps)
}
export const SEARCH_MOVIES_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    api: props?.api ?? 'search',
    apiMethod: props?.apiMethod ?? searchMethods.getMovie,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate_replace,
    reduce_callback: SEARCH_MOVIE
  }
  buildPopulateCallbackProps(buildProps)
}
export const FIND_MOVIE_SLIDER_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    localStoreIndex: props?.localStoreIndex ?? 'find_slider',
    api: props?.api ?? 'movies',
    apiMethod: props?.apiMethod ?? moviesMethods.getMovie,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: FIND_MOVIE_SLIDER
  }
  return buildPopulateCallbackProps(buildProps)
}
export const FIND_MOVIE_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    localStoreIndex: props?.localStoreIndex ?? 'find',
    api: props?.api ?? 'movies',
    apiMethod: props?.apiMethod ?? moviesMethods.getMovie,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: FIND_MOVIE
  }
  return buildPopulateCallbackProps(buildProps)
}
export const FIND_MOVIE_LIST_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    localStoreIndex: props?.localStoreIndex ?? 'find_list',
    api: props?.api ?? 'movies',
    apiMethod: props?.apiMethod ?? moviesMethods.getMovie,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: FIND_MOVIE_LIST
  }
  return buildPopulateCallbackProps(buildProps)
}
export const FIND_LIST_PROVIDERS_ASYMC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    localStoreIndex: props?.localStoreIndex ?? 'find_list',
    api: props?.api ?? 'movies',
    apiMethod: props?.apiMethod ?? moviesMethods.getMovie,
  })
  if (props?.reduce_callback !== undefined)
    delete props?.reduce_callback
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: FIND_LIST_PROVIDERS
  }
  return buildPopulateCallbackProps(buildProps)
}
export const FIND_LIST_VIDEO_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'movie',
    localStoreIndex: props?.localStoreIndex ?? 'find_list_videos',
    api: props?.api ?? 'movies',
    apiMethod: props?.apiMethod ?? moviesMethods.getMovie,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: FIND_LIST_VIDEO
  }
  return buildPopulateCallbackProps(buildProps)
}

/**
 * END MOVIE REDUCER
 */

/**
 * APICONFIGURATION REDUCER
 */

// CREATING A SLICE REDUCER
export const apiConfiguration = createSlice(apiConfigurationReducer)
// CREATING ACTIONS
export const {
  VALIDATE_DATA,
  GENRES_DATA,
  COUNTRIES_DATA,
  LENGUAGES_DATA,
} = apiConfiguration.actions

// CREATING ASYNCRONOUS ACTIONS
export const VALIDATE_DATA_ASYNC = _ => (dispatch) => {
  // SETTING DEFAULT STATE
  populate({
    localStoreName: 'apiConfiguration'
  }).then(
    result => dispatch(VALIDATE_DATA(result))
  )
}
export const GENRES_DATA_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'apiConfiguration',
    api: props?.api ?? 'genres',
    apiMethod: props?.apiMethod ?? genresMethods.getMovieList,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: GENRES_DATA
  }
  buildPopulateCallbackProps(buildProps)
}
export const COUNTRIES_DATA_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'apiConfiguration',
    localStoreIndex: props?.localStoreIndex ?? 'countries',
    api: props?.api ?? 'configuration',
    apiMethod: props?.apiMethod ?? configurationMethods.getCountries,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: COUNTRIES_DATA
  }
  buildPopulateCallbackProps(buildProps)
}
export const LENGUAGES_DATA_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'apiConfiguration',
    localStoreIndex: props?.localStoreIndex ?? 'lenguages',
    api: props?.api ?? 'configuration',
    apiMethod: props?.apiMethod ?? configurationMethods.getLanguages,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: LENGUAGES_DATA
  }
  buildPopulateCallbackProps(buildProps)
}

/**
 * END APICONFIGURATION REDUCER
 */

/**
 * SLIDER REDUCER
 */

// CREATING A SLICE REDUCER
export const slider = createSlice(sliderReducer)
// CREATING ACTIONS
export const { SET_SLIDERS } = slider.actions

// CREATING ASYNCRONOUS ACTIONS
export const SET_SLIDERS_ASYNC = (props = {}) => (dispatch) => {
  props = buildPropsHelper({
    ...props,
    localStoreName: props?.localStoreName ?? 'slider',
    api: props?.api ?? 'movies',
    apiMethod: props?.apiMethod ?? moviesMethods.getTopRated,
  })
  const buildProps = {
    props,
    dispatch,
    callback: populate,
    reduce_callback: SET_SLIDERS
  }
  buildPopulateCallbackProps(buildProps)
}

/**
 * END SLIDER REDUCER
 */

/**
 * SLIDERINFO REDUCER
 */

// CREATING A SLICE REDUCER
export const sliderInfo = createSlice(sliderInfoReducer)
// CREATING ACTIONS
export const { SET_SLIDERINFOS } = sliderInfo.actions

// CREATING ASYNCRONOUS ACTIONS
/*export const SET_SLIDERS_ASYNC = _ => (dispatch) => {
  // SETTING DEFAULT STATE
  populate('sliderInfo', 'movies', moviesMethods.getTopRated).then(
    result => dispatch(SET_SLIDERS(result))
  )
}*/

/**
 * END SLIDERINFO REDUCER
 */