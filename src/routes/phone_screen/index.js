import { h } from 'preact';
import { Router } from 'preact-router';
import style from './style.module.css';
import HomePage from '../home_page';
import SearchPage from '../search_page';
import EventsPage from '../events_page';
import NavigationBar from '../../components/navigation_bar';

const PhoneScreen = (props) => {
    // the only difference between this screen and the TabletScreen is the css which changes the screen size
    return (
        <div id={style.page}>
            <Router>
                <HomePage path="/" coordinates={props.coordinates} />
                <HomePage path="/home" coordinates={props.coordinates} />
                <SearchPage path="/search" />
                <EventsPage path="/events" />
                <HomePage default />
            </Router>
            <div id={style.navbar}>
                <NavigationBar screen="phone"/>
            </div>
        </div>
    );
}


export default PhoneScreen;