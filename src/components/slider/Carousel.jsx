import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Dot from './Dot'
import SliderInfo from './SliderInfo'

import { SET_SLIDERINFOS } from '../../reducers/index'
import { useSelector, useDispatch } from 'react-redux'

export default function Carousel({carouselRef, items, sliderTimer}) {
	let sliderInfos = useSelector(state => state.sliderInfo)
	const dispatch  = useDispatch()

	const handlerOnSlideChange = event => {
		// console.info('handlerOnSlideChange')
		// dispatch(SET_SLIDERINFOS({slider: event}))// movie = items[event.slide]
		resetTimerWidth()
	}

	const handlerOnSlideChanged = event => {
		// console.info('handlerOnSlideChanged')
		dispatch(SET_SLIDERINFOS({slider: {...event, movie_id:items[event.slide].props.movie_id}}))// movie = items[event.slide]
		updateTimerWidth()
	}
	const handlerOnInitialized = event => {
		// console.info('handlerOnInitialized')
		dispatch(SET_SLIDERINFOS({slider: {...event, movie_id:items[event.slide].props.movie_id}}))// movie = items[event.slide]
		updateTimerWidth()
	}

	const resetTimerWidth = _ => {
		sliderTimer.current.style.width = '0'
		sliderTimer.current.style.transition = 'width 0s'
	}
	const updateTimerWidth = _ => {
		sliderTimer.current.style.width = '100%'
		sliderTimer.current.style.transition = 'width 10s'
	}

	return (
		<div className="alice-carousel-container">
			<AliceCarousel
				ref={carouselRef}
				mouseTracking
				infinite
				autoPlay
				autoPlayControls={true}
				disableButtonsControls
				autoPlayInterval="10000"
				items={items}
				disableSlideInfo={false}
				renderDotsItem={event => <Dot />}
				renderSlideInfo={event => <SliderInfo event={event} items={items} />}
				onSlideChange={handlerOnSlideChange}
				onSlideChanged={handlerOnSlideChanged}
				onInitialized={handlerOnInitialized}
			/>
		</div>
	)
}