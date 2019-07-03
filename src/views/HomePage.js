import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header/Header';

const styles = {
	root: {
		padding: 0,
		flexGrow: 1,
		marginBottom: 0,
	},
};

const HomePage = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Header />
		</div>
	);
};

export default withStyles(styles)(HomePage);
