import React, { useEffect, useState } from 'react'
import './color-chooser.scss'

const ColorChooser = () => {
    const digits =  [
        "0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"
    ]

    enum Result {
        Correct,
        Wrong
    }

    const [color, setColor] = useState<string>('')
    const [answers, setAnswers] = useState<string[]>([])
    const [result, setResult] = useState<Result |undefined>(undefined)

    const colorCreator = () => {
        const colorString =  new Array(6).fill('').map(() => digits[Math.floor(Math.random() * (digits.length))]).join('')
        return '#' + colorString
    }

    const generateColors = () => {
        const actualColor = colorCreator()
        setColor(actualColor)
        setAnswers([actualColor, colorCreator(), colorCreator()].sort((a, b) => 0.5 - Math.random()))
    
    }

    const buttonClickHandler = (answer:string) => {
        if(color === answer){
            setResult(Result.Correct)
            generateColors()
        }else{
            setResult(Result.Wrong)
        }
    }

    useEffect(() => {
        generateColors()
}, [])

    console.log(color)

    return (
        <div className="container">
            <div className="square" style={{backgroundColor: `${color}`}}></div>
            {answers.map(answer => 
                <button key={answer} onClick={() => buttonClickHandler(answer)} value={answer}>{answer}</button>)}
                {result === Result.Correct &&<p>Correct!</p>}
                {result === Result.Wrong &&<p>Wrong answer!</p>}
        </div>
    )
}

export default ColorChooser