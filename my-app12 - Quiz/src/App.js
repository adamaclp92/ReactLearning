import React, { useState, useEffect } from 'react'
import QuizPage from './components/pages/QuizPage'
import MainPage from './components/pages/MainPage'


export default function App(){
    const [pageChanger, setPageChanger] = useState(false)


    function setPage(){
        setPageChanger(!pageChanger)
    }

    return(
        <main>
            {!pageChanger ? 
                <div>
                   <MainPage 
                       onClick={setPage}
                   />
                </div>
             : 
                <div>
                    <QuizPage pageChanger={pageChanger}/>
                    <button 
                        className='again-btn btn btn-primary main-page-btn'
                        onClick={setPage}
                        >Play again</button>
                </div>
            }


        </main>
    )
  

}