import { h } from 'preact';
import style from './style.module.css';

const UpcomingWeekDay = (props) => {
  const { date, temperature } = props

  var unixDate = date
  if (String(unixDate).length <= 10) {
    unixDate = unixDate*1000
  }

  return (
    <div class={style.grid_item}>
      <h1>{new Date(unixDate).toLocaleString('en-US', { weekday: 'short' })}</h1>
      <h1>{Math.round(temperature)}<span>°</span></h1>
    </div>
  );
}

export default UpcomingWeekDay;