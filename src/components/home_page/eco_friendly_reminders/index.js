import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

import style from './style.module.css';
import {default as icons} from '../../../helpers/reminders_icons.js';

const EcoFriendlyReminder = (props) => {
  // this is the variable containing the JSX being printed to the screen
  const [reminders, setReminders] = useState(null)

  // this is the total list of reminders
  const [listOfReminders, setListOfReminders] = useState([
    "Carry reusable water bottle",
    "Don't litter",
    "Use public transport",
    "Avoid plastic",
    "Remember to compost your biodegradable waste",
    "Reduce energy usage",
    "Plant a tree",
    "Don't be wasteful"
  ])

  // we need refs as to change the image src's when we click on them
  const remindersIconsRefs = listOfReminders.map(() => useRef())

  const heartIconClick = (e) => {
    if (e.src == icons.heartIcon) {
      e.src = icons.heartIconFilled
    } else {
      e.src = icons.heartIcon
    }
  }

  const pinIconClick = (e) => {
    if (e[1].src == icons.pinIcon) {
      e[1].src = icons.pinIconFilled
      e[2].style.display = "none"
    } else {
      e[1].src = icons.pinIcon
      e[2].style.display = "inline-block"
    }
  }

  const deleteIconHover = (e) => {
    if (e.src == icons.deleteIcon) {
      e.src = icons.deleteIconFilled
    } else {
      e.src = icons.deleteIcon
    }
  }

  const deleteIconClick = (reminder) => {
    setListOfReminders(listOfReminders => listOfReminders.filter((item) => {
      return (item !== reminder)
    }))
  }

  // everytime we set the list of total reminders we reset the JSX being printed to the screen
  useEffect(() => {
    setReminders(listOfReminders.map((reminder, i) => {
      if (i >= 3) return "" 

      return (
        <tr>
          <td>Tip {i+1}:</td>
          <td>{reminder}</td>
          <td ref={remindersIconsRefs[i]} >
            <img src={icons.heartIcon} onClick={() => heartIconClick(remindersIconsRefs[i].current.children[0])} />
            <img src={icons.pinIcon} onClick={() => pinIconClick(remindersIconsRefs[i].current.children)} />
            <img
              src={icons.deleteIcon}
              onMouseEnter={() => deleteIconHover(remindersIconsRefs[i].current.children[2])}
              onMouseLeave={() => deleteIconHover(remindersIconsRefs[i].current.children[2])}
              onClick={() => deleteIconClick(reminder)}
            />
          </td>
        </tr>
      )
    }))
  }, [listOfReminders])

  return (
    <div id={style["eco-friendly-reminders"]}>
      <h3 id={style.title}>Reminders</h3>
      <table>
        {reminders}
      </table>
    </div>
  );
}

export default EcoFriendlyReminder;