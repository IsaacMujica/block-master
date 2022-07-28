export const formatParamsToString = params => {
	let returnString = ''
	for (const prop in params) {
		returnString += `${prop}=${params[prop]}&`
	}
	return returnString.slice(0, -1)
}

export const callToApi = async ({callback, self, props = {}}) => {
	const response = await fetch(`${self[callback]()}`, {...props})
	const data     = await response.json()
	return data
}