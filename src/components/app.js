import { h } from 'preact';
import { Router } from 'preact-router';
import { useState } from 'preact/hooks'
import Match from 'preact-router/match';
import style from './style.module.css';
import Links from './links';
import PhoneScreen from '../routes/phone_screen';
import TabletScreen from '../routes/tablet_screen';

const App = () => {
	const [currentLocation, setCurrentLocation] = useState(false)
	const [coordinates, setCoordinates]         = useState(null)

	// getting the current location of the user as latitude and longitude
	// using a flag so the app doesn't keep requesting location after first time
	if (!currentLocation) {
		navigator.geolocation.getCurrentPosition((pos) => {
			setCoordinates([pos.coords.latitude, pos.coords.longitude])
			setCurrentLocation(true)
		})
	}

	// if URL doesn't start with /ipad use PhoneScreen, otherwise use TabletScreen
 	return (
		<div id="app">
			<Match path="/ipad">
		     	{ ({ path }) => {
		     		if (path.split('/')[1] == "ipad") {
		     			return <TabletScreen coordinates={coordinates} />
		    		} 
	     			return <PhoneScreen coordinates={coordinates} />
	     		} }
			</Match>
		</div>
  	);
}

export default App;