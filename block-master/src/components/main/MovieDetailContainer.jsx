import CloseButton from '../globals/CloseButton'
import MovieOverScreen from './MovieOverScreen'
import MovieProvider from '../globals/MovieProvider'
import MovieVideo from '../globals/MovieVideo'
import LoaderContainer from '../globals/LoaderContainer'
import MovieSimilar from '../globals/MovieSimilar'

export default function MovieDetailContainer({movie, setMovie, target}) {

  if (movie === undefined) return <LoaderContainer text='Cargando información de la película...' />
	return (
		<div className="movie-content">
			<CloseButton target={target} />
			<MovieOverScreen movie={movie} />
			<div className="row">
				<div className="col">
					<MovieVideo movie={movie} />
				</div>
				<div className="col">
					<MovieProvider movie={movie} />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<MovieSimilar movie={movie} setMovie={setMovie} />
				</div>
			</div>
		</div>
	)
}