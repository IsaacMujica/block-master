import '../../css/loader.css'
export default function Loader () {
	console.info('LOADER LOADED')
	return (
		<div className="loader-container">
			<span className="loader"></span>
		</div>
	)
}