import React from 'react'
import boxes from '../boxes'
import Box from '../components/Box'

export default function App(){

    const [squares, setSquares] = React.useState(boxes)

    function toggle(id){
        console.log(id + "clicked")

        setSquares(prevSquares => {
           
            //Declarative mode
            return prevSquares.map((square) => { 
                return square.id === id ? 
                    {...square, on: !square.on} : square
                })
            })
        }


           //Imperative mode
            /* const newSquares = []

            for (let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i];

                if(currentSquare.id === id){
                    const updateSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    console.log("Updated: " + updateSquare.id)
                    console.log("Előtte on: " + currentSquare.on)
                    console.log("Utána on: " + updateSquare.on)

                    newSquares.push(updateSquare)
                }else{
                    newSquares.push(currentSquare)
                }  
            }
            console.log(newSquares)
            return newSquares
        })  
    }
    */


    const elements = squares.map(square => 
        <Box id={square.id}
             key = {square.id}
             on={square.on}
             onClick={toggle}
        />
        )


    return(
        <div>
            {elements}
        </div>
        
    )
}