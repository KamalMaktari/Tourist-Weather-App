import { h } from 'preact';
import style from './style.module.css';
import * as icons from '../../../helpers/weather_icons.js'

const CurrentLocationIcon = (props) => {
  const { weather } = props
  return (
    <div id={style.icon}>
      <img src={icons.getWeatherIcon(weather)} id="weather_icon" />
    </div>
  );
}

export default CurrentLocationIcon;