import Categories from '../../components/categories/categories'
import categories from '../../components/categories'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Home = () => {

    return (
        <React.Fragment>
            <Categories categories={categories}/>
            <Outlet />
        </React.Fragment>

    )
}

export default Home