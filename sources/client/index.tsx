// import Loader from './components/widgets/loader';

import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import Layout from './components/layout';
import Home from './pages/home';
import Rules from './pages/rules';

// function __async(_loader: () => any) {
// 	return Loadable({
// 		loader: _loader,
// 		loading: Loader
// 	});
// }

// const Game = __async(
	// () => import(/* webpackChunkName: "game", webpackPrefetch: true * './game/core'));


render(<BrowserRouter>
		<Layout>
	        <Switch>
		        <Route path={'/regulamin'} component={Rules} />
				<Route path={'/'} component={Home} />
			</Switch>
		</Layout>
	</BrowserRouter>,
    document.getElementById('page'),
);