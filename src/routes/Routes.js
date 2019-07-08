import React from 'react';
import { Switch, Route } from 'react-router-dom';

// material ui components

import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

// custom components
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import ProductsPage from '../views/ProductsPage';
import ContactPage from '../views/ContactPage';
import Auth from '../views/Auth/Auth';
import Layout from '../components/Layout/Layout';

const routes = props => {
	return (
		<Layout>
			<Container maxWidth='lg'>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/products' component={ProductsPage} />
					<Route exact path='/contact' component={ContactPage} />
					<Route exact path='/auth' component={Auth} />
				</Switch>
			</Container>
		</Layout>
	);
};

export default routes;
