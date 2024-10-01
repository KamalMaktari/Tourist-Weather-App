import { h } from 'preact';
import style from './style.module.css';

const Time = (props) => {
  const { data } = props
  var date, readableDate, time, readableTime
  var sunrise, sunset

  const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  if (data) {
    date = data["UNIX-Date"]
    readableDate = new Date(date*1000)
    readableDate = readableDate.toLocaleString('en-US', { weekday: 'short' })+" "+readableDate.getDate()+nth(readableDate.getDate())

    time = new Date()
    time = new Date(time.getTime()+(data["Timezone"]*1000))
    let minutes = String(time.getMinutes()).length == 2 ? time.getMinutes() : "0"+time.getMinutes()
    readableTime = time.getHours()+":"+minutes

    sunrise = data["Sunrise"]
    sunrise = new Date(sunrise*1000)
    minutes = String(sunrise.getMinutes()).length == 2 ? sunrise.getMinutes() : "0"+sunrise.getMinutes()
    sunrise = sunrise.getHours()+":"+minutes

    sunset = data["Sunset"]
    sunset = new Date(sunset*1000)
    minutes = String(sunset.getMinutes()).length == 2 ? sunset.getMinutes() : "0"+sunset.getMinutes()
    sunset = sunset.getHours()+":"+minutes

  } else return "";

  return (
    <div id={style.section}>
      <h1 id={style.date}>{`${readableDate} ${readableTime}`}</h1>
      <h2>Sunrise - {sunrise}<span></span>Sunset - {sunset}</h2>
    </div>
  );
}

export default Time;