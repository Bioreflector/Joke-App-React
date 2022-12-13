import styles from './Category.module.css'
function Сategory({ category, setCategoryValue ,categoryValue }) {
  return (
    <div className={styles.categoryBox}>
    <input
        type="radio"
        id={category}
        value={category}
        name="categoryRadioGroup"
        className={styles.categoryInput}
        onClick={(e) => setCategoryValue(e)}
        defaultChecked = {categoryValue === category  ? true : false}
        
      />
      <label htmlFor={category} className={styles.categoryLable}>
      
      {category}
    </label>
    </div>
    
  )
}

export default Сategory
