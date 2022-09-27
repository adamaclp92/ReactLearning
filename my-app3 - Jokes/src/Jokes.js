import React from 'react';

export default function Jokes(props){

    const [isShown, setIsShown] = React.useState("false")

    function toggle(){
        setIsShown(prevState => !prevState)
    }

    return (
        <div>
           {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>PunchLine: {props.punchline}</p>}
            <p>Upvotes: {props.upvotes}</p>
            <p>Array: {props.array}</p>
            {props.ispun &&<p>isPun: {props.ispun}</p>}
            <button className='btn btn-primary' onClick={toggle}>{isShown ? "Hide" : "Show"}</button>
            <hr />
        </div>
    )
}