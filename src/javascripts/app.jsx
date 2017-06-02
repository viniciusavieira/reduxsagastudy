import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'stylesheets/base.scss';

class App extends React.Component {

	static BASEPATH;
	static Snackbar;

	constructor(){
		super();
		App.BASEPATH = "reduxsagaredditfeed/";
	}

	static changeRoute(routeString, replace)
	{
		if(replace)
		{
			browserHistory.replace("/reduxsagaredditfeed/"+routeString);
		}else{
			browserHistory.push("/reduxsagaredditfeed/"+routeString);
		}
	}

	render()
	{
		return (
			<div>
					{this.props.children}
			</div>
		);
	}
}

export default App
