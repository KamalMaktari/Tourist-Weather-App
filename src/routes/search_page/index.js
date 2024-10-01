import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.module.css';

import SearchBar from '../../components/search_page/search_bar';
import Time from '../../components/search_page/time';
import Weather from '../../components/search_page/weather';
import Country from '../../components/search_page/country';

import { getCurrentWeatherByCityAndCountryCody } from '../../api/weather.js'

const SearchPage = (props) => {
  // static data - default to current location
  const [location, setLocation] = useState(["London, UK", "London_GB"]);
  const [data, setData]         = useState(null);

  // whenever the location changes we do an API call to fetch the data for that location
  useEffect(() => {
    const cityName    = location[0].split(",")[0]
    const countryCode = location[1].split("_")[1]

    getCurrentWeatherByCityAndCountryCody(cityName, countryCode).then((response) => {
      setData({
        "Name" : response.data.name,
        "Temperature" : response.data.main.temp,
        "TemperatureMax" : response.data.main.temp_max,
        "TemperatureMin" : response.data.main.temp_min,
        "Weather" : response.data.weather[0].main,
        "WeatherDescription" : response.data.weather[0].description,
        "WeatherId" : response.data.weather[0].id,
        "Timezone" : response.data.timezone,
        "Sunrise" : response.data.sys.sunrise,
        "Sunset" : response.data.sys.sunset,
        "UNIX-Date" : response.data.dt,
        "WindSpeed (m/s)" : response.data.wind.speed,
        "Cloudiness (%)" : response.data.clouds.all,
        "Humidity (%)" : response.data.main.humidity
      })
    })
  }, [location]);

  return (
    <div>
      <SearchBar location={location} setLocation={setLocation} data={data} setData={setData} />
      <section id={style.time}>
        <Time data={data} />
      </section>
      <section id={style.weather}>
        <Weather data={data} />
      </section>
      <section id={style.country}>
        <Country data={data} location={location}/>
      </section>
    </div>
  );
}

export default SearchPage;