import { useState, useRef } from 'react'
import Movie from './Movie'
import Loader from '../globals/Loader'
import NoMovies from './NoMovies'
import MovieDetailContainer from './MovieDetailContainer'

export default function MovieList({ movies, apiConfiguration }) {
	const [movieList, setMovieList] = useState(undefined)
	const watchnowRef = useRef(null)

	return (
		<section className="movie-list">
		{
			(movies?.movies !== undefined && apiConfiguration?.config !== undefined) ?
			(
				movies.movies?.results === undefined || movies.movies.results.length === 0 ?
				<NoMovies /> :
				movies.movies.results.map((movie, key) => {
					let base_path = `${apiConfiguration.config.images.secure_base_url}${apiConfiguration.config.images.poster_sizes[2]}`
					return (
						<Movie
							key={key}
							base_path={base_path}
							movie={movie}
							setMovie={setMovieList}
							watchnowRef={watchnowRef}
						/>
					)
				})
			) :
			<Loader />
		}
			<div ref={watchnowRef} className="movie-container">
				<MovieDetailContainer movie={movieList} target={watchnowRef} />
			</div>
		</section>
	)
}