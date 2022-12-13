import { useState } from 'react'
import { URL_API_DEFAULT } from '../config'
import Categoties from './Categoties'
import styles from './JokeForm.module.css'

function JokeForm({ categories, setJokes }) {
  const getJoke = (e) => {
    e.preventDefault()
    const url = handleChangeUrl()
    fetch(url)
      .then((response) => response.json())
      .then((jokes) =>
        formRadioValue === 'search' ? setJokes(jokes.result) : setJokes([jokes])
      )
    setSearchText('')
  }
  const [searchText, setSearchText] = useState('')
  const [formRadioValue, setFormRadioValue] = useState('random')
  const [categoryValue, setCategoryValue] = useState('animal')
  const minSymnolForSearch = 3

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
  }
  const handleCategoryValue = (e) => {
    const { target } = e
    setCategoryValue(target.value)
  }

  const handleRadioChange = (e) => setFormRadioValue(e.target.value)
  const handleChangeUrl = () => {
    let url = ''
    switch (formRadioValue) {
      case 'category':
        url = `${URL_API_DEFAULT}random?${formRadioValue}=${categoryValue}`
        break
      case 'search':
        url = `${URL_API_DEFAULT}${formRadioValue}?query=${searchText}`
        break
      default:
        url = `${URL_API_DEFAULT}${formRadioValue}`
        break
    }
    return url
  }
  return (
    <form className={styles.jokeForm}>
      <div className={styles.radioBox}>
        <input
          type="radio"
          id="random"
          name="jokeRadioGroup"
          value="random"
          defaultChecked
          onChange={(e) => handleRadioChange(e)}
        />
        <label htmlFor="random">Random</label>
      </div>
      <div className={styles.radioBox}>
        <input
          type="radio"
          id="category"
          name="jokeRadioGroup"
          value="category"
          onChange={(e) => handleRadioChange(e)}
        />
        <label htmlFor="category">Categories</label>
      </div>
      {formRadioValue === 'category' && (
        <Categoties
          categories={categories}
          categoryValue={categoryValue}
          setCategoryValue={handleCategoryValue}
        />
      )}
      <div className={styles.radioBox}>
        <input
          type="radio"
          id="search"
          name="jokeRadioGroup"
          value="search"
          onChange={(e) => handleRadioChange(e)}
        />
        <label htmlFor="search">Search</label>
      </div>
      {formRadioValue === 'search' && (
        <input
          type="text"
          onChange={(e) => handleSearchText(e)}
          value={searchText}
          placeholder="Free text search"
          className={styles.searchInput}
        />
      )}
      <button
        type="submit"
        onClick={(e) => getJoke(e)}
        className={styles.formJokeBtn}
        disabled={
          formRadioValue === 'search' && searchText.length < minSymnolForSearch
            ? true
            : false
        }>
        Get Joke
      </button>
    </form>
  )
}

export default JokeForm
