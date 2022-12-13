import styles from './Categories.module.css'
import Category from './Category'
function Categoties({ categories , setCategoryValue , categoryValue}) {
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <Category category={category} key={index} setCategoryValue={setCategoryValue} categoryValue={categoryValue}/>
      ))}
    </div>
  )
}

export default Categoties
