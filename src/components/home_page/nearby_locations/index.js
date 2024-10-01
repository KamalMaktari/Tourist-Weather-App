import { h } from 'preact';
import style from './style.module.css';
import Country from './Country.js';
import Place from './Place.js';
import { locations } from '../../../helpers/destination_locations.js';


const NearbyLocations = (props) => {
  const { data } = props
  // gets the country dynamically depeneding on location of current user
  const country = data["Location"].split(",")[1].trim();

  const nearby_cities = locations.filter((location, i) => (
    location[1].split("_")[1] == country
  ))

  return (
    <div>
      <h1 id={style.title}>Nearby Locations</h1>
      <div id={style.grid}>
        <Country country={country} />
        <div id={style.places}>
          <Place city={nearby_cities[0]} />
          <Place city={nearby_cities[1]} />
          <Place city={nearby_cities[2]} />
          <Place city={nearby_cities[3]} />
        </div>
      </div>
    </div>
  );
}

export default NearbyLocations;