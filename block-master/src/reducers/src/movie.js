import { ADD_MOVIES, REMOVE_MOVIES, SET_FILTER, SEARCH_MOVIE } from '../../actions/reducer/movie'

/*import populate_initialState, { getLanguage } from '../utils/populate-async'
import {
  discoverMethods
} from '../../services/api/themoviedb/utils/constants'

const movieReducerDefaultDynamicParams = {}
getLanguage().then(result => {
  movieReducerDefaultDynamicParams.language = result.split('-')[0] ?? 'en'

  // SETTING DEFAULT STATE
  populate_initialState('movie', 'apiDiscover', discoverMethods.movie, movieReducerDefaultDynamicParams).then( result => {
    initialState = result
  })
})*/
let initialState = undefined

const movieSlice = {
  name: 'movie',
  initialState: {
    movies: initialState,
  },
  reducers: {
    [ADD_MOVIES]: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies = action.payload
      // console.info(state.movies, action.payload)
    },
    [SET_FILTER]: (state, action) => {
      state.movies = action.payload
    },
    [REMOVE_MOVIES]: state => {
      delete state.movies
      // state.movies = {}
    },
    [SEARCH_MOVIE]: (state, action) => {
      state.movies = action.payload
      // console.info(state.movies, action.payload)
    },
  },
}

// Action creators are generated for each case reducer function
//export { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE }
//export const { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } = movieSlice.actions

export default movieSlice