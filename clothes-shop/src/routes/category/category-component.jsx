import { Fragment, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context";
import { CartContext } from "../../contexts/cart.context";
import Button from '../../components/UI/button/button'
import {ProductsContainer, Title, ProductContainer, ProductName, ProductPrice} from './category-component.styles'

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])
    const {addItemToCart} = useContext(CartContext)

    const toggleAddCartButton = (product) => {
        addItemToCart(product)
    }

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]) 

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
                <ProductsContainer>
                {products && products.map((product) => (
                    <ProductContainer key={product.id}>
                        <img src={product.imageUrl}/>
                        <Fragment>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>$ {product.price}</ProductPrice>
                        </Fragment>
                        <Button buttonType='inverted'onClick={() => toggleAddCartButton(product)}>Add to Cart</Button>
                    </ProductContainer>
                ))}
            </ProductsContainer>
        </Fragment>
    )
}

export default Category