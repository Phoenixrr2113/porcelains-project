import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const styles = {
	root: {
		padding: 0,
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: '#242424',
	},
	toolbar: {
		padding: 0,
		display: 'flex',
		justifyContent: 'space-between',
	},
	links: {
		color: 'white',
		textDecoration: 'none',
		borderRight: '2px solid grey',
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
	signin: {
		width: 150,
		textAlign: 'center',
		padding: 10,
		border: '1px solid #49A200',
		color: 'white',
		textDecoration: 'none',
		height: 'auto',
		paddingRight: 5,
		paddingLeft: 10,
		fontSize: 18,
		borderRadius: 0,
	},
};

function Navbar(props) {
	const { classes } = props;

	return (
		<Toolbar className={classes.root}>
			<AppBar className={classes.appBar} position='static'>
				<Container maxWidth='lg'>
					<Toolbar className={classes.toolbar}>
						<Button>
							<Link to='/'>
								<img
									src='https://res.cloudinary.com/dlrdfp08e/image/upload/c_scale,h_51/v1562167696/porcelains/Outlook-2p431lzt.png'
									alt='logo'
								/>
							</Link>
						</Button>
						<div>
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

						<Link className={classes.signin} to='/auth'>
							Sign In
						</Link>
					</Toolbar>
				</Container>
			</AppBar>
		</Toolbar>
	);
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
