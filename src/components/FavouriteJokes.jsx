import Joke from './Joke'
function FavouriteJokes({
  favouritJokes,
  addFavourite,
  deleteFavourite,
  isFavoruite,
  
}) {
  return (
    <div className="favouriteJokes">
      <h2>Favourite</h2>
      {!favouritJokes.lengs ? (
        favouritJokes.map((joke) => (
          <Joke
            joke={joke}
            key={joke.id}
            addFavourite={addFavourite}
            deleteFavourite={deleteFavourite}
            isFavoruite={isFavoruite}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default FavouriteJokes
