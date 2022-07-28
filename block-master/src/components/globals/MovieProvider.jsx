import { FIND_LIST_PROVIDERS_ASYMC } from '../../reducers/index'
import { useMovie, useMovieVideo } from '../../hooks/index'
import { moviesMethods } from '../../services/api/themoviedb/utils/constants'
import LoaderContainer from './LoaderContainer'
import ProviderType from './ProviderType'

export default function MovieProvider ({movie}) {
  const hookMovie = useMovie({
    movie_id:movie?.id,
    prop:'find_list_providers',
    localStoreIndex:'find_list_providers',
    apiMethod: moviesMethods.getWatchProviders,
    reduce_callback: FIND_LIST_PROVIDERS_ASYMC
  })
  const hookMovieVideo = useMovieVideo({
    movie_id:movie?.id,
    apiMethod: moviesMethods.getVideos,
  })


  if (hookMovie?.valid || hookMovieVideo?.valid ) return <LoaderContainer text='Cargando información...' />

  //console.info(hookMovieVideo)

  const config_data_type = {
    link: 'Mas Información',
    rent: 'Alquiler',
    buy: 'Compra',
    flatrate: 'Stream',
  }
  const config_images = hookMovie.config.config.images
  const lenguage  = hookMovie.lenguage
  const location  = hookMovie.location
  const countries = hookMovie.config.countries
  const lenguages = hookMovie.config.lenguages
  const providers = []
  let country, link
  for (let prop in hookMovie.movie.results) {
    country = countries.find( country => country.iso_3166_1 === prop && location.country === prop)
    if (country !== undefined) {
      const provider = {
        country: prop,
        data: []
      }
      for (let prop2 in hookMovie.movie.results[prop]) {
        provider.data.push({
          type: prop2,
          data: hookMovie.movie.results[prop][prop2]
        })
      }
      providers.push(provider)
      break
    }
  }
  // console.info(/*countries, lenguages, providers, */lenguage, location)
  // console.info(providers)
  return (
    <div className="movieInfo-content row provider-list-container">
      {
        providers.length > 0 ?
          <>
            <div className="col">
              <h4 className="my-1">¿Dónde encontrar esta película?</h4>
              <div className="row">
              {
                providers[0].data.map((provider, index) => {
                  if (provider.type !== 'link')
                    return (
                      <ProviderType
                        key={index}
                        provider={provider}
                        title={config_data_type[provider.type]}
                        config_images={config_images}
                      />
                    )
                  {link = {...provider}}
                })
              }
                <div className="col-12 mb-1">
                  <h5 className="m-0 mb-1">
                    <a className="more-info" target="_blank" href={link.data}>{config_data_type[link.type]}</a>
                  </h5>
                </div>
              </div>
            </div>
          </> :
          <div className="col">
            <h4>No existen servicios de streaming para tu país</h4>
          </div>
      }
    </div>
  )
}