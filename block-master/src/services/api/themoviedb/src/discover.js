import { API_KEY, discoverMethods, fullPath } from '../utils/constants'
import { formatParamsToString, callToApi } from '../utils/helpers'

export function discover(
	props = {},
	language = 'en-US',
	sort_by = 'popularity.desc',
	include_adult = false,
	include_video = false,
	page = 1,
	with_watch_monetization_types = 'flatrate'
) {
	const mainPath = 'discover'
	const requiredParams = {
		api_key: API_KEY,

	}
	const optionalParams = {
		language,
		sort_by,
		include_adult,
		include_video,
		page,
		with_watch_monetization_types,
		...props
	}

	this[discoverMethods.getMovie] = _ => `${fullPath}/${mainPath}/movie?${formatParamsToString(requiredParams)}&${formatParamsToString(optionalParams)}`
	this[discoverMethods.getTv]    = _ => `${fullPath}/${mainPath}/tv?${formatParamsToString(requiredParams)}&${formatParamsToString(optionalParams)}`

	return async (callback = discoverMethods.getMovie) =>
		await callToApi(callback = discoverMethods.getMovie, this)
}
