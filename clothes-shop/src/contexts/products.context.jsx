import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../components/shop-data'

import { addCollectionAndDocuments, postProducts } from '../utils/firebase/firebase.utils';


export const ProductsContext = createContext({
    products: []
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA)
    const value ={products}

     useEffect(() => {
        //addCollectionAndDocuments('collections', SHOP_DATA);
        postProducts(SHOP_DATA)
    
   }, []);

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}