import React, { useState, useEffect } from 'react'
import UseHttpRequests from '../../../hooks/useHttpRequest.'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'
import MealItemForm from '../MealItemForm/MealItemForm'



import styles from './AvailableMeals.module.css'

const AvailableMeals = () => {

   const [meals, setMeals] = useState([])
   const {error, isLoading, httpRequest: getMeals} = UseHttpRequests()
  
   useEffect(() => {
    const transformMeals = (dataObj) => {
      const mealItems = []

      for (const item in dataObj){
        mealItems.push({
            id: item,
            name: dataObj[item].name,
            description: dataObj[item].description,
            price: dataObj[item].price
          })
      }

      setMeals(mealItems)
    }

    getMeals({url: "https://react-http-34ef6-default-rtdb.firebaseio.com/meals.json"}, transformMeals)
    }, [getMeals])

   let content = meals.map(meal => {
        return (
                <React.Fragment key={meal.id}>
                    <div className={`${styles.parent} container`}>
                        <MealItem 
                                className={styles.mealItem}
                                name={meal.name}
                                description={meal.description}
                                price={meal.price}
                            />
                        <MealItemForm 
                            id={meal.id}
                            name={meal.name}
                            price={meal.price}
                            className={styles.mealItemForm}
                        />
                        <hr className={styles.hr}/>
                    </div>

                </React.Fragment>
   
        )
     })

     
     if(error){
        return (
           content = <h2>{error}</h2>
        )
    }

     if(isLoading){
         return (
            content = <h2 className={styles.loading}>Loading...</h2>
         )
     }

    return(
        <Card className={styles.card}>
            {content}
        </Card>
    )
}

export default AvailableMeals