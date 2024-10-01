import { h } from 'preact';
import style from './style.module.css';

const CurrentLocationData = (props) => {
  const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  const { data } = props

  var unixDate = data["UNIX-Date"]
  if (String(unixDate).length <= 10) {
    unixDate = unixDate*1000
  }

  const date = new Date(unixDate)
  const day = date.toLocaleString('en-US', { weekday: 'short' })+" "+date.getDate()+nth(date.getDate())
  const month = date.toLocaleString('default', { month: 'long' })

  return (
    <hgroup id={style.current_location}>
      <h1 id={style.day}>{day}</h1>
      <h1 id={style.temperature}>{Math.round(data["Temperature"])}°</h1>
      <h1 id={style.month}>{month}</h1>
    </hgroup>
  );
}

export default CurrentLocationData;