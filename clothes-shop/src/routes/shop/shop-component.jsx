import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";

import './shop.style.scss'


const Shop = () => {

    const {products} = useContext(ProductsContext)

    return (
        <div className="products-container">
            {products.map(item => (
            <ProductCard key={item.id} product={item}/>))}
           
        </div>
    );
}

export default Shop