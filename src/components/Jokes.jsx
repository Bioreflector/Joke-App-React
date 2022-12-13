import Joke from './Joke'
function Jokes({ jokes, addFavourite, deleteFavourite , isFavoruite}) {
  return (
    <div className="jokesContainer">
      {!jokes.lengs ? (
        jokes.map((joke) => (
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

export default Jokes
