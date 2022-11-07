import { Grid } from '@mui/material';
import React from 'react';
import TemporaryDrawer from '../components/Drawer/Drawer';

interface LandingPageProps {
	username: string;
}

const LandingPage = (props: LandingPageProps) => {
	const { username } = props;

	return (
		<Grid container flexDirection="column" alignItems="flex-start" style={{ paddingTop: "20px" }}>
			<Grid item container flexDirection="row-reverse" justifyContent="space-around" style={{ padding: "10px", height: "50px" }}>
				<TemporaryDrawer />
				<div className="salutation">welcome, {username}!</div>
			</Grid>
			<Grid item style={{ height: "100px" }}>	
			</Grid> 
		</Grid>
	)
};

export default LandingPage;