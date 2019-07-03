import React from 'react';

// material ui components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// custom components
import Navbar from '../components/Navbar/Navbar';

const routes = () => {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Container maxWidth='md'>
				<h1 style={{ border: '3px solid black', width: '100%' }}>Routes</h1>
			</Container>
		</>
	);
};

export default routes;
