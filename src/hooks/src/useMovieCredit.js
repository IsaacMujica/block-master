import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FIND_LIST_CREDIT_ASYNC } from '../../reducers/index'

const useMovieCredit = movie_id => {
	let movies					 = useSelector(state => state.movie)
	let apiConfiguration = useSelector(state => state.apiConfiguration)
	const dispatch			 = useDispatch()
	let valid = !(
		(movie_id === undefined || apiConfiguration?.config === undefined || movies?.find_list_credit === undefined)
		|| movie_id !== movies?.find_list_credit?.id
	)

	const [returnMovie, setReturnMovie] = useState({
		config: apiConfiguration,
		movie: movies?.find_list_credit,
		valid,
	})

	useEffect(_ => {
		if ( movie_id !== undefined && movie_id !== movies?.find_list_credit?.id )
			dispatch(FIND_LIST_CREDIT_ASYNC({movie_id})).then(result => {
				valid = true
				setReturnMovie({
					config: apiConfiguration,
					movie: result.result,
					valid,
				})
			})
	}, [movie_id])

	return {...returnMovie}

}

export { useMovieCredit }