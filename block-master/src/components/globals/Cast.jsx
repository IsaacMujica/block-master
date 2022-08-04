import iconBrokenImage from '../../icons/broken-image.svg'

export default function Cast({ base_path, credit }) {
	const { profile_path, character, original_name } = {...credit}

	//return <></>

	return (
		<div className="cast" title={original_name}>
			<div className="cast-content">
				{ profile_path === null ?
					<img src={iconBrokenImage} alt="" className="cast-poster img-fluid no-casts-poster" /> :
					<img src={`${base_path}/${profile_path}`} alt="" className="cast-poster img-fluid" />
				}
				<h6 className="character-name">{original_name}</h6>
				<p className="character-name">{character}</p>
			</div>
		</div>
	)
}