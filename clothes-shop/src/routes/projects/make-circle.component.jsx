import React, { useState } from 'react'
import './make-circle.style.scss'

const MakeCircle = () => {

    const [clickCoordinates, setClickCoordinates] = useState([])
    const [deletedCoordinates, setDeletedCoordinates] = useState([])

    const clickHandler = (event) => {
        const newClicking = {
            x: event.clientX - 20,
            y: event.clientY - 20,
            id: event.clientX * event.clientY
        }
        setClickCoordinates((prevCoordinates) => [...prevCoordinates, newClicking])
    }

    const undoCoorditaneHandler = () => {
        const deletingItem = clickCoordinates.pop()
        setClickCoordinates((prevCoordinates) => prevCoordinates.filter((item) => item != deletingItem))
        setDeletedCoordinates((prevItems) => [...prevItems, deletingItem])
    
    }

    const redoCoordinateHandler = () => {
        const backUpItem = deletedCoordinates.pop()
        setDeletedCoordinates((prevItems) => prevItems.filter((item) => item != backUpItem))
        setClickCoordinates((prevItems) => [...prevItems, backUpItem])
    }

    return (
        <React.Fragment>
            <h2>Click in the area.</h2>
            <div className='project-button-container'>
                <button disabled={clickCoordinates.length === 0} onClick={undoCoorditaneHandler}>Undo</button>
                <button disabled={deletedCoordinates.length === 0} onClick={redoCoordinateHandler}>Redo</button>
            </div>
            <div className="area" onClick={clickHandler}></div>
            {clickCoordinates.map((coordinate) => 
               ( <div key={coordinate.id} className='circle' style={{position:'absolute', left:`${coordinate.x}px`, top:`${coordinate.y}px`}}></div>))}
        </React.Fragment>  
    )
}

export default MakeCircle

