import { h } from 'preact';
import style from './style.module.css';
import {default as map_icons} from '../../../helpers/map_icons.js'

const Country = (props) => {
  const { country } = props

  return (
      <img id={style.country} src={map_icons[country]} alt="country_icon" />
   );
}

export default Country;