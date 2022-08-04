import { IconStar } from '../icons'
import iconBrokenImage from '../../icons/broken-image.svg'

export default function Movie({ base_path, movie, setMovie, watchnowRef }) {
	const { poster_path, title, vote_average } = {...movie}

	const handlerMovieClick = event => {
		if (watchnowRef?.current) {
			watchnowRef.current.classList.add('slide-top')
			watchnowRef.current.classList.remove('slide-bottom')
			document.querySelector('body').style.overflow = 'hidden'
		} else document.querySelectorAll('.movie-container')[1].querySelector('.movie-content').scrollTo({ top: 0, behavior: 'smooth' })
		setMovie(movie)
	}
	return (
		<div className="movie" title={title}>
			<div className="movie-content" onClick={ handlerMovieClick }>
				{ poster_path === null ?
					<img src={iconBrokenImage} alt="" className="movie-poster img-fluid no-movies-poster" /> :
					<img src={`${base_path}/${poster_path}`} alt="" className="movie-poster img-fluid" />
				}
				<div className="movie-rate">
					<div className="rate-icon">
						<IconStar />
					</div>
					<div className="rate-value">{vote_average.toPrecision(2)}</div>
				</div>
			</div>
		</div>
	)
}