import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
	root: {
		display: 'flex',
		alignItems: 'baseline',
		justifyContent: 'center',
		backgroundColor: '#312321',
		padding: 10,
	},
	linkSection: {
		margin: '0 30px',
		display: 'flex',
		// padding: '0 20px',
	},
	links: {
		color: 'black',
		textDecoration: 'none',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		borderRadius: 0,
	},
	contact: {
		color: 'white',
		textDecoration: 'none',
		height: 'auto',
		paddingLeft: 5,
		fontSize: 18,
		borderRadius: 0,
	},
};

const Footer = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div>
				<img
					src='https://res.cloudinary.com/dlrdfp08e/image/upload/c_scale,h_51/v1562167696/porcelains/Outlook-2p431lzt.png'
					alt='logo'
				/>
			</div>
			<div className={classes.linkSection}>
				<Link className={classes.links} to='/'>
					Main
				</Link>

				<Link className={classes.links} to='/about'>
					About
				</Link>

				<Link className={classes.links} to='/products'>
					Products
				</Link>

				<Link className={classes.contact} to='/contact'>
					Contact Us
				</Link>
			</div>
			<p>© 2018 Porcelains Unlimited LLC. All Rights Reserved.</p>
		</div>
	);
};

export default withStyles(styles)(Footer);
