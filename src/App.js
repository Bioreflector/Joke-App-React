import JokeForm from './components/JokeForm'
import { URL_API_CATEGORIES } from './config'
import Jokes from './components/Jokes'
import FavouriteJokes from './components/FavouriteJokes'
import ShowFavouriteBtn from './UI/ShowFavouriteBtn'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [categories, setCategories] = useState([])
  const [jokes, setJokes] = useState([])
  const [favouritJokes, setFavouritJokes] = useState([])
  const [isShowFavourite, setShowFavourite] = useState(false)

  const addFavouriteHandler = (joke) => {
    setFavouritJokes([...favouritJokes, joke])
  }
  const deleteFavouriteHandler = (id) => {
    setFavouritJokes(favouritJokes.filter((joke) => joke.id !== id))
  }
  const isFavoruiteHandler = (id) => {
    return favouritJokes.find((joke) => joke.id === id)
  }
  const toggleShowFavouriteHandler = () => {
    setShowFavourite(!isShowFavourite)
  }
  console.log(isShowFavourite)

  useEffect(() => {
    fetch(URL_API_CATEGORIES)
      .then((response) => response.json())
      .then((categories) => setCategories(categories))
      .catch((error) => console.log(error.message))
  }, [])

  return (
    <div className="App">
      <ShowFavouriteBtn
          isShowFavourite={isShowFavourite}
          toggleShowFavourite={toggleShowFavouriteHandler }
        />
      <div className="work-place">
        <div className="msi">MSI 2022</div>
        <h1>
          Hey!
          <span>Let’s try to find a joke for you:</span>
        </h1>
        <JokeForm categories={categories} setJokes={setJokes} />
        
        <Jokes
          jokes={jokes}
          addFavourite={addFavouriteHandler}
          deleteFavourite={deleteFavouriteHandler}
          isFavoruite={isFavoruiteHandler}
        />
      </div>
      <div
        className={
          isShowFavourite
            ? 'favouriteWrapper favouriteWrapperShow'
            : 'favouriteWrapper'
        }>
        <FavouriteJokes
          favouritJokes={favouritJokes}
          addFavourite={addFavouriteHandler}
          deleteFavourite={deleteFavouriteHandler}
          isFavoruite={isFavoruiteHandler}
        />
      </div>
    </div>
  )
}

export default App
