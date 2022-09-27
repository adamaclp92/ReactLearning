import React, { useState, useEffect } from 'react'
import WindowTracker from "./WindowTracker"


export default function App(){

    const [show, setShow] = useState(true)

    function toggle(){
        setShow(!show)
    }

    
    return(
        <div className='container'>
            <button className='btn btn-light btn-lg btn-block windowTrackerButton' onClick={toggle}>
                Toggle WindowTracker
            </button>
          {show && <WindowTracker />}
        </div>

    )

}