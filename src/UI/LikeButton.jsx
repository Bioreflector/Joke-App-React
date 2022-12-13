import styles from './LikeButton.module.css'
function LikeButton(props) {
  const { onClick, children } = props
  return (
    <button {...props} onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default LikeButton
