import React, {useEffect, useState} from 'react'

export default function WindowTracker(){

 const [windowWidth, setWindowWidth] = useState(window.innerWidth)

 useEffect(() => {
     function resizeWindow(){
        console.log("setting up")
        setWindowWidth(window.innerWidth)
     }
     window.addEventListener("resize", resizeWindow)

     return(() => {
         window.removeEventListener("resize", resizeWindow)
     })
 }, [])


 return(
     <h1 className='WindowTrackerH1'>Window width: {windowWidth}</h1>
 )
}