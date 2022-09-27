import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import datas from './data.js'

export default function App(){
const dataElements = datas.map(data => {
        return <Content 
                key = {data.title}
                {... data }
            />
        
} )

console.log(dataElements)
    return (
        <div>
            <Header />
            {dataElements}
        </div>
    )
}