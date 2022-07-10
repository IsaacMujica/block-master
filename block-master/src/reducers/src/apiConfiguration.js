import { VALIDATE_DATA } from '../../actions/reducer/apiConfiguration'

let initialState = undefined

const apiConfigurationSlice = {
  name: 'apiConfiguration',
  initialState: {
    config: initialState
  },
  reducers: {
    [VALIDATE_DATA]: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.config = action.payload
      //console.info(state.config, action.payload)
    },
  },
}

// Action creators are generated for each case reducer function
//export { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE }
//export const { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } = apiConfigurationSlice.actions

export default apiConfigurationSlice