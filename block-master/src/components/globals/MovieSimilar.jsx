import { useRef } from 'react'
import { useMovieSimilar } from '../../hooks/index'
import { moviesMethods } from '../../services/api/themoviedb/utils/constants'
import Movie from './Movie'
import LoaderContainer from './LoaderContainer'

export default function MovieSimilar({movie, setMovie}) {
	const movieContent = useRef(null)
  const hookMovieSimilar = useMovieSimilar(movie?.id)
  if (!hookMovieSimilar?.valid) return <LoaderContainer text='Cargando películas similares...' />
 
	if (hookMovieSimilar.movie?.results?.length === 0 || hookMovieSimilar.movie?.results === undefined)  return <h4 className="my-1">No hay películas similares a mostrar</h4>

	const config_image = hookMovieSimilar.config.config.images
	/*const handlerDrag = event => {
		movieContent.current
	}*/

	return (
		<div className="movie-similar-container">
			<h4 className="my-1">Películas similares</h4>
			<div ref={movieContent} className="movie-similar-content" /*draggable="true" onDragStart={handlerDrag}*/ >
				{
				hookMovieSimilar.movie.results.map((movie, key) => {
					let base_path = `${config_image.secure_base_url}${config_image.poster_sizes[2]}`
					return (
						<Movie
							key={key}
							base_path={base_path}
							movie={movie}
							setMovie={setMovie}
						/>
					)
				})
				}
			</div>
		</div>
	)
}