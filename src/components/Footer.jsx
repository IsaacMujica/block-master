import { useRef } from 'react'
import Paginator from './footer/Paginator'

export default function Footer() {
	const observedElement = useRef(null)
	return (
		<footer ref={observedElement} id="interseptor">
			<Paginator observedElement={observedElement} />
		</footer>
	)
}