import React from "react";
import styles from "./category-item.module.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = ( {category} ) => {

  const {title, imageUrl, route} = category;

  const navigate = useNavigate()

  const goToCategory = () => {
    navigate(`/${route}`.toLowerCase())
  }
    
  return (
      <div className={styles["category-container"]}>
        <div
          className={styles["background-image"]}
          style={{
            backgroundImage: `${imageUrl}`,
          }}
        />
        <div className={styles["category-body-container"]} onClick={goToCategory}>
          <h2>{title}</h2>
          <p>Shop Nows</p>
        </div>
      </div>
  );
};

export default CategoryItem;
