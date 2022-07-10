import { useEffect } from 'react'
import MovieTitle from './main/MovieTitle'
import MovieList from './main/MovieList'
import '../css/main.css'
import '../css/main-responsive.css'

import { ADD_MOVIES_ASYNC, VALIDATE_DATA_ASYNC } from '../reducers/index'
import { useSelector, useDispatch } from 'react-redux'

export default function Main() {
	let movies           = useSelector(state => state.movie)
	let apiConfiguration = useSelector(state => state.apiConfiguration)
	const dispatch       = useDispatch()
	const title = movies?.movies?.title ?? 'Buscando...'

	useEffect(() => {
		if (movies?.movies === undefined || movies.movies?.results === undefined)
			dispatch(ADD_MOVIES_ASYNC())
	}, [])

	useEffect(() => {
		if (apiConfiguration?.config === undefined)
			dispatch(VALIDATE_DATA_ASYNC())
	}, [])
	return (
		<main>
			<MovieTitle title={title} />
			<MovieList movies={movies} apiConfiguration={apiConfiguration} />
		</main>
	)
}