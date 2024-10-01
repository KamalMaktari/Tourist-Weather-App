import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.module.css';
import homeButton from '../../assets/nav_icons/box.svg';
import destinationsButton from '../../assets/nav_icons/search.svg';
import searchButton from '../../assets/nav_icons/search_list.svg';

const NavigationBar = (props) => {
  const {screen} = props
  var href = screen == "tablet" ? "/ipad" : ""

  // if they are viewing the /ipad screens then the links will automatically update
  return (
    <div id={style.links}>
      <Link class={style.link} href={href+'/search'}><img id={style.searchButton} src={searchButton} alt="" /></Link>
      <Link class={style.link} href={href+"/home"}><img id={style.homeButton} src={homeButton} alt="" /></Link>
      <Link class={style.link} href={href+"/events"}><img id={style.destinationsButton} src={destinationsButton} alt="" /></Link>
    </div>
  );
}

export default NavigationBar;
