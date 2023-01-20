import React, { FormEvent, useReducer, useState } from "react";

const initialState: any[] = [{}]; 

const ACTIONTYPES = {
    ADD_TODO: 'add_todo',
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_todo'
};

type ACTIONTYPE = {
  type: string; payload: {id: Date, name: string}
};

const reducer = (todos: typeof initialState, action: ACTIONTYPE) => {
    switch(action.type){
        case ACTIONTYPES.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONTYPES.TOGGLE_TODO:
           return todos.map(todo => {
             if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete}
             }
             return todo
            })

        case ACTIONTYPES.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)

        default:
          throw new Error()
        }
};

const newTodo = (name: string) => {
    return {id: Date.now(), name: name, complete: false}
} 

/*const initialState = { count: 0 }

type ACTIONTYPE = 
| { type: 'increment'; payload: number }
| { type: 'decrement'; payload: number };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch(action.type){
    case 'increment':
      return { count: state.count + action.payload};
    case 'decrement':
      return { count: state.count - action.payload};
    default:
      throw new Error();
  }
}*/

const UserReducerPractice = () => {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState<string | undefined>('');


  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    dispatch({type: ACTIONTYPES.ADD_TODO, payload: {name: name!, id: new Date()}})
    setName('')
  }

  const handleToggle = (todo: any) => {
    dispatch({type: ACTIONTYPES.TOGGLE_TODO, payload: {name: todo.name, id: todo.id}})
  }

  const deleteTodo = (todo: any) => {
    dispatch({type: ACTIONTYPES.DELETE_TODO, payload: {name: todo.name, id: todo.id}})
  }

  return (
    <React.Fragment>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />

        </form>
        <div>
        {todos.length > 0 && todos.map((todo) => (
          <div key={`div_${todo.id}`}>
          <span key={todo.id} style={{ color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
          <button key={`toggle_${todo.id}`} onClick={() => handleToggle(todo)}>Toggle</button>
          <button key={`delete_${todo.id}`} onClick={() => deleteTodo(todo)}>Delete</button>
          </div>

        ))}
        </div>

    </React.Fragment>
/*
    <React.Fragment>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 5})}>-</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5})}>+</button>
    </React.Fragment>
  */);
};

export default UserReducerPractice;
