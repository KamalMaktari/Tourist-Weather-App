import { h } from 'preact';
import style from './style.module.css'
import Attraction from './Attraction.js';
import Event from './Event.js';

const Events = (props) => {
  const attractions = { /* Information about attractions will be provided for tourists. */
    0 : {
      "name" : "The British Museum", /* The attraction's name will be displayed. */
      "times" : "Opens: 10am - 5pm", /* The attraction's opening times will be displayed. */
      "info" : "The British Museum is a world-renowned museum in London with over 8 million objects from human history and culture.", /* There will be an information summary about the attraction.*/
      "price" : "Cost: Free" /* The attraction's price will be displayed. */
    },

    1 : {
      "name" : "The Tower of London",
      "times" : "Opens: 9am - 5:30pm",
      "info" : "The Tower of London is a historic castle in London with a rich and varied history.",
      "price" : "Cost: £28.90 - £35.10"
    },

    2 : {
      "name" : "The London Eye",
      "times" : "Opens: 10am - 8:30pm",
      "info" : "The London Eye is a giant Ferris wheel in London offering stunning views of the city skyline.",
      "price" : "Cost: £24 - £30"
    }
  }

  const events = { /* Information about events will be provided for tourists. */
    0 : {
      "name" : "Winter Wonderland", /* The event's name will be displayed. */
      "times" : "Opens: Dec 10am - 10pm", /* The event's opening times will be displayed. */
      "info" : "Winter Wonderland is a festive winter festival held annually in Hyde Park.", /* There will be an information summary about the event.*/
      "price" : "Cost: Free" /* The event's price will be displayed. */
    },

    1 : {
      "name" : "Notting Hill Carnival",
      "times" : "Opens: Aug 10am - 8pm",
      "info" : "Notting Hill Carnival is an annual two-day street festival in August that celebrates Caribbean culture.",
      "price" : "Cost: Free"
    },

    2 : {
      "name" : "Chelsea Flower Show",
      "times" : "Opens: May 8am - 8pm",
      "info" : "Chelsea Flower Show is an annual flower show held in May in the grounds of the Royal Hospital Chelsea.",
      "price" : "Cost: £35 - £75"
    }
  }

  return (
    <div>
      <h1 id={style.Title}>Attractions and Events</h1>
      <div id={style.Tourist_Attractions}>
        <h2 id={style.Attractions}>Nearby Attractions</h2>
        <div class={style.container}>
          <Attraction data={attractions[0]} />
          <hr class={style.divider} />
          <Attraction data={attractions[1]} />
          <hr class={style.divider} />
          <Attraction data={attractions[2]} />
        </div>
      </div>
      <div id={style.Tourist_Events}>
        <h2 id={style.Events}>Nearby Events</h2>
        <div class={style.container}>
          <Event data={events[0]} />
          <hr class={style.divider} />
          <Event data={events[1]} />
          <hr class={style.divider} />
          <Event data={events[2]} />
        </div>
      </div>
    </div>
  );
}

export default Events;