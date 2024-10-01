import { h } from 'preact';
import style from './style.module.css';
import {default as map_icons} from '../../../helpers/map_icons.js'

const Country = (props) => {
  const { data, location } = props
  const icon = location[1].split("_")[1];
  
  if (!data) return "";

  return (
    <div id={style.section}>
      <hgroup>
        <div>
          <h1>Wind Speed:</h1>
          <h1>Cloudiness:</h1>
          <h1>Humidity:</h1>
        </div>
        <div>
          <h1>{data["WindSpeed (m/s)"]}m/s</h1>
          <h1>{data["Cloudiness (%)"]}%</h1>
          <h1>{data["Humidity (%)"]}%</h1>
        </div>
      </hgroup>
      <img src={map_icons[icon]} id={style["map_icon"]} />
    </div>
  );
}

export default Country;