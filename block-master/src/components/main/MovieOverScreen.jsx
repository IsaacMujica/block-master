import { useMovie } from '../../hooks/index'
import LoaderContainer from '../globals/LoaderContainer'
import MovieInfo from '../globals/MovieInfo'

export default function MovieOverScreen({movie}) {
  const hookMovie = useMovie({movie_id:movie?.id, prop:'find_list'})

  if (hookMovie?.valid) return <LoaderContainer text='Cargando información...' />

  return <MovieInfo id="listInfo" movie={hookMovie.movie} config={hookMovie.config.config} />
}