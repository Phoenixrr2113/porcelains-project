import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const styles = {
	root: {
		padding: 0,
		flexGrow: 1,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	links: {
		display: 'flex',
	},
};

function Navbar(props) {
	const { classes } = props;

	return (
		<Toolbar className={classes.root}>
			<AppBar position='static' color='default'>
				<Container maxWidth='lg'>
					<Toolbar className={classes.toolbar}>
						<Button className={classes.menuButton}>
							<Link to='/'>
								<img
									src='https://res.cloudinary.com/dlrdfp08e/image/upload/c_scale,h_51/v1562167696/porcelains/Outlook-2p431lzt.png'
									alt='logo'
								/>
							</Link>
						</Button>
						<div className={classes.links}>
							<Button>
								<Link to='/'>Main</Link>
							</Button>
							<Button>
								<Link to='/about'>About</Link>
							</Button>
							<Button>
								<Link to='/products'>Products</Link>
							</Button>
							<Button>
								<Link to='/contact'>Contact</Link> Us
							</Button>
						</div>
						<div className={classes.signin}>
							<Button>
								<Link to='/auth'>Sign In</Link>
							</Button>
						</div>
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
