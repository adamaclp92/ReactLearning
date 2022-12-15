import CategoryItem from "../category-item/category-item.jsx"
import style from "./categories.module.scss"
const Categories = (props) =>{

    return (
        <div className={style['categories-container']}>
        {props.categories.map((category) => (
        <CategoryItem 
          key={category.id}
          title={category.title}
          id={category.id}
          imageUrl={category.imageUrl}
        />

      ))}
    </div>
    )
}


export default Categories
