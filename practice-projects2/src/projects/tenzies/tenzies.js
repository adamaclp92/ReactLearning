import React, { useState, useEffect } from 'react'
import Die from './components/Die'
import Popup from 'reactjs-popup';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

import './style.css'
import { Container } from 'semantic-ui-react';

const timeParameter = 50
const targetTime = new Date(Date.parse(new Date()) + timeParameter * 1000)
let changeTenzies = false


export default function App(){

    const [numArray, setNumArray] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [tryingCount, setTryingCount] = useState(0)

    const maxCount = 20

    const [currentTime, setCurrentTime] = useState(new Date())
    const timeBetween = targetTime - currentTime
    const seconds = Math.floor((timeBetween / 1000) % 60)
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60)


    useEffect(() => {
      const interval = setInterval(() => {
            if((!changeTenzies) && (targetTime > new Date())){
               setCurrentTime(Date.now())
           }else {
               clearInterval(interval)
           }

           if(!(targetTime > new Date())){
            losingTheGame()
        }
       }, 1000)

    
       return () => {
           if(interval){
               clearInterval(interval)
           }
       }
    
      }, []);

    //numarray változásnál megnézi, hogy minden mező isHeld-e
    //ha igen, akkor a nummArray elemek value hasonlítja össze, hogy megegyezneke
    useEffect(() => {
      const allHEld = numArray.every(die => die.isHeld)

        let count = 0

        if(allHEld){
            for(let i = 0; i < numArray.length-1; i++){
                if(numArray[i].value === numArray[i+1].value){
                    count++
                }
            }

            if(count === numArray.length-1){
                setTenzies(true)
                changeTenzies = true
                
            }
        }
      
    }, [numArray])


    useEffect(() => {
        if(tryingCount === maxCount){
            setTenzies(false)
            changeTenzies = true
            losingTheGame()
        }
    }, [tryingCount])

    function losingTheGame(){
        alert("Vesztettél")
        window.location.reload(false);
    }

     //visszatér egy új kockával   
    function generateNewDie() {
        return {
            key: nanoid(),
            value: (Math.floor(Math.random() * 6) + 1),
            isHeld: false
        }
    }
  
    //10 kockát tartalmazó tömbbel tér vissza
    function allNewDice(){
        const newDice = []

        for(let i = 0; i < 10; i++){
            newDice.push(generateNewDie())      
        } 

        return newDice
    }

    //ahol nem isHeld, ott visszatér egy új kockával
    function toggleRollButton(){
        const newState = numArray.map(num => {
            return (!num.isHeld) ? generateNewDie() : num
        })
        setTryingCount(prevCount => prevCount + 1)
        setNumArray(newState)
    }

    //kiválasztja a kockát
    function toggleDice(die){
        const newState = numArray.map(num => {
            return (num.key === die.key) ? 
                {...num, isHeld: !num.isHeld} : 
                num
        })
        setNumArray(newState)
    }

    //új játék gomb
    function toggleNewGameButton(){
        window.location.reload(false);
    }
        

    const diceElements = numArray.map(die => 
        <Die 
            key={die.key}
            value={die.value}  
            isHeld={die.isHeld}
            onClick={() => toggleDice(die)}  
            />)


  return (
      <div>
        <div>
            <main className='tenzies_main'>
            {tenzies && <Confetti/>}
                <h1 className="tenzies_title">Tenzies</h1>
                <p className='tenzies_instructions'>A játék célja, hogy minden kocka ugyanazt a számot tartalmazza. 
                A kockákra kattintva megtarthatod az értéket.</p>
                <p className='tenzies_trying'>Hátralevő idő: <span className='countDown'>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span></p>
                
                <p className='tenzies_trying'>Eddigi próbálkozások száma: <span className='tenzies_trying-count'>{tryingCount}/20</span></p>
                <div className='tenzies_contain'>
                    <div className='tenzies_row'>
                        {diceElements}
                    </div>
                    {tryingCount < maxCount && (tenzies ? 
                        <button 
                        className='ui button green tenzies_roll-button'
                        onClick={toggleNewGameButton}>
                        Új játék
                        </button>
                        :
                    <button 
                        className='ui button blue tenzies_roll-button'
                        onClick={toggleRollButton}>
                        Roll
                    </button>
                    )}
                </div>
            </main>
        </div>
      

        
      </div>
     
  )

}