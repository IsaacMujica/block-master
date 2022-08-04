import { useRef/*, useEffect*/ } from 'react'
import Paginator from './footer/Paginator'
import '../css/footer.css'

export default function Footer() {
	const observedElement = useRef(null)
	/*let isChecked = false
	console.info('Footer', isChecked)
	useEffect(() => {
		if (document.querySelector('#infiniteScroll'))
			isChecked = true
	}, [isChecked])*/
	return (
		<footer ref={observedElement} id="interseptor">
			<Paginator observedElement={observedElement} /*isChecked={isChecked}*/ />
		</footer>
	)
}