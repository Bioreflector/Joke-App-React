import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { BsChatLeftText } from 'react-icons/bs'
import LikeButton from '../UI/LikeButton'

function Joke({ joke, addFavourite, deleteFavourite, isFavoruite }) {
  const { id, url, value, categories, updated_at } = joke

  const getTimeLastUpdate = (timeLastUpdate) => {
    const timeUpdate = new Date(timeLastUpdate)
    const time = new Date()
    const timeDifference = time.getTime() - timeUpdate.getTime()
    const hoursAgo = parseInt(timeDifference / (1000 * 60 * 60))
    return hoursAgo
  }

  return (
    <div className="jokeCard">
      <div className="cardIconContainer">
        <BsChatLeftText className="cardIcon" />
      </div>
      <span>
        ID:<a href={url}>{id}</a>
      </span>
      <p>{value}</p>
      <div className="cardInf">
        <div className="cardUpdateInf">
          last update: <b>{getTimeLastUpdate(updated_at)}</b>
        </div>
        {categories.length ? (
          <div className="cardCategory">{categories[0]}</div>
        ) : (
          <></>
        )}
      </div>
      <LikeButton
        onClick={() =>
          !isFavoruite(id) ? addFavourite(joke) : deleteFavourite(id)
        }>
        {!isFavoruite(id) ? <FcLikePlaceholder /> : <FcLike />}
      </LikeButton>
    </div>
  )
}

export default Joke
