import { configureStore } from '@reduxjs/toolkit'
import { movie, apiConfiguration } from '../reducers/index'

// console.info(movie)

export default configureStore({
  reducer: {
    movie: movie.reducer,
    apiConfiguration: apiConfiguration.reducer,
  },
})