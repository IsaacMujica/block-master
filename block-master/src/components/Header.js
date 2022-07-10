// import { useEffect, useState} from 'react'
import styled from 'styled-components'
import logo from '../images/logo-blockBuster.png'
import { IconSearch } from './icons'
import '../css/header.css'

import { SEARCH_MOVIES_ASYNC, REMOVE_MOVIES } from '../reducers/index'
import { useSelector, useDispatch } from 'react-redux'

const Nav = styled.nav`
	padding: 1.5rem 0;
`

export default function Header() {
	let movies     = useSelector(state => state.movie)
	const dispatch = useDispatch()
	const handlerSubmit = event => {
		event.preventDefault()
		dispatch(REMOVE_MOVIES())
		dispatch(SEARCH_MOVIES_ASYNC({ query: event.target.query.value }))
	}
	return (
		<header>
			<Nav>
				<ul className="navbar">
					<li className="item logo">
						<img className="img-fluid" src={logo} alt="" />
					</li>
					<li className="item">
						<a href="#a" className="item-text">Todas</a>
					</li>
					<li className="item">
						<a href="#b" className="item-text">Más valoradas</a>
					</li>
					<li className="item">
						<a href="#c" className="item-text">Menos valoradas</a>
					</li>
					<li className="item">
						<form className="search-form" onSubmit={handlerSubmit}>
							<div className="input-group">
								<input type="text" name="query" placeholder="Busca tu película favorita" />
								<button>
									<IconSearch />
								</button>
							</div>
						</form>
					</li>
				</ul>
			</Nav>
		</header>
	)
}