import iconBrokenImage from '../../icons/broken-image.svg'

export default function Crew({ base_path, credit }) {
	const { profile_path, job, original_name } = {...credit}

	//return <></>

	return (
		<div className="cast" title={original_name}>
			<div className="cast-content">
				{ profile_path === null ?
					<img src={iconBrokenImage} alt="" className="cast-poster img-fluid no-casts-poster" /> :
					<img src={`${base_path}/${profile_path}`} alt="" className="cast-poster img-fluid" />
				}
				<p className="character-name"><h6>{original_name}</h6></p>
				<p className="character-name">{job}</p>
			</div>
		</div>
	)
}