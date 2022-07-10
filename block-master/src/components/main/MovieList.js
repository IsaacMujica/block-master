import Movie from './Movie'
import Loader from './Loader'
import NoMovies from './NoMovies'

export default function MovieList({ movies, apiConfiguration }) {
	return (
		<section className="movie-list">
		{
			(movies?.movies !== undefined && apiConfiguration?.config !== undefined) ?
			(
				movies.movies?.results === undefined || movies.movies.results.length === 0 ?
				<NoMovies /> :
				movies.movies.results.map((movie, key) => {
					let base_path = `${apiConfiguration.config.images.secure_base_url}${apiConfiguration.config.images.poster_sizes[2]}`
					return ( <Movie key={key} base_path={base_path} {...movie} /> )
				})
			) :
			<Loader />
		}
		</section>
	)
}