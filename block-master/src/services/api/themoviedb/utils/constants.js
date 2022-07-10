const API_KEY = '57960594fac8909060f0c44b1e7767ac'

const defaultParams = {
	refresh_date: {
		short: 3, // Tiempo de días
		long: 15, // Tiempo de días
	},
	basePath: 'https://api.themoviedb.org',
	version: '3',
}

const configurationMethods = {
	getConfiguration: 'getConfiguration',
	getCountries: 'getCountries',
	getLanguages: 'getLanguages',
}
const moviesMethods = {
	getMovie: 'getMovie',
	getAlternativeTitles: 'getAlternativeTitles',
	getCredits: 'getCredits',
	getPopular: 'getPopular',
	getReviews: 'getReviews',
	getSimilarMovies: 'getSimilarMovies',
	getTopRated: 'getTopRated',
	getUpcoming: 'getUpcoming',
	getWatchProviders: 'getWatchProviders',
}
const discoverMethods = {
	getMovie: 'getMovie',
	getTv: 'getTv',
}
const searchMethods = {
	getMovies: 'getMovies',
	getCompanies: 'getCompanies',
	getPeople: 'getPeople',
}

const fullPath = `${defaultParams.basePath}/${defaultParams.version}`

const apiFilterTitle = {
	discover: {
		[discoverMethods.getMovie]: 'Todas las películas'
	},
	movies: {
		[moviesMethods.getMovie]: 'Película encontrada'
	},
	search: {
		[searchMethods.getMovies]: 'Resultado de búsqueda'
	}
}

export {
	API_KEY,
	defaultParams,
	fullPath,
	apiFilterTitle,
	configurationMethods,
	moviesMethods,
	discoverMethods,
	searchMethods,
}