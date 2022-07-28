import Loader from './Loader'
export default function LoaderContainer ({text='Cargando información...'}) {
	return (
    <div className="loader-container">
      <Loader />
      <p>{text}</p>
    </div>
	)
}