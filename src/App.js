import React from 'react';
//components and pages
import Home from './pages/home';
import Nav from './components/Nav';
//Styles
import GlobalStyles from './components/GlobalStyles';
//Router
import { Route } from 'react-router-dom';
const dotenv = require('dotenv').config();

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Nav />
			<Route path={['/game/:id', '/']}>
				<Home />
			</Route>
		</div>
	);
}

export default App;
