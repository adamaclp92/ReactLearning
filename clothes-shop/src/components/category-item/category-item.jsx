import React from "react";
import styles from "./category-item.module.scss";

const CategoryItem = ( props ) => {
    
  return (
      <div className={styles["category-container"]}>
        <div
          className={styles["background-image"]}
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        />
        <div className={styles["category-body-container"]}>
          <h2>{props.title}</h2>
          <p>Shop Nows</p>
        </div>
      </div>
  );
};

export default CategoryItem;
