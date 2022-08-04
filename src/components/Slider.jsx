import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import LoaderContainer from './globals/LoaderContainer'
import Carousel from './slider/Carousel'
import Actions from './slider/Actions'
import WatchNow from './slider/WatchNow'

import { SET_SLIDERS_ASYNC, VALIDATE_DATA_ASYNC } from '../reducers/index'
import { useSelector, useDispatch } from 'react-redux'

const handleDragStart = (e) => e.preventDefault();

const Section = styled.section`
	position:relative;
`

export default function Slider() {
	const carouselRef = useRef(null)
	const sliderTimer = useRef(null)
	const watchNow    = useRef(null)
	const items = []
	let sliders          = useSelector(state => state.slider)
	let apiConfiguration = useSelector(state => state.apiConfiguration)
	const dispatch = useDispatch()

	if (sliders?.sliders !== undefined && sliders?.sliders?.results !== undefined && apiConfiguration?.config !== undefined) {
		sliders.sliders.results.map(slider => {
			let backdrop_path = `${apiConfiguration.config.images.secure_base_url}${apiConfiguration.config.images.backdrop_sizes[2]}/${slider.backdrop_path}`
			items.push(
				<img
					src={backdrop_path}
					movie_id={slider.id}
					className="img-fluid"
					onDragStart={handleDragStart}
					role="presentation"
					title={slider.title}
					alt={slider.title}
				/>
			)
		})
	}

	useEffect(() => {
		if (sliders?.sliders === undefined || sliders?.sliders?.results === undefined) {
			dispatch(SET_SLIDERS_ASYNC())
		}
	}, [])

	useEffect(() => {
		if (apiConfiguration?.config === undefined) {
			dispatch(VALIDATE_DATA_ASYNC())
		}
	}, [])

	return (
		<Section className="slider-container">
			{
				items.length > 0 ?
				(
					<>
						<Carousel carouselRef={carouselRef} items={items} sliderTimer={sliderTimer} />
						<Actions sliderTimer={sliderTimer} watchNow={watchNow} />
						<WatchNow carouselRef={carouselRef} sliderTimer={sliderTimer} watchNow={watchNow} />
					</>
				) :
				<LoaderContainer text='Cargando imágenes...' />
			}
		</Section>
	)
}