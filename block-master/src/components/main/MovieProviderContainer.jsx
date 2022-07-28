import { useMovie } from '../../hooks/index'
import LoaderContainer from '../globals/LoaderContainer'
import MovieProvider from '../globals/MovieProvider'

export default function MovieProviderContainer({movie}) {
  const hookMovie = useMovie({movie_id:movie?.id, prop:'find_list'})

  if (hookMovie?.valid) return <LoaderContainer text='Cargando información...' />

  return <MovieProvider movie={hookMovie.movie} config={hookMovie.config.config} />
}