import { h } from 'preact';
import style from './style.module.css'

const Attraction = (props) => {
  const { data } = props

  const name = data["name"]
  const times = data["times"]
  const info = data["info"]
  const price = data["price"]

  return (
    <div>
      <div class = {style.Attraction_First_Row}>
        <p class = {style.Attraction_Name}>{name}</p>
        <p class = {style.Attraction_Opening_Time}>{times}</p>
      </div>
      <div class = {style.Attraction_Second_Row}>
        <p class = {style.Attraction_Info}>{info}</p>
        <p class = {style.Attraction_Price}>{price}</p>
      </div>
    </div>
  );
}

export default Attraction;