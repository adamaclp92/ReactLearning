import React, { useState } from 'react'
import './circle-drawer.style.scss'

interface Coordinates {
    x: number,
    y: number,
    id: number
}

const CircleDrawer = () => {

    const [clickCoordinates, setClickCoordinates] = useState<Coordinates[]>([])
    const [deletedCoordinates, setDeletedCoordinates] = useState<Coordinates[]>([])

    const clickHandler = (event:React.MouseEvent<HTMLDivElement>) => {
        const newClicking = {
            x: event.clientX - 20,
            y: event.clientY + 20,
            id: event.clientX * event.clientY
        }
        setClickCoordinates((prevCoordinates) => [...prevCoordinates, newClicking])
    }

    const undoCoorditaneHandler = () => {
        const deletingItem = clickCoordinates.pop()
        setClickCoordinates((prevCoordinates) => prevCoordinates.filter((item) => item != deletingItem))

        if(!deletingItem) return;
        setDeletedCoordinates((prevItems) => [...prevItems, deletingItem])
    }

    const redoCoordinateHandler = () => {
        const backUpItem = deletedCoordinates.pop()
        setDeletedCoordinates((prevItems) => prevItems.filter((item) => item != backUpItem))

        if(!backUpItem) return;
        setClickCoordinates((prevItems) => [...prevItems, backUpItem])
    }

    return (
        <React.Fragment>
            <h2>Click in the area.</h2>
            <p>Place red circles on the screen. You can undo the last item and redo if you have already deleted a circle.</p>
            <div className='project-button-container'>
                <button disabled={clickCoordinates.length === 0} onClick={undoCoorditaneHandler}>Undo</button>
                <button disabled={deletedCoordinates.length === 0} onClick={redoCoordinateHandler}>Redo</button>
            </div>
            <div className="area" onClick={clickHandler}></div>
            {clickCoordinates.map((coordinate) => 
               ( <div key={coordinate.id} className='circle' style={{position:'absolute', left:`${coordinate.x}px`, top:`${coordinate.y - 35}px`}}></div>))}
        </React.Fragment>  
    )
}

export default CircleDrawer

