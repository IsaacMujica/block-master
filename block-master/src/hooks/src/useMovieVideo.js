import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FIND_LIST_VIDEO_ASYNC } from '../../reducers/index'
import { getLanguage, getLocation } from '../../reducers/utils/helpers'

const useMovieVideo = (props = {}) => {
	const {
		movie_id,
		prop = 'find_list_videos',
		localStoreIndex = 'find_list_videos',
		reduce_callback = FIND_LIST_VIDEO_ASYNC
	} = {...props}
	let movies					 = useSelector(state => state.movie)
	let apiConfiguration = useSelector(state => state.apiConfiguration)
	const dispatch			 = useDispatch()
	let valid = (
		(movie_id === undefined || apiConfiguration?.config === undefined || movies?.[prop] === undefined)
		|| movie_id !== movies?.[prop]?.id
	)

	const [returnMovie, setReturnMovie] = useState({
		config: apiConfiguration,
		movie: movies?.[prop],
		valid,
	})

	useEffect(_ => {
		if ( movie_id !== undefined && movie_id !== movies?.[prop]?.id )
			dispatch(reduce_callback({...props})).then(result => {
				setReturnMovie({
					config: apiConfiguration,
					movie: result.result,
					valid: false,
				})
			})
	}, [movie_id])

	return {...returnMovie}

}

export { useMovieVideo }