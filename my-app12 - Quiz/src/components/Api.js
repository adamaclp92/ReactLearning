import React, { useEffect, useState } from 'react'
import {encode} from 'html-entities';
import {decode} from 'html-entities';
import Question from './Question'

decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;');



export default function Api(props){

    const [questions, setQuestions] = useState([])

    //fetch api and set question
    useEffect(() => {

      const fetchData = async ()=> await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => setQuestions(data.results))
        
        fetchData()

    }, [props.pageChanger])
   
    console.log(questions)


    //question init
    for(let i = 0; i < questions.length; i++){
        let actualQuestion = questions[i]
        let  allAnswers = []
      
        let replacedQuestion = actualQuestion.question
        replacedQuestion = replacedQuestion.replace(/&quot;/g, "\"")
        replacedQuestion = replacedQuestion.replace(/&#039;/g, "'")
        actualQuestion.question = replacedQuestion
        actualQuestion.haveASelected  = false
        actualQuestion.selectedValue = ""


        let newAnswer = {
            name: actualQuestion.correct_answer,
            isSelected: false
        }
        allAnswers.push(newAnswer)

        for(let j = 0; j < actualQuestion.incorrect_answers.length; j++){
            let newIncorrectAnswer = {
                name: actualQuestion.incorrect_answers[j],
                isSelected: false
            }
            allAnswers.push(newIncorrectAnswer)
        }

        allAnswers.sort()
        actualQuestion.allAnswers = allAnswers
    }


  

    function toggleAnswerButton(event){
      
      for(let i = 0; i < questions.length; i++){
          for(let j = 0; j < questions[i].allAnswers.length; j++){
            if(questions[i].allAnswers[j].name === event.target.value){
                questions[i].allAnswers[j].isSelected = !questions[i].allAnswers[j].isSelected
                console.log(questions[i].allAnswers[j])
            }
          }
        

      }
     
        
     /* for(let i = 0; i < question.length; i++){
          if(event.target.value === questions[i].correct_answer || event.target.value === questions[i].incorrect_answers){

          }
      }*/

    }

    console.log(questions)

    const jsxQuestion = questions.map(question => 
        <Question 
            key={question.question}
            question={question.question}
            allAnswers={question.allAnswers}
            toggleAnswerButton ={(event) => toggleAnswerButton(event)}  
        />

    )

    return(
            <div className='question-div'>
                <div>{jsxQuestion}</div>    
            </div>

            
    )
}