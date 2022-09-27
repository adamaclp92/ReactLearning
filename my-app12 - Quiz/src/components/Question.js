import React, { useState, useEffect } from 'react'

export default function Question(props){

    const styles = {
        backgroundColor: props.allAnswers[0].isSelected ? "white" : "black"
    }
  
  

    return(
      
        <div>
                <div key={props.question} className='question'>{props.question}</div>
                <button key={props.allAnswers[0].name + 0}
                    className='btn btn-answer'
                    value={props.allAnswers[0].name}
                    onClick={(event) => props.toggleAnswerButton(event)}
                    style= {{backgroundColor: props.allAnswers[0].isSelected ? "white" : "black"}}
                    >{props.allAnswers[0].name}
                </button>
                <button key={props.allAnswers[1].name + 1}
                    className='btn btn-answer'
                    value={props.allAnswers[1].name}
                    onClick={(event) => props.toggleAnswerButton(event)}
                    >{props.allAnswers[1].name}
                </button>
                <button key={props.allAnswers[2].name + 2}
                    className='btn btn-answer'
                    value={props.allAnswers[2].name}
                    onClick={(event) => props.toggleAnswerButton(event)}
                    >{props.allAnswers[2].name}
                </button>
                <button key={props.allAnswers[3].name + 3}
                    className='btn btn-answer'
                    value={props.allAnswers[3].name}
                    onClick={(event) => props.toggleAnswerButton(event)}
                    >{props.allAnswers[3].name}
                </button>
                <hr key={props.question + "hr"}></hr>

              
        </div>
    )
}