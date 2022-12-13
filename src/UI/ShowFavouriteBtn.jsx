import styles from './ShowFavouriteBtn.module.css'

function ShowFavouriteBtn({ isShowFavourite, toggleShowFavourite }) {
  return (
    <button
      className={
        isShowFavourite ? `${styles.button} ${styles.active}` : styles.button
      }
      onClick={() => toggleShowFavourite()}>
      Favourite <span></span>
    </button>
  )
}

export default ShowFavouriteBtn
