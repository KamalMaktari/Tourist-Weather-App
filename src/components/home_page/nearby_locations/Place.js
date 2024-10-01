import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks'
import style from './style.module.css';

import * as icons from '../../../helpers/weather_icons.js'
import { getCurrentWeatherByCityAndCountryCody } from '../../../api/weather.js'
// import the api to get the current weather in the nearby locations.

const Place = (props) => {
  const { city } = props
  const [icon, setIcon] = useState(null)
  const [temperature, setTemperature] = useState(null)

  const cityName = city[1].split("_")[0]
  const country = city[1].split("_")[1]

  // to get the relevant information from the API
  useEffect(() => {
    getCurrentWeatherByCityAndCountryCody(cityName, country).then((response) => {
      setIcon(response.data.weather[0].id)
      setTemperature(Math.round(response.data.main.temp))
    })
  }, [])

  return (
    <div id={style.grid_places}>
      <h1>{cityName}</h1>
      <h1>{temperature}°</h1>
      <img id={style["weather-icon"]} src={icons.getWeatherIcon(icon)} /> 
    </div>
  );
}

export default Place;