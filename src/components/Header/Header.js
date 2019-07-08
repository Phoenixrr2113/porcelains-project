import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Paper } from '@material-ui/core';

const styles = {
	root: {
		padding: 0,
		flexGrow: 1,
	},
	header_bg: {
		border: '1px solid grey',
		borderRadius: 0,
		height: '500px',
		backgroundImage:
			'url(' +
			'https://res.cloudinary.com/dlrdfp08e/image/upload/c_fill,h_1136/v1562171720/porcelains/Screen_Shot_2019-07-03_at_12.34.39_PM.png' +
			')',
		backgroundPosition: 'center',
		backgroundSize: '100% 500px',
		backgroundRepeat: 'no-repeat',
	},

	links: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		bottom: 15,
		padding: 0,
		zIndex: 1,
	},
	btn_styles: {
		fontSize: 35,
		padding: 0,
		width: 250,
		fontWeight: 'bold',
		color: 'white',
		backgroundColor: '#4D4D4D',
		marginLeft: 10,
		borderRadius: 0,
	},
	btn_styles_etk: {
		backgroundColor: '#969696',
		padding: 0,
		color: 'white',
		marginLeft: 10,
		fontSize: 35,
		width: 250,
		borderRadius: 0,
		fontWeight: 'bold',
	},
};

const Header = props => {
	const { classes } = props;
	return (
		<>
			<Paper elevation='2' className={classes.header_bg} />
			<div className={classes.links}>
				<Button className={classes.btn_styles}>Store</Button>
				<Button className={classes.btn_styles}>Products</Button>
				<Button className={classes.btn_styles_etk}>ETK</Button>
			</div>
		</>
	);
};

export default withStyles(styles)(Header);
