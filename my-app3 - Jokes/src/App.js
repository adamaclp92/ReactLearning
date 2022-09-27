import React from "react";
import Jokes from "./Jokes";
import jokesData from "./jokesData"


/*export default function App(props){
    console.log({jokesData})
    return (
        <div>
            <Jokes 
                setup= 'Hello'
                punchline='1dasasddsa'
                upvotes={1}
                array={[10,21,1]}
            />
            <Jokes 
                setup= 'Szia'
                punchline='asddfs'
                upvotes={10}
            />
            <Jokes 
                punchline='asddasdsadasds'
                ispun={true}

            />
        </div>
    )
}*/


//Unread messages
export default function App() {

    const [messages, setMessages] = React.useState(["s", "s"])

    return (
        <div>
            {messages.length > 0 ?
             <h1>You have {messages.length} unread {messages.length == 1 ? "message" : "messages"}!</h1> :
             <h1>You're all caught up!</h1>}
        </div>
    )
}

/*export default function App() {

    const jokeElements = jokesData.map(joke => {
        return <Jokes setup = {joke.setup}
                    punchline = {joke.punchline}
                    upvotes = {joke.upvotes}
                    array = {joke.array}
                    key = {joke.id}
        />
    })

    return (
        <div>
            {jokeElements}
        </div>
    )
}*/
