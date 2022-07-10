//import { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } from '../actions/reducer/movie'
import { createSlice } from '@reduxjs/toolkit'

import movieReducer from './src/movie'
import apiConfigurationReducer from './src/apiConfiguration'

import populate, { getLanguage, populate_replace } from './utils/populate-async'
import {
  discoverMethods,
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
  REMOVE_MOVIES,
  SET_FILTER,
  SEARCH_MOVIE,
} = movie.actions

// CREATING ASYNCRONOUS ACTIONS
export const ADD_MOVIES_ASYNC = _ => (dispatch) => {
  // let data = {}
  const movieReducerDefaultDynamicParams = {}
  getLanguage().then(result => {
    movieReducerDefaultDynamicParams.language = result.split('-')[0] ?? 'en'

    // SETTING DEFAULT STATE
    populate(
      'movie',
      'discover',
      discoverMethods.getMovie,
      movieReducerDefaultDynamicParams
    ).then( result => dispatch(ADD_MOVIES(result)) )
  })
}
export const SEARCH_MOVIES_ASYNC = props => (dispatch) => {
  // let data = {}
  const movieReducerDefaultDynamicParams = {
    ...props
  }
  getLanguage().then(result => {
    movieReducerDefaultDynamicParams.language = result.split('-')[0] ?? 'en'

    // SETTING DEFAULT STATE
    populate_replace(
      'movie',
      'search',
      searchMethods.getMovies,
      movieReducerDefaultDynamicParams
    ).then( result => dispatch(SEARCH_MOVIE(result)) )
  })
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
export const { VALIDATE_DATA } = apiConfiguration.actions

// CREATING ASYNCRONOUS ACTIONS
export const VALIDATE_DATA_ASYNC = _ => (dispatch) => {
  // SETTING DEFAULT STATE
  populate('ApiConfiguration').then(
    result => dispatch(VALIDATE_DATA(result))
  )
}

/**
 * END APICONFIGURATION REDUCER
 */

//export default movieReducer.reducer