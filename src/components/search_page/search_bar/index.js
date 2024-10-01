import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import style from './style.module.css';
import { locations } from '../../../helpers/destination_locations.js';

const SearchBar = (props) => {
  // static data - default to current location
  const { location, setLocation, data, setData } = props
  const [searchBarFilter, setSearchBarFilter] = useState("");

  // we are using refs so we can get the DOM objects through component renders
  const searchBarToggleRef                       = useRef();
  const searchBarFilterInputRef                  = useRef();
  const searchBarOptionsRefs = locations.map(() => useRef());

  // if they click the search bar then it will open
  const toggleSearchBarDropdown = () => {
    searchBarToggleRef.current.classList.toggle(style["active"])

    if (searchBarToggleRef.current.classList.contains(style["active"])) {
      setSearchBarFilter("")
      filterSearchBarList("")
      searchBarFilterInputRef.current.focus()
    }
  }

  // if they select an option then it will update the page
  const updateSearchBarQuery = (e) => {
    // if you click on the div or on the label text
    if (e.target.nodeName == "DIV") {
      setLocation([e.target.children[1].innerHTML, e.target.id])
    } else if (e.target.nodeName == "LABEL") {
      setLocation([e.target.innerHTML, e.target.parentNode.id])
    }
    searchBarToggleRef.current.classList.toggle(style["active"])
  }

  // if they type a location then it will filter the locations
  const filterSearchBarDropdown = (e) => {
    setSearchBarFilter(e.target.value)
    filterSearchBarList(e.target.value)
  }

  // function for above functionality
  const filterSearchBarList = (filterSearchQuery) => {
    let filterString = filterSearchQuery.toLowerCase();
    searchBarOptionsRefs.forEach((option) => {
      let label = option.current.children[1].innerText.toLowerCase()
      if (label.indexOf(filterString) != -1) {
        option.current.style.display = "block";
      } else {
        option.current.style.display = "none";
      }
    })
  }

  // creates the html code for each location dynamically
  const searchBarOptions = locations.map((location, i) => {
    const id = location[1]
    return (
      <div class={style["option"]} key={id} id={id} ref={searchBarOptionsRefs[i]} onClick={(e) => updateSearchBarQuery(e)}>
        <input type="radio" class={style["radio"]} id={id} name="category" />
        <label for={id}>{location[0]}</label>
      </div>
    )
  })

  return (
    <section id={style["search-box-section"]}>
      <div class={style["select-box"]}>
        <div class={style["options-container"]} ref={searchBarToggleRef}>
          {searchBarOptions}
        </div>
        <div class={style["selected"]} onClick={toggleSearchBarDropdown}>
          {location[0]}
        </div>
        <div class={style["search-box"]}>
          <input type="text" value={searchBarFilter} onInput={(e) => filterSearchBarDropdown(e)} ref={searchBarFilterInputRef} />
        </div>
      </div>
    </section>
  );
}

export default SearchBar;