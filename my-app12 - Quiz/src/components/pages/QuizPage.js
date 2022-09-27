import Api from '../Api'

export default function QuizPage(props){

    return(
        <div>
            <Api pageChanger = {props.pageChanger}/>
        </div>
    )
}