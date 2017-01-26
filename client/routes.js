import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import ListPage from './components/ListPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'
export default (
		<Route path='/' component={App} >
			<IndexRoute component={ListPage} />
			<Route path='/signup' component={SignUp} />
			<Route path='/signin' component={SignIn} />
			<Route path='*' component={NotFound} />
		</Route>
	)