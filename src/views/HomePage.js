import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Paper } from '@material-ui/core';
import Header from '../components/Header/Header';

const styles = {
	root: {
		padding: 0,
		flexGrow: 1,
		marginBottom: 0,
	},
	content: {
		backgroundColor: 'rgba(0,0,0,.1)',
		border: '1px solid grey',
		borderRadius: 0,
		height: 400,
		position: 'relative',
		bottom: 40,
		paddingTop: 30,
		paddingLeft: 10,
		paddingRight: 10,
	},
	intro: {
		backgroundColor: 'rgba(0,0,0,0)',
	},
};

const HomePage = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Header />
			<Paper className={classes.content} elevation='2'>
				<main className={classes.intro}>
					<h3>WELCOME TO PORCELAINS UNLIMITED</h3>
					<p>
						We hand make each and every porcelain and provide a signature
						company trade secret to provide the most vibrant colors available.
						Enjoy one of our remarkable Porcelains Unlimited Collection pieces.
					</p>
				</main>
			</Paper>
		</div>
	);
};

export default withStyles(styles)(HomePage);
