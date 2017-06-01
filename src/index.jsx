import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from "javascripts/App";
import NotFound from "javascripts/view/NotFound"
import Home from "javascripts/view/home/Home";

const store = configureStore();

function startApp(){
	render((
		<Provider store={store}>
			<Router baseName="/reduxsagaredditfeed" history={browserHistory}>
				<Route path="/reduxsagaredditfeed" component={App} onChange={App.onRouteChange}>
					<Route path="home" component={Home}/>
					<Route path="*" component={NotFound} />
				</Route>
			</Router>
		</Provider>
	), document.getElementById('app'));
}

startApp();
