import React, { useState, useEffect } from 'react'


export default function App(){
    
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    /*fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))*/

        console.log("Component rendered")

        useEffect(() => {
            console.log("Effect function ran")
            fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
        }, [count])   //ha a count van ott az array-ben, és az változik, akkor rendereli a useEffect-et, üres halmaznál nem renderel újra

        //Arra jó, hogy megadhatunk dependency-t, hogy mikor rendereljen le ez az useEffect-ben levő cucc

        function handleChange(){
            setCount(prevState => prevState + 1)
        }
        

    return (
        <div>
            <div>
                <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            </div>
            <div>
                <h1>The Count is: {count}</h1>
                <button className='btn btn-primary' onClick={handleChange}>Get new character</button>
            </div>
            
        </div>
    )
        
    
}