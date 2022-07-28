import CloseButton from '../globals/CloseButton'
import MovieOverScreen from './MovieOverScreen'
import MovieProviderContainer from './MovieProviderContainer'

export default function MovieDetailContainer({movie, target}) {
	return (
		<>
			<CloseButton target={target} />
			<MovieOverScreen movie={movie} />
			<div className="row">
				<div className="col">
					<MovieProviderContainer movie={movie} />
				</div>
				<div className="col">
					<p className="my-1">Crear componentes para cargar los trailers</p>
					{/*<MovieVideoContainer />*/}
				</div>
			</div>
		</>
	)
}