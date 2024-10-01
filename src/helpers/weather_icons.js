import clearDay from '../assets/weather_icons/set_1/clear-day.svg';
import clearNight from '../assets/weather_icons/set_1/clear-night.svg';
import cloudy from '../assets/weather_icons/set_1/cloudy.svg';
import fog from '../assets/weather_icons/set_1/fog.svg';
import heavyShowers from '../assets/weather_icons/set_1/heavy-showers.svg';
import heavySleet from '../assets/weather_icons/set_1/heavy-sleet.svg';
import heavySnow from '../assets/weather_icons/set_1/heavy-snow.svg';
import overcast from '../assets/weather_icons/set_1/overcast.svg';
import partlyCloudyDay from '../assets/weather_icons/set_1/partly-cloudy-day.svg';
import partlyCloudyNight from '../assets/weather_icons/set_1/partly-cloudy-night.svg';
import showers from '../assets/weather_icons/set_1/showers.svg';
import sleet from '../assets/weather_icons/set_1/sleet.svg';
import snow from '../assets/weather_icons/set_1/snow.svg';
import thunderstormShowers from '../assets/weather_icons/set_1/thunderstorm-showers.svg';
import thunderstormSnow from '../assets/weather_icons/set_1/thunderstorm-snow.svg';
import windy from '../assets/weather_icons/set_1/windy.svg';

import Clear_day from '../assets/weather_icons/set_3/clear-day.svg';
import Clear_night from '../assets/weather_icons/set_3/clear-night.svg';
import Cloudy from '../assets/weather_icons/set_3/cloudy.svg';
import Cold_winds from '../assets/weather_icons/set_3/cold-winds.svg';
import Fog from '../assets/weather_icons/set_3/fog.svg';
import Heavy_rain_day from '../assets/weather_icons/set_3/heavy-rain-day.svg';
import Heavy_rain_night from '../assets/weather_icons/set_3/heavy-rain-night.svg';
import Heavy_rain from '../assets/weather_icons/set_3/heavy-rain.svg';
import Light_rain_day from '../assets/weather_icons/set_3/light-rain-day.svg';
import Light_rain_night from '../assets/weather_icons/set_3/light-rain-night.svg';
import Light_rain from '../assets/weather_icons/set_3/light-rain.svg';
import Partly_cloudy_day from '../assets/weather_icons/set_3/partly-cloudy-day.svg';
import Partly_cloudy_night from '../assets/weather_icons/set_3/partly-cloudy-night.svg';
import Rain_and_ice from '../assets/weather_icons/set_3/rain-and-ice.svg';
import Rain_and_thunder from '../assets/weather_icons/set_3/rain-and-thunder.svg';
import Showers_day from '../assets/weather_icons/set_3/showers-day.svg';
import Showers_night from '../assets/weather_icons/set_3/showers-night.svg';
import Showers from '../assets/weather_icons/set_3/showers.svg';
import Snow_and_cloudy from '../assets/weather_icons/set_3/snow-and-cloudy.svg';
import Snow_and_rain from '../assets/weather_icons/set_3/snow-and-rain.svg';
import Snow from '../assets/weather_icons/set_3/snow.svg';
import Thunder_day from '../assets/weather_icons/set_3/thunder-day.svg';
import Thunder from '../assets/weather_icons/set_3/thunder.svg';
import Very_cloudy_day from '../assets/weather_icons/set_3/very-cloudy-day.svg';
import Very_cloudy_night from '../assets/weather_icons/set_3/very-cloudy-night.svg';
import Water from '../assets/weather_icons/set_3/water.svg';
import Windy from '../assets/weather_icons/set_3/windy.svg';
 

// uses API's icon numbering system to return our own icon depending on number
  // e.g. for API 2xx (e.g. 201, 202, etc.) = thunderstorm
const getWeatherIcon = (id) => {
  switch(Math.floor(id/100)) {
    case 2:
      return thunderstormShowers;
    case 3:
      return showers;
    case 5:
      return heavyShowers;
    case 6:
      return snow;
    case 7:
      return fog;
    case 8:
      if (id == 800) {
        return clearDay;
      }
      return partlyCloudyDay;
  }
}

export { 
  getWeatherIcon,
  clearDay,
  clearNight,
  cloudy,
  fog,
  heavyShowers,
  heavySleet,
  heavySnow,
  overcast,
  partlyCloudyDay,
  partlyCloudyNight,
  showers,
  sleet,
  snow,
  thunderstormShowers,
  thunderstormSnow,
  windy
}