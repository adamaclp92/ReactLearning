import React, {useState, useRef} from 'react'
import Card from '../../UI/Card'
import Button from '../../UI/Button'
import ErrorModal from '../../UI/ErrorModal'


import styles from './AddUser.module.css'

const AddUser = (props) => {

    //refs
    //inputnál csak a végleges változattal updateljük az useState-t, ne minden egyes betűvel
    //hogyha csak readelni akarjuk az inputot, akkkor a ref jobb

    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [error, setError] = useState()


    const addUser = (event) => {
        event.preventDefault()
        const enteredUserName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title:'An error occured!',
                message:'You need to fill the name and age!'
            })
            return
        }
     
        if(+enteredUserAge >= 100){
            setError({
                title:'An error occured!',
                message:'Age must between 1 and 100!'
            })
            return
        }

        props.onPassUserList(enteredUserName, enteredUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const errorHandler = () => {
        setError(null)
    }
 
    return(
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles['AddUser--card']}>
                <form onSubmit={addUser}>
                    <label className={`${styles['AddUser--label']} form-label`}>Username</label>
                    <input 
                        className='form-control userName' 
                        ref={nameInputRef}
                        />
                    <label className={styles['AddUser--label']}>Age (Years)</label>
                    <input 
                        className='form-control userAge'
                        type="number" min="1" step="1" 
                        ref={ageInputRef}
                         />
                    <Button value='Add User' type='submit' onConfirm={errorHandler}/>
                </form>
            </Card>
        </React.Fragment>

    )
}

export default AddUser;