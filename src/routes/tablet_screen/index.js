import { h } from 'preact';
import { Router } from 'preact-router';
import style from './style.module.css';
import HomePage from '../home_page';
import SearchPage from '../search_page';
import EventsPage from '../events_page';
import NavigationBar from '../../components/navigation_bar';

const TabletScreen = (props) => {
    // the only difference between this screen and the TabletScreen is the css which changes the screen size
    return (
        <div id={style.page}>
            <Router>
                <HomePage path="/ipad" coordinates={props.coordinates} />
                <HomePage path="/ipad/home" coordinates={props.coordinates} />
                <SearchPage path="/ipad/search" />
                <EventsPage path="/ipad/events" />
                <HomePage default />
            </Router>
            <div id={style.navbar}>
                <NavigationBar screen="tablet"/>
            </div>
        </div>
    );
}

export default TabletScreen;