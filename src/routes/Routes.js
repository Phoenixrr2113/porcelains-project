import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// material ui components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// custom components
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import ProductsPage from '../views/ProductsPage';
import ContactPage from '../views/ContactPage';
import Auth from '../views/Auth/Auth';

const routes = () => {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Container maxWidth='md'>
				<div style={{ border: '6px solid black', width: '100%' }}>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/about' component={AboutPage} />
						<Route exact path='/products' component={ProductsPage} />
						<Route exact path='/contact' component={ContactPage} />
						<Route exact path='/auth' component={Auth} />
					</Switch>
				</div>
			</Container>
		</>
	);
};

export default routes;
