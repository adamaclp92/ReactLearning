import React  from 'react'

import styles from './AddMovie.module.css'
import MovieModel from '../models/movieModel'
import { useRef } from 'react'


const AddMovie : React.FC<{onAddMovie: (movie: MovieModel) => void}> = (props) => {

    const titleRef = useRef<HTMLInputElement>(null)
    const openingTextRef = useRef<HTMLTextAreaElement>(null)
    const releaseDateRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault()

        const movie = {
            title: titleRef.current!.value,
            openingText: openingTextRef.current!.value,
            releaseDate: releaseDateRef.current!.value,
            id: Math.random()
        }

        props.onAddMovie(movie)

        titleRef.current!.value = ''
        openingTextRef.current!.value = ''
        releaseDateRef.current!.value = ''
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef}/>
            </div>
            <div className={styles.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea rows={5} id='opening-text' ref={openingTextRef}></textarea>
            </div>
            <div className={styles.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date' ref={releaseDateRef}/>
            </div>
             <button>Add Movie</button>
        </form>
    )

}

export default AddMovie