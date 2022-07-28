import { IconStar } from '../icons'
import iconBrokenImage from '../../icons/broken-image.svg'

export default function Movie({ base_path, movie, setMovie, watchnowRef }) {
	const { poster_path, title, vote_average } = {...movie}

	const handlerMovieClick = event => {
		watchnowRef.current.style.display = 'flex'
		document.querySelector('body').style.overflow = 'hidden'
		setMovie(movie)
	}
	return (
		<div className="movie" title={title} onClick={ handlerMovieClick }>
			<div className="movie-content">
				{ poster_path === null ?
					<img src={iconBrokenImage} alt="" className="movie-poster img-fluid no-movies-poster" /> :
					<img src={`${base_path}/${poster_path}`} alt="" className="movie-poster img-fluid" />
				}
				<div className="movie-rate">
					<div className="rate-icon">
						<IconStar />
					</div>
					<div className="rate-value">{vote_average}</div>
				</div>
			</div>
		</div>
	)
}