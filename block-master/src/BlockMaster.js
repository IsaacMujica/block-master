import { useEffect, useState} from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import Slider from './components/Slider'
import Main from './components/Main'

import { useSelector, useDispatch } from 'react-redux'

function BlockMaster() {
  //console.info(apiTMDB/*('getCountries')*/)
  /*let count = useSelector(state => state.apiConfiguration)
  const dispatch = useDispatch()
  populate(apiTMDB).then(result => {
    //count = result
    return false
    dispatch(VALIDATE_DATA_ASYNC(result))
  })*/
  /*.then( result => {
  })*/
  /*useEffect(_ => {
    dispatch(VALIDATE_DATA())
  })*/

  /**
   * ACÁ SE DEBE CREAR LA LÓGICA DEL LOADER
   */

  /**
   * FIN ACÁ SE DEBE CREAR LA LÓGICA DEL LOADER
   */
  /*const count = useSelector(async (state) => await state.movie.value)
  const dispatch = useDispatch()
  console.info(dispatch(ADD_MOVIES()))*/
  return (
    <div className="container">
      <Header />
      <Slider />
      <Main />
    </div>
  );
}

export default BlockMaster;
