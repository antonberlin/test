import React, { Component } from 'react'
import { Link } from 'react-router'

class NavigationBar extends Component{
	render(){
		return (
				<nav className='navbar navbar-default'>
					<div className='container-fluid'>
						<div className='navbar-header'>
							<Link to='/' className='navbar-brand'>#SKO_KZ</Link>
							
						</div>
						<div className='collapse navbar-collapse'>
							<ul className='nav navbar-nav navbar-right'>
								<li><Link to='/signup'>Регистрация</Link></li>
								<li><Link to='/signin'>Войти</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			)
	}
}

export default NavigationBar