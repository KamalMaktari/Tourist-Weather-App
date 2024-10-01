import { h } from 'preact';
import style from './style.module.css'

const Event = (props) => {
  const { data } = props

  const name = data["name"]
  const times = data["times"]
  const info = data["info"]
  const price = data["price"]

  return (
    <div>
      <div class = {style.Event_First_Row}>
        <p class = {style.Event_Name}>{name}</p>
        <p class = {style.Event_Opening_Time}>{times}</p>
      </div>
      <div class = {style.Event_Second_Row}>
        <p class = {style.Event_Info}>{info}</p>
        <p class = {style.Event_Price}>{price}</p>
      </div>
    </div>
  );
}

export default Event;