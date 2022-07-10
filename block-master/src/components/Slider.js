import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../css/slider.css'
import { IconPlay, IconPlus } from './icons'
import image1 from '../images/mulan.jpg'
import image2 from '../images/raya.jpg'
import image3 from '../images/unidos.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={image1} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={image2} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
  <img src={image3} className="img-fluid" onDragStart={handleDragStart} role="presentation" />,
]

const Section = styled.section`
	position:relative;
`

export default function Slider() {
	const btnNow   = useRef(null)
	const btnLater = useRef(null)
	const handlerNowClick = event => {

	}
	const handlerLaterClick = event => {

	}
	/*useEffect(() => {
		return _ =>	{
			const $sliderActionsContainer = document.querySelector('.slider-actions-container')
			const $sliderWrapper = document.querySelector('.alice-carousel__wrapper')
			$sliderActionsContainer.style.height = `${$sliderWrapper.offsetHeight}px`
			console.info($sliderWrapper.offsetHeight)
			//const $sliderActionsContainer.getBoundingClientRect() 
		}
	}, [])*/
	return (
		<Section className="slider-container">
			<AliceCarousel mouseTracking infinite autoPlay disableButtonsControls autoPlayInterval="3000" items={items} />
			<div className="slider-actions-container">
				<div className="content">
					<button ref={btnNow} onClick={handlerNowClick} className="whatch-now">
						<span>
							<IconPlay />
						</span>
						VER AHORA
					</button>
					<button ref={btnLater} onClick={handlerLaterClick} className="whatch-later">
						<span>
							<IconPlus />
						</span>
						VER DESPUÉS
					</button>
				</div>
			</div>
		</Section>
	)
}