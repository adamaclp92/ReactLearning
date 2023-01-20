import { createContext, useState, useEffect } from "react";

import {getCategories} from '../utils/firebase/firebase.utils.js'

import { addCollectionAndDocuments, postProducts } from '../utils/firebase/firebase.utils';
import { useParams } from "react-router-dom";


export const CategoriesContext = createContext({
    categoriesMap: []
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})


     useEffect(() => {
         const getCategoriesMap = async () => {
             const categoriesMap = await getCategories()
             setCategoriesMap(categoriesMap)
         }
        //addCollectionAndDocuments('collections', SHOP_DATA);
       // postProducts(SHOP_DATA)
       getCategoriesMap()
    
   }, []);


   const value ={categoriesMap}

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}