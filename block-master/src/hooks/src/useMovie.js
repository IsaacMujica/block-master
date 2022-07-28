import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FIND_MOVIE_LIST_ASYNC } from '../../reducers/index'
import { getLanguage, getLocation } from '../../reducers/utils/helpers'

const useMovie = (props = {}) => {
	const {
		movie_id,
		prop = 'find',
		reduce_callback = FIND_MOVIE_LIST_ASYNC
	} = {...props}
	let movies					 = useSelector(state => state.movie)
	let apiConfiguration = useSelector(state => state.apiConfiguration)
	const dispatch			 = useDispatch()
	let valid = (
		(movie_id === undefined || apiConfiguration?.config === undefined || movies?.[prop] === undefined)
		|| movie_id !== movies?.[prop]?.id
	)
	console.info('1', valid)

	const [returnMovie, setReturnMovie] = useState({
		config: apiConfiguration,
		movie: movies?.[prop],
		valid,
	})

	useEffect(_ => {
		if ( movie_id !== undefined && movie_id !== movies?.[prop]?.id )
			dispatch(reduce_callback({...props})).then(result => {
				getLanguage().then(lenguage => {
					lenguage = lenguage.split('-')
					getLocation().then(location => {
						valid = false
						setReturnMovie({
							config: apiConfiguration,
							movie: result.result,
							valid,
							lenguage,
							location,
						})
					})
				})
			})
	}, [movie_id])

	console.info('2', valid)

	return {...returnMovie}

}

export { useMovie }