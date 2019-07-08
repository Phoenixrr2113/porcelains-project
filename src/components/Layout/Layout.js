import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const styles = {
	root: {
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		backgroundImage:
			'url(' +
			'https://res.cloudinary.com/dlrdfp08e/image/upload/v1562167700/porcelains/white-marble-texture-detailed-structure-of-marble-in-natural-patterned-for-background-and-design_u-l-q105odr0.jpg' +
			')',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
	items: {
		flexGrow: 1,
	},
};

const Layout = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<CssBaseline />
			<div className={classes.items}>
				<Navbar />
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

export default withStyles(styles)(Layout);
