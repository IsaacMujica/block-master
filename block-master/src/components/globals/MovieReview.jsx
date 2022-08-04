import { useMovieReview } from '../../hooks/index'
import LoaderContainer from './LoaderContainer'

export default function MovieReview({movie}) {
  const hookMovieReview = useMovieReview(movie?.id)
  if (!hookMovieReview?.valid) return <LoaderContainer text='Cargando créditos...' />
 
	if (hookMovieReview.movie?.results?.length === 0 || hookMovieReview.movie?.results === undefined)  return <h4 className="my-1">No hay reseñas para esta película</h4>

	return (
		<div className="movie-review-container">
		{
			hookMovieReview.movie.results.map( (review, id) => {
				return (
					<div key={id} className="row movie-review-content">
						<div className="col-12">
							<div className="row align-items-end">
								<div className="col-auto pl-0">
									<img src={review.author_details.avatar_path.substring(1)} alt={review.author} />
								</div>
								<div className="col">
									<h6 className="m-0 character-name">{review.author_details.name}</h6>
									<p className="m-0 character-name">{review.author}</p>
									<p className="m-0 review-date">{review.created_at}</p>
								</div>
							</div>
						</div>
						<div className="col-12">
							<p className="review-content">{review.content}</p>
						</div>
					</div>
				)
			})
		}
		</div>
	)
}