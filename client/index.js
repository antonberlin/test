import React, {Component} from 'react'
import {render} from 'react-dom'
import App from './components/App'
import routes from './routes'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, compose, createStore } from 'redux'

const middleware = applyMiddleware(promise(), logger());
const store = createStore((state={})=>state, composeWithDevTools(middleware));

render(
	<Provider store={store}>
	<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById('app')
);
