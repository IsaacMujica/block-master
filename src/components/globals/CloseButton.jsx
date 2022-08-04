import { IconPlus } from '../icons'

export default function CloseButton ({target}) {

	const handlerCloseWatchNowClick = event => {
		target.current.style.display = 'none'
		document.querySelector('body').style.overflow = 'visible'
	}

	return (
		<button onClick={handlerCloseWatchNowClick} className="close">
			<IconPlus />
		</button>
	)
}