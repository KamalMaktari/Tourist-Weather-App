import { useState, useEffect } from 'preact/hooks'
import style from './style.module.css'
import CurrentLocationData from '../../components/home_page/current_location_data';
import CurrentLocationIcon from '../../components/home_page/current_location_icon';
import UpcomingWeekDay     from '../../components/home_page/upcoming_week_day';
import NearbyLocations     from '../../components/home_page/nearby_locations';
import EcoFriendlyReminder from '../../components/home_page/eco_friendly_reminders';

import { getForecastWeatherByLatLon } from '../../api/weather.js'

const HomePage = (props) => {
  const [data, setData] = useState(null)
  const { coordinates } = props
  
  // this triggers anytime the co-ordinates variable changes
  //     i.e.) when they accept to track current location in browser
  useEffect(() => {
    if (coordinates) {
      // if they accept, get weather from API using co-ordinates

      getForecastWeatherByLatLon(coordinates[0], coordinates[1], 7).then((response) => {
        setData({
          "Location" : response.data.city.name+", "+response.data.city.country,
          "Timezone" : response.data.city.timezone,

          "Day1" : {
            "Temperature" : response.data.list[0].temp.day,
            "Weather" : response.data.list[0].weather[0].main,
            "WeatherDescriptioniption" : response.data.list[0].weather[0].description,
            "WeatherId" : response.data.list[0].weather[0].id,
            "WindSpeed (m/s)" : response.data.list[0].speed,
            "Sunrise" : response.data.list[0].sunrise,
            "Sunset" : response.data.list[0].sunset,
            "UNIX-Date" : response.data.list[0].dt
          },

          "Day2" : {
            "Temperature" : response.data.list[1].temp.day,
            "Weather" : response.data.list[1].weather[0].main,
            "WeatherDescription" : response.data.list[1].weather[0].description,
            "WeatherId" : response.data.list[1].weather[0].id,
            "WindSpeed (m/s)" : response.data.list[1].speed,
            "Sunrise" : response.data.list[1].sunrise,
            "Sunset" : response.data.list[1].sunset,
            "UNIX-Date" : response.data.list[1].dt
          },

          "Day3" : {
            "Temperature" : response.data.list[2].temp.day,
            "Weather" : response.data.list[2].weather[0].main,
            "WeatherDescription" : response.data.list[2].weather[0].description,
            "WeatherId" : response.data.list[2].weather[0].id,
            "WindSpeed (m/s)" : response.data.list[2].speed,
            "Sunrise" : response.data.list[2].sunrise,
            "Sunset" : response.data.list[2].sunset,
            "UNIX-Date" : response.data.list[2].dt
          },

          "Day4" : {
            "Temperature" : response.data.list[3].temp.day,
            "Weather" : response.data.list[3].weather[0].main,
            "WeatherDescription" : response.data.list[3].weather[0].description,
            "WeatherId" : response.data.list[3].weather[0].id,
            "WindSpeed (m/s)" : response.data.list[3].speed,
            "Sunrise" : response.data.list[3].sunrise,
            "Sunset" : response.data.list[3].sunset,
            "UNIX-Date" : response.data.list[3].dt
          },

          "Day5" : {
            "Temperature" : response.data.list[4].temp.day,
            "Weather" : response.data.list[4].weather[0].main,
            "WeatherDescription" : response.data.list[4].weather[0].description,
            "WeatherId" : response.data.list[4].weather[0].id,
            "WindSpeed (m/s)" : response.data.list[4].speed,
            "Sunrise" : response.data.list[4].sunrise,
            "Sunset" : response.data.list[4].sunset,
            "UNIX-Date" : response.data.list[4].dt
          },

          "Day6" : {
            "Temperature" : response.data.list[5].temp.day,
            "Weather" : response.data.list[5].weather[0].main,
            "WeatherDescription" : response.data.list[5].weather[0].description,
            "WeatherId" : response.data.list[5].weather[0].id,
            "WindSpeed (m/s)" : response.data.list[5].speed,
            "Sunrise" : response.data.list[5].sunrise,
            "Sunset" : response.data.list[5].sunset,
            "UNIX-Date" : response.data.list[5].dt
          },

          "Day7" : {
            "Temperature" : response.data.list[6].temp.day,
            "Weather" : response.data.list[6].weather[0].main,
            "WeatherDescription" : response.data.list[6].weather[0].description,
            "WeatherId" : response.data.list[6].weather[0].id,
            "WindSpeed (m/s)" : response.data.list[6].speed,
            "Sunrise" : response.data.list[6].sunrise,
            "Sunset" : response.data.list[6].sunset,
            "UNIX-Date" : response.data.list[6].dt
          }
        })
      })
    } else {
      // if they reject then use static, default data

      const dates = Array(7).fill(null).map((item, i) => {
        let date = new Date()
        date.setDate(date.getDate() + i)
        return date.getTime()
      });
      const temperatures = ["21","20","18","20","22","14","22"];

      setData({
        "Location" : "London, GB",

        "Day1" : {
          "Temperature" : temperatures[0],
          "WeatherId" : 800,
          "UNIX-Date" : dates[0]
        },

        "Day2" : {
          "Temperature" : temperatures[1],
          "UNIX-Date" : dates[1]
        },

        "Day3" : {
          "Temperature" : temperatures[2],
          "UNIX-Date" : dates[2]
        },

        "Day4" : {
          "Temperature" : temperatures[3],
          "UNIX-Date" : dates[3]
        },

        "Day5" : {
          "Temperature" : temperatures[4],
          "UNIX-Date" : dates[4]
        },

        "Day6" : {
          "Temperature" : temperatures[5],
          "UNIX-Date" : dates[5]
        },

        "Day7" : {
          "Temperature" : temperatures[6],
          "UNIX-Date" : dates[6]
        }
      })
    }
  }, [coordinates]);

  if (!data) {
    return ""
  }

  return (
    <div id={style.homepage}>
      <section id={style.current_location_section}>
        <CurrentLocationData data={data["Day1"]}/>
        <CurrentLocationIcon weather={data["Day1"]["WeatherId"]} />
      </section>

      <section id={style.upcoming_week_section}>
        <h1 class={style.title}>{data["Location"]}</h1>
        <div id={style.grid}>
          <UpcomingWeekDay date={data["Day1"]["UNIX-Date"]} temperature={data["Day1"]["Temperature"]} />
          <UpcomingWeekDay date={data["Day2"]["UNIX-Date"]} temperature={data["Day2"]["Temperature"]} />
          <UpcomingWeekDay date={data["Day3"]["UNIX-Date"]} temperature={data["Day3"]["Temperature"]} />
          <UpcomingWeekDay date={data["Day4"]["UNIX-Date"]} temperature={data["Day4"]["Temperature"]} />
          <UpcomingWeekDay date={data["Day5"]["UNIX-Date"]} temperature={data["Day5"]["Temperature"]} />
          <UpcomingWeekDay date={data["Day6"]["UNIX-Date"]} temperature={data["Day6"]["Temperature"]} />
          <UpcomingWeekDay date={data["Day7"]["UNIX-Date"]} temperature={data["Day7"]["Temperature"]} />
        </div>
      </section>

      <section id={style.nearby_locations}>
        <NearbyLocations data={data} />
      </section>

      <section id={style.eco_friendly_reminders}>
        <EcoFriendlyReminder />
      </section>
    </div>
  );
}

export default HomePage;
