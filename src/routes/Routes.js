import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// material ui components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

// custom components
import Navbar from '../components/Navbar/Navbar';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import ProductsPage from '../views/ProductsPage';
import ContactPage from '../views/ContactPage';
import Auth from '../views/Auth/Auth';

const styles = {
	root: {
		height: '100vh',
		backgroundImage:
			'url(' +
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1562167700/porcelains/white-marble-texture-detailed-structure-of-marble-in-natural-patterned-for-background-and-design_u-l-q105odr0.jpg' +
			')',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
};

const routes = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Navbar />
			<Container maxWidth='lg'>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/products' component={ProductsPage} />
					<Route exact path='/contact' component={ContactPage} />
					<Route exact path='/auth' component={Auth} />
				</Switch>
			</Container>
		</div>
	);
};

export default withStyles(styles)(routes);
