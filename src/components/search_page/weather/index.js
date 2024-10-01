import { h } from 'preact';
import style from './style.module.css';
import { getWeatherIcon } from '../../../helpers/weather_icons.js'

const Weather = (props) => {
  const { data } = props
  var weather, readableWeather
  if (data) {
    weather         = data["WeatherId"]
    // making the first letter of each word uppercase
    readableWeather = data["WeatherDescription"]
                        .toLowerCase()
                        .split(" ")
                        .map(word => word.charAt(0).toUpperCase()+word.slice(1))
                        .join(" ");

  } else return "";

  return (
    <div id={style.section}>
        <img src={getWeatherIcon(weather)} id="weather_icon" />
        <hgroup>
          <h2>Avg: {Math.round(data["Temperature"])}°C <span>{`(${Math.round(data["TemperatureMin"])}°-${Math.round(data["TemperatureMax"])}°)`}</span></h2>
          <h2>{data["Weather"]}</h2>
          <h3>{readableWeather}</h3>
        </hgroup>
    </div>
  );
}

export default Weather;